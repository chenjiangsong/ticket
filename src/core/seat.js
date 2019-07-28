import { angle } from './util'
import { RENDER_CONFIG } from './constants'

// const DPR = window.devicePixelRatio
const DPR = 1

let id = 0



export default class Seat {
  constructor ({ area, rowIndex, seatIndex, canvas, ctx, zeroPoint}) {
    this.id = id++
    this.select = false
    this.rowIndex = rowIndex
    this.seatIndex = seatIndex
    this.area = area

    this.ctx = ctx
    this.zeroPoint = zeroPoint
    this.lastSelected = false
  }

  // 座位选中
  selected () {
    this.select = true
    this.lastSelected = true
  }

  // 绘制座位
  render () {
    const ctx = this.ctx
    const { x, y } = this.zeroPoint
    const { rowIndex, seatIndex } = this 
    ctx.beginPath()

    let seatNum = 50 + 2 * (rowIndex - 1)
    const config = RENDER_CONFIG[this.area]
    const startAngle = angle(config.angle) + angle(45) / seatNum * (seatIndex - 1)
    const endAngle = angle(config.angle) + angle(45) / seatNum * (seatIndex)
    ctx.arc(x * DPR, y * DPR, (210 + 15 * (rowIndex - 1)) * DPR, startAngle, endAngle)
    ctx.arc(x * DPR, y * DPR, (210 + 15 * (rowIndex) - 2) * DPR, endAngle, startAngle, true)
    ctx.fillStyle = config.color
    ctx.strokeStyle = '#AAAAAA'

    if (this.lastSelected) {
      ctx.fillStyle = '#333333'
    }

    if (this.select) {
      ctx.fill()
    }
    ctx.closePath()
    ctx.stroke()

    this.lastSelected = false
  }
}