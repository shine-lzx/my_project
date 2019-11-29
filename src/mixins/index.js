import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('Test')
export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(['handleChange']),
    submitValue (msg) {
      alert(msg)
    },
    cancel () {
      this.handleChange()
    }
  }
}
