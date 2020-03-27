export default {
  data () {
    return {}
  },
  // 浏览器刷新会提示
  methods: {
    tip () {
      window.addEventListener('beforeunload', function (e) {
        console.log('I want to cancel')
        // Cancel the event
        e.preventDefault()
        // Chrome requires returnValue to be set
        e.returnValue = 'hello'
      })
    }
  },
  mounted () {
    // window.addEventListener('beforeunload', function (e) {
    //   console.log('I want to cancel')
    //   // Cancel the event
    //   e.preventDefault()
    //   // Chrome requires returnValue to be set
    //   e.returnValue = 'hello'
    // })
  }
}