<template>
  <div class="container">
    <div>
      <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="contents"></el-input>
    </div>
    <div class="mapBox">
      <div id="container" class="mapContainer"></div>
      <div class="mapInfo">
        <div>{{mapData}}</div>
        <!-- <div>{{mapData.nearestJunction}}</div>
        <div>{{mapData.nearestPOI}}</div>
        <div>{{mapData.nearestRoad}}</div>
        <div>{{mapData.regeocode}}</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showMap',
  mounted () {
    this.initMap()
  },
  data () {
    return {
      input: '',
      map: null,
      mapData: null
    }
  },
  methods: {
    initMap () {
      this.renderMap()
      this.loadPositionPicker()
      // this.setMapByBrowser()
      // this.setMark()
    },
    renderMap () {
      /* eslint-disable no-undef */
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 16,
        scrollWheel: false
      })
    },
    contents () {
      console.log('mapData:', this.mapData)
    },
    loadPositionPicker () {
      // 拖拽选址
      let map = this.map
      let that = this
      AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
        that.positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: map
        })
        let positionPicker = that.positionPicker
        positionPicker.on('success', function (positionResult) {
          that.mapData = positionResult
          console.log('positionResult：', that.mapData)
        })
        positionPicker.on('fail', function (positionResult) {
          console.log('海上或海外无法获得地址信息')
        })
        // 开始选点
        positionPicker.start()
      })
    },
    setMapByBrowser () {
      let that = this
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 16,
        scrollWheel: false
      })
      let map = this.map
      // 获取定位
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: 'RB',
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true
        })
        map.addControl(geolocation)
        geolocation.getCurrentPosition(function (status, result) {
          if (status === 'complete') {
            that.onComplete(result)
          } else {
            that.onError(result)
          }
        })
      })
    },
    onComplete (data) {
      console.log('定位成功')
      var str = []
      str.push('定位结果：' + data.position)
      str.push('定位类别：' + data.location_type)
      if (data.accuracy) {
        str.push('精度：' + data.accuracy + ' 米')
      }
      str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'))
      console.log(str)
      // 周边地址推荐
      let cpoint = data.position
      this.loadPlaceSearch(cpoint)
    },
    loadPlaceSearch (cpoint) {
      let map = this.map
      let city = this.cityName
      let that = this
      AMap.service(['AMap.PlaceSearch'], function () {
        that.placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          pageIndex: 1,
          city: city,
          citylimit: true,
          map: map,
          showCover: false,
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        })
        console.log('cpoint', cpoint)
        that.placeSearch.searchNearBy('', cpoint, 200, function (
          status,
          result
        ) {
          console.log(result)
        })
      })
    }
    // setMark () {
    //   let map = this.map
    //   this.marker = new AMap.Marker({
    //     // 绘制小车marker和路径
    //     map: map,
    //     position: [118.815693, 32.065587],
    //     icon: 'https://webapi.amap.com/images/car.png',
    //     offset: new AMap.Pixel(-26, -13),
    //     autoRotation: true,
    //     angle: -90
    //   })
    //   var passedPolyline = new AMap.Polyline({
    //     map: map,
    //     path: carLine2,
    //     strokeColor: '#AF5',
    //     strokeOpacity: 1,
    //     strokeWeight: 6,
    //     strokeStyle: 'solid'
    //   })
    //   this.marker.on('moving', function (e) {
    //     passedPolyline.setPath(e.passedPath)
    //   })
    //   map.setFitView()
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  .mapBox {
    display: flex;
    .mapContainer {
      flex: 1;
      height: 500px;
    }
    .mapInfo {
      border: 1px solid red;
      flex: 1;
      height: 500px;
      overflow: scroll;
    }
  }
}
</style>