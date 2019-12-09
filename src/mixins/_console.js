export default {
  data () {
    return {
      propsParms: '暂无数据'
    }
  },
  methods: {
    setParms (val) {
      this.propsParms = val
      console.log(this.propsParms)
    },
    cancel () {
      this.propsParms = '暂无数据'
      console.log(this.propsParms)
    }
  }
}