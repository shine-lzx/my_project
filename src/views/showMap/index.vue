<template>
  <div class="container">
    <div>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @keyup.enter.native="contents"
      ></el-input>
    </div>
    <div
      id="container"
      class="mapContainer"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'showMap',
  mounted () {
    this.renderMap()
  },
  data () {
    return {
      input: '',
      map: null
    }
  },
  methods: {
    renderMap () {
      /* eslint-disable no-undef */
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 16,
        scrollWheel: false
      })
    },
    contents () {
      console.log('input:', this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  .mapContainer {
    width: 800px;
    height: 500px;
  }
}
</style>