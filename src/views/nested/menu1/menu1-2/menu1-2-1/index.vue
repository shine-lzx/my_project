<template functional>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-2-1" type="warning" />
    <div>{{time}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: null
    }
  },
  created () {
    this.getRandomArbitrary(2000, 5000)
  },
  methods: {
    // 随机数（秒数）
    getRandomArbitrary (min, max) {
      this.time = Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
