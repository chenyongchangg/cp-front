<template>
      <div id="earth" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
export default {
  name: 'earth',
  mounted () {
    this.createEarth()
  },
  data () {
    return {

      worldimg: require('./world.jpg'),
      starfield: require('./starfield.jpg')

    }
  },
  methods: {
    createEarth () {
      let myChart = this.$echarts.init(document.getElementById('earth'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#000',
        globe: {
          baseTexture: this.worldimg,
          heightTexture: this.worldimg,

          displacementScale: 0.1,

          shading: 'lambert',

          environment: this.starfield,

          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture: this.worldimg
          }, {
            type: 'overlay',
            texture: this.worldimg,
            shading: 'lambert',
            distance: 5
          }]
        },
        series: []
      })
    }
  }
}
</script>

<style scoped>

</style>
