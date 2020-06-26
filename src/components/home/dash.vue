<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>可视化</el-breadcrumb-item>
      <el-breadcrumb-item>Dash</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
export default {
  name: 'dash',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'test' },
        tooltip: {},
        xAxis: {
          data: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style scoped>
</style>
