<template>
  <div>
    <div>Mock</div>
    <myForm @input="input" />
    <el-button @click="myClick">myClick</el-button>
    <el-button @click="cancelClick">cancelClick</el-button>
  </div>
</template>

<script>
// import './components/componentRegister.js'
import axios from 'axios'
import _console from '../../mixins/_console'
import myForm from './components/_form/index'
export default {
  name: 'simulationServer',
  mixins: [_console],
  components: {
    myForm
  },
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
    },
    input (val) {
      console.log('子组件', val)
    }
  }
}
</script>