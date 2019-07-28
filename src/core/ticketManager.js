import { getSum, getRandom } from './util'

export default class TicketManager {
  constructor ({ ctx}) {
    this.ctx = ctx
    this.rows = []
  }
  
  addRow (row) {
    this.rows.push(row)
  }

  repaint () {
    this.ctx.clearRect(0,0, 2000, 1000)
    this.rows.forEach(row => {
      row.updateSeatMap()
      row.seats.forEach(seat => {
        seat.render()
      })
    })
  }

  buyTickets (seatsNum) {
    if (seatsNum < 1) return false

    let free = this.getAllFreeSeatNum()
    if (free < seatsNum) {
      alert('座位不够啦')
      return false
    }
    this.distribute(seatsNum)
    return true
  }


  // 获取全场剩余空闲座位
  getAllFreeSeatNum () {
    return getSum(this.rows.map(row => row.getFreeNum()))
  }
  
  distribute (seatsNum) {
    let sum = 0
    let tmpRegion = [0, 0]
    let hasGoldSeat = false

    let rowMap = this.rows.map(row => {
      const { goldSeat, normalSeat } = row.getAvailableSeatsCount(seatsNum)

      if (goldSeat.length) {
        hasGoldSeat = true
      }

      return {
        ...row,
        goldSeat,
        normalSeat
      }

    })
    
    let weightMap = []

    rowMap.forEach(row => {
      let count = hasGoldSeat ? row.goldSeat.length : row.normalSeat.length
      if (count > 0) {
        sum += count
        let region = []
        region[0] = tmpRegion[1] + 1
        region[1] = tmpRegion[1] + count
        tmpRegion = region
        weightMap.push({
          id: row.id,
          region
        })
      }
    })

    if (sum < 1) {
      const seatsHalfA = Math.floor(seatsNum / 2) + 1
      const seatsHalfB = seatsNum - seatsHalfA

      this.buyTickets(seatsHalfA)
      this.buyTickets(seatsHalfB)
      return 
    }

    let random = getRandom(sum)

    const tmp = weightMap.find(row => {
      let { region } = row
      let [start, end] = region
      return start <= random && random <= end
    })
    const keyRow = this.rows.find(row => {
      return row.id === tmp.id
    })
    keyRow.lockSeat(seatsNum)
    this.repaint()
  }
}

