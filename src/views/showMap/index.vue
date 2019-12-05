<template>
  <div class="container">
    <div>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @keyup.enter.native="contents"
      ></el-input>
    </div>
    <div class="mapBox">
      <div
        id="container"
        class="mapContainer"
      ></div>
      <div class="mapInfo">
        <div>{{mapData}}</div>
        <!-- <div>{{mapData.nearestJunction}}</div>
        <div>{{mapData.nearestPOI}}</div>
        <div>{{mapData.nearestRoad}}</div>
        <div>{{mapData.regeocode}}</div> -->
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
    }
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