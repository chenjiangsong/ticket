<template>
  <div id="app">
    <header class="header">
      <div class="purchase-board">

        <el-card shadow="never">
        <el-form :inline="true" >
          <el-form-item label="请输入购票数量">
            <el-input-number v-model="num" :min="1" :max="5" label="请输入购票数量" size="mini"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button @click="buy" size="mini">购票</el-button>
            <el-button @click="autoBuy" size="mini">自动随机购票</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      </div>
    </header>
      
    <el-card body-style="overflow: scroll">
      <canvas id="hall" width="2000" height="1000"></canvas>
    </el-card>
  </div>
</template>

<script>

import Seat from './core/seat'
import SeatRow from './core/row'
import TicketManager from './core/ticketManager'
import { getRandom } from './core/util'
import { clearInterval } from 'timers';
import { AREA, SEAT_NUMBER_EVERY_ROW } from './core/constants'

export default {
  data () {
    return {
      num: 5,
      rowsAll: [],
      ticketManager: null
    }
  },
  mounted () {

    let canvas = document.getElementById('hall')
    let ctx = canvas.getContext('2d')

    // 设定座位图圆心
    let zeroPoint = {}
    zeroPoint.x = 600
    zeroPoint.y = 600

    // 初始化 购票管理器
    this.ticketManager = new TicketManager({ ctx })

    // 按区域初始化座位
    AREA.forEach(area => {
      SEAT_NUMBER_EVERY_ROW.forEach((seatNum,index) => {
        const rowIndex = index + 1
        let row = new SeatRow({ area, rowIndex })
        let count = 0
        for (let i = 1; i <= seatNum; i++) {
          let seat = new Seat({ area, rowIndex, seatIndex: i, ctx, zeroPoint })
          row.addSeat(seat)
        }
        this.ticketManager.addRow(row)
      })
    })
    
  },
  methods: {
    buy () {
      this.ticketManager.buyTickets(this.num)
    },
    autoBuy () {
      let interval = setInterval(() => {
        const ret = this.ticketManager.buyTickets(getRandom(5))
        if (!ret) {
          clearInterval(interval)
        }
      }, 200)
    }
  }
}
</script>
<style lang="less">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.seats{
  border: 1px solid #333;
}
.hall-wrap{
  width: 100%;
  // padding: 20px;
}
.box{
  width: 5px;
  height: 5px;
  background: #000;
}
.header{
  display: flex;
}
.msg-board{
  flex: 1;
}
.purchase-board{
  flex: 1;
}
</style>
