<template>
  <div class="gas-chart">
    <el-select class="cur-select" @change="selectTime" size="small" v-model="value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <div class="chart-con" ref="gas"></div>
  </div>
</template>

<script>
import { getFee } from "@/api/home";

export default {
  name: "DailyPower",
  data() {
    return {
      myChart: null,
      baseFee: [],
      gasFee32: [],
      gasFee64: [],
      timeArr: [],
      baseUnit: '',
      gasFee32Unit: '',
      gasFee64Unit: '',
      showColor: '',
      value: 24,
      options: [
        {label: '24 Hour', value: 24 },
        {label: '7 Day', value: 7 },
        {label: '30 Day', value: 30 },
        {label: '180 Day', value: 180 },
      ]
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
        this.timeArr.push(str.substring(11, 16));
      })
      return arr
    },
    async getFee(val) {
      try {
        let res = await getFee(val);
        this.formatTime(res.timeList);
        this.baseFee = res.baseFee.feeList;
        this.gasFee32 = res.gasFee32.feeList;
        this.gasFee64 = res.gasFee64.feeList;
        this.baseUnit = res.baseFee.unit;
        this.gasFee32Unit = res.gasFee32.unit;
        this.gasFee64Unit = res.gasFee64.unit;
        this.drawGasChart()
      } catch (e) {
        console.log(e);
      }
    },
    selectTime() {
      this.getFee(this.value)
    },
    drawGasChart() {
      var option;
      option = {
        title: {
          text: 'Gas费用',
          textStyle: {
           color: this.theme === 'dark' ? "#fff" : '#0B4977',
          },
        },
        tooltip: {
          trigger: 'axis',
          formatter: (param) => {
            let one = {};
            let two = {};
            let three = {};
            param.forEach((item, index) => {
              switch (index) {
                case 0:
                  one.name = item.name
                  one.format = this.baseUnit;
                  one.value = item.value
                  one.seriesName = item.seriesName
                  break;
                case 1:
                  two.format = this.gasFee32Unit;
                  two.value = item.value
                  two.seriesName = item.seriesName
                  break;
                case 2:
                  three.format = this.gasFee64Unit;
                  three.value = item.value
                  three.seriesName = item.seriesName
                  break;
              }
            });
            return one.name +'<br />' + one.seriesName+': '+one.value+' '+one.format+'<br />'+two.seriesName+': '+two.value+' ' +two.format+'<br />'+three.seriesName+': '+three.value+' '+three.format
          }
        },
        legend: {
          left: '20%',
          data: ['Base Fee', 'Gas Used of 32G Sectors', 'Gas Used of 64G Sectors'],
          textStyle:{//图例文字的样式
            color: this.theme === 'dark' ? "#fff" : '#0B4977',
          }
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
            formatter: `{value} ${this.baseUnit}`,
            textStyle: {
              color: this.theme === 'dark' ? "#fff" : '#0B4977'   //这里用参数代替了
            }
          },
        },
        series: [
          {
            name: 'Base Fee',
            type: 'line',
            data: this.baseFee
          },
          {
            name: 'Gas Used of 32G Sectors',
            type: 'line',
            data: this.gasFee32
          },
          {
            name: 'Gas Used of 64G Sectors',
            type: 'line',
            data: this.gasFee64
          }
        ]
      }
      option && this.myChart.setOption(option);
    }
  },
  mounted() {
    this.getFee(this.value)
    this.myChart = this.$chart.init(this.$refs.gas);
  },
  watch: {
    theme() {
      this.drawGasChart()
    }
  }
}
</script>

<style lang="scss" scoped>
.gas-chart{
  position: relative;
  padding: 5px;
  height: 350px;
  flex-basis: 48%;
  border: 1px solid var(--total-board-top-color);
  border-radius: 10px;
  .chart-con {
    height: 100%;
  }
  .cur-select {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 130px;
    z-index: 99;
  }
}
@media screen and (max-width: 768px) {
  .gas-chart {
    height: 200px;
  }
}
</style>
