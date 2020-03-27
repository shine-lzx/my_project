<template>
  <div class="_container">
    <titleC ref="comA" />
  </div>
</template>

<script>
import titleC from './components/componentOne'
export default {
  components: {
    titleC
  },
  data () {
    return {}
  },
  created () {
    this.myProxy()
  },
  mounted () {
    const comA = this.$refs.comA
    console.log(comA.title) // Vue.js
    comA._alert() // 弹窗
  },
  methods: {
    myProxy () {
      let target = {
        x: 10,
        y: 20
      }

      let hanler = {
        get: (obj, prop) => 42
      }

      target = new Proxy(target, hanler)
      console.log(target.x)
    }
  }
}
</script>

<style lang="scss" scoped>
._container {
  position: relative;
  width: 800px;
  height: 600px;
  border: 1px solid red;
  .content {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #000;
  }
}
</style>
