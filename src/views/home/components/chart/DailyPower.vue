<template>
  <div class="power-chart">
    <el-radio-group class="btn-group" size="small" v-model="value"  @change="powerIn()" >
      <el-radio-button label="30" ></el-radio-button>
      <el-radio-button label="180"></el-radio-button>
    </el-radio-group>
    <div class="chart-con" ref="power"></div>
  </div>
</template>

<script>
import { getPowerIn } from "@/api/home";

export default {
  name: "DailyPower",
  data() {
    return {
      myChart: null,
      powerArr: [],
      timeArr: [],
      value: 30,
      title: ""
    };
  },
  computed:{
    theme(){
      return this.$store.state.theme //用computed接收
    }
  },
  methods: {
    formatTime(arr) {
      this.timeArr = []
      arr.forEach(item => {
        let str = item
        this.timeArr.push(str.substring(0, 10));
      })
      return arr
    },
    formatPower(powers, unit) {
      powers.forEach(item => {
        let str = item + ' ' + unit
        this.powerArr.push(str);
      })
    },
    async getPowerIn(val) {
      try {
        console.log(val)
        let res = await getPowerIn({
          PowerIndex:val
        });
        this.formatTime(res.datetime);
        this.formatPower(res.powers, res.unit)
        this.drawPowerChart()
      } catch (e) {
        console.log(e);
      }
    },
    powerIn() {
      console.log(11,this.value)
      this.getPowerIn(this.value)
    },
    drawPowerChart() {
      var option;
      option = {
        title: {
          text: '全网算力增长',
          textStyle: {
            color: this.theme === 'dark' ? "#fff" : '#0B4977',
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.timeArr,
          axisLabel: {
            textStyle: {
              color: this.theme === 'dark' ? "#fff" : '#0B4977'   //这里用参数代替了
            }
          },
          axisLine:{
            textStyle: {
              color: this.theme === 'dark' ? "#fff" : '#0B4977'   //这里用参数代替了
            }
          },
        },
        yAxis: {
          // show:false,
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false,//不显示坐标轴线
          },
          axisLabel: {
            textStyle: {
              color: this.theme === 'dark' ? "#fff" : '#0B4977'   //这里用参数代替了
            }
          }
        },
        series: [
          {
            type: 'line',
            data: this.powerArr
          },
        ]
      }
      option && this.myChart.setOption(option);
    }
  },
  mounted() {
    this.getPowerIn(this.value)
    this.myChart = this.$chart.init(this.$refs.power);

  },
  watch: {
    theme() {
      this.drawPowerChart()
    }
  }
}
</script>
<style lang="scss">
.el-radio-button .el-radio-button__inner {
  width: 60px!important;
}
@media screen and (max-width: 768px) {
  .el-radio-button .el-radio-button__inner {
    width: 30px!important;
  }
}
</style>
<style lang="scss" scoped>
.power-chart {
  position: relative;
  padding: 5px;
  height: 350px;
  flex-basis: 48%;
  border: 1px solid var(--total-board-top-color);
  border-radius: 10px;
  .chart-con {
    height: 100%;
  }
  .btn-group {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 99;
  }
}

@media screen and (max-width: 768px) {
  .power-chart {
    margin-bottom: 10px;
    height: 200px;
  }
}
</style>
