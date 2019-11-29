<template>
  <div>
    <el-button @click="show">clickMixins</el-button>
    <test :msgValue="msgValue" v-if="isShow"/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import test from '../../mixins/tset'
const { mapActions, mapState } = createNamespacedHelpers('Test')
export default {
  name: 'dashboard',
  components: {
    test
  },
  data () {
    return {
      msgValue: ''
    }
  },
  methods: {
    ...mapActions(['handleChange']),
    show () {
      this.handleChange()
      this.msgValue = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam, odit ducimus similique perferendis consectetur delectus quis eveniet culpa neque quam! Voluptate quis laudantium, ad repellat fugiat sequi asperiores debitis!'
    }
  },
  computed: {
    ...mapState({
      isShow: state => state.isShow
    })
  }
}
</script>

<style lang="scss" scoped></style>
