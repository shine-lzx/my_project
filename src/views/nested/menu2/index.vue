<template>
  <div class="_container">
    <div class="content" @mousedown.stop.prevent="(e) => elementDown(e)"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    this.myProxy()
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
    },
    elementDown (e) {
      // let x = e.pageX - e.target.offsetWidth / 2
      // let y = e.pageY - e.target.offsetHeight / 2
      // e.target.style.left = `${x}px`
      // e.target.style.top = `${y}px`
      this.move(e)
    },

    move (e) {
      e.target.addEventListener('mousemove', (e) => {
        let x = e.pageX - e.target.offsetWidth / 2
        let y = e.pageY - e.target.offsetHeight / 2
        e.target.style.left = `${x}` < 500 ? `${x}px` : null
        e.target.style.top = `${y}` < 500 ? `${y}px` : null
      })
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
