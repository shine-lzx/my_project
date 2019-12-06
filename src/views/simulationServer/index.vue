<template>
  <div>Mock</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'simulationServer',
  created () {
    axios.post('/datas').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.fun0()
  },
  data () {
    return {
      str: ''
    }
  },
  methods: {
    async fun0 () {
      await Promise.all([this.fun1(), this.fun2()])
    },
    fun1 () {
      this.str = '第一个函数'
    },
    fun2 () {
      console.log(this.str)
    }
  }
}
</script>