<template>
  <div class="map" id="Map">
  </div>
</template>

<script>
export default {
  name: 'map2',
  data () {
    return {
      opts: {
        width: 250, // 信息窗口宽度
        height: 80, // 信息窗口高度
        title: '信息窗口', // 信息窗口标题
        enableMessage: true// 设置允许信息窗发送短息
      }
    }
  },
  mounted () {
    this.getEquipment()
  },
  methods: {
    async getEquipment () {
      /* eslint-disable */
        // var single = {}
        // eslint-disable-next-line
        const map = new BMap.Map('Map')
        map.enableScrollWheelZoom(true);
        // 创建地图实例
        // eslint-disable-next-line
        const point1 = new BMap.Point(120.185493, 35.950379)
        // 创建点坐标
        map.centerAndZoom(point1, 15)
        // 初始化地图，设置中心点坐标和地图级别
        const equipmentData = (await this.$http.post('equipment/selectAll')).data
        for (var i = 0; i < equipmentData.length; i++) {
          var gprs = equipmentData[i].positions
          gprs = gprs.split('|')
          var point = new BMap.Point(gprs[0], gprs[1])
          var marker = new BMap.Marker(point) // 创建标注
          var content = equipmentData[i].comment + equipmentData[i].devicetype + " id:" +  equipmentData[i].id;
          map.addOverlay(marker) // 将标注添加到地图中
          if(equipmentData[i].state == 0){
            var content2 = "设备异常";
            var label = new BMap.Label(content2, {       // 创建文本标注
              position: point,                          // 设置标注的地理位置
            })
            map.addOverlay(label);
            console.log(point)
          }
          this.addClickHandler(content, marker, map);
          // var infoWindow = new BMap.InfoWindow(equipmentData[i].comment+equipmentData[i].devicetype, opts) // 创建信息窗口对象
          // marker.addEventListener('click', function () {
          //   map.openInfoWindow(infoWindow, point) // 开启信息窗口
          // })
        }
      },
      addClickHandler (content, marker, map) {
        marker.addEventListener("click", function (e) {
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content, this.opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow, point); //开启
          }
        )
      }
    }
  }
</script>

<style scoped>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
