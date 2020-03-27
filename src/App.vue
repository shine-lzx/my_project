<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import alertDialog from '@/mixins'
export default {
  data () {
    return {}
  },
  mounted () {
    // this.tip()
  },
  mixins: [alertDialog]
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>
