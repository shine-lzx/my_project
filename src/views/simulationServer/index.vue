<template>
  <div>
    <div>Mock</div>
    <el-button @click="myClick">myClick</el-button>
    <el-button @click="cancelClick">cancelClick</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import _console from '../../mixins/_console'
export default {
  name: 'simulationServer',
  mixins: [_console],
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
    },
    myClick () {
      this.setParms('你好')
    },
    cancelClick () {
      this.cancel()
    }
  }
}
</script>