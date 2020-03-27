<template>
  <div class="_container">
    <titleC ref="comA" />
  </div>
</template>

<script>
import titleC from './components/componentOne'
import * as fnParent from './fn.js'
export default {
  components: {
    titleC
  },
  data () {
    return {}
  },
  created () {
    this.cl()
  },
  mounted () {
    const comA = this.$refs.comA
    console.log(comA.title)
    // comA._alert() // 弹窗
  },
  methods: {
    cl () {
      console.log('----------------', fnParent.default)
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
