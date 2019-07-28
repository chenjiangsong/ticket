import { getRandom } from './util'

let id = 0

export default class SeatRow {
  constructor ({ rowIndex, area}) {
    this.id = id++
    this.seats = []
    this.selectIndex = 0
    this.freeSeatsNum = 0 // 当前组剩余空座数量
    this.seatMap = []
    this.weight = 0
    this.normalSeat = []
    this.area = area
  

    this.rowIndex = rowIndex
    this.seatIndex = 1

    this.goldSeat = []
    this.normalSeat = []
  }

  // 添加座位并初始绘制
  addSeat (seat) {
    this.seats.push(seat)
    this.freeSeatsNum++
    seat.render()
    this.updateSeatMap()
  }

  getFreeNum () {
    return this.freeSeatsNum
  }

  // 获取可被预定的座位数量
  getAvailableSeatsCount (num) {

    if (this.freeSeatsNum < num)  {
      return {
        goldSeat: this.goldSeat,
        normalSeat: this.normalSeat
      }
    }

    // 将本排的座位按字符串形式展示： 101010101111
    let seatMapStr = this.seatMap.join('')

    // 待查询空座以 00000 形式展示
    let findStr = ''
    for (let i = 0; i < num; i++) {
      findStr += '0'
    }

    for (let i = 0; i < this.seats.length; i++) {
      if (seatMapStr.substr(i, num) === findStr) {
        this.normalSeat.push(i+1)
        // 判断是否是黄金座位
        if (
             (seatMapStr.substr(i-1, num) !== findStr && seatMapStr.substr(i+1, num) !== findStr)
          || (i === 0 && seatMapStr.substr(i+1, num) !== findStr)
          || (i === this.seats.length - 1 && seatMapStr.substr(i-1, num) !== findStr)
          ) {
          this.goldSeat.push(i+1)
        }
      }
    }

    return {
      goldSeat: this.goldSeat,
      normalSeat: this.normalSeat
    }
  }

  // 锁定固定数量的座位
  lockSeat (num) {

    // 判断是否有黄金座位，优先分配
    let pendingSeat = this.goldSeat.length ? this.goldSeat : this.normalSeat

    // 在符合条件的座位里 随机抽取连号座位的第一个座
    let random = getRandom(pendingSeat.length)
    let startIndex = pendingSeat[random - 1]

    let selected = []
    for (let i = 0; i < num; i++) {
      let keyIndex = startIndex++
      let keySeat = this.seats.find(seat => seat.seatIndex === keyIndex)
      if (keySeat) {
        keySeat.selected()
        this.freeSeatsNum--
        selected.push(keySeat)
      } else {
        console.error('没找到的keyIndex', keyIndex)
      }
    }
  }
  
  // 更新seatMap，还原goldSeat和normalSeat数组
  updateSeatMap () {
    this.seatMap = this.seats.map(seat => seat.select ? 1 : 0)
    this.goldSeat = []
    this.normalSeat = []
  }

}