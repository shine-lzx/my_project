<template>
  <div class="mainContainer">
    <div id="container" class="mapContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'threeMapShow',
  mounted () {
    this.initMap()
  },
  created () { },
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.renderMap()
    },
    renderMap () {
      /* eslint-disable no-undef */
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: 17,
        pitch: 80,
        rotation: -15,
        viewMode: '3D', // 开启3D视图,默认为关闭
        buildingAnimation: true, // 楼块出现是否带动画

        expandZoomRange: true,
        zooms: [3, 20],
        center: [116.333926, 39.997245]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 50px);
  .mapContainer {
    width: 100%;
    height: 100%;
  }
}
</style>