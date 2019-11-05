<template>
  <div>
    <div class="show_style">{{numb}}</div>
    <el-button @click="add">增加</el-button>
    <el-button @click="sub">减少</el-button>
    <el-button @click="joint">拼接</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('Test')
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['handleAdd', 'handleSub']),
    ...mapGetters(['strNumb']),
    add () {
      this.handleAdd(5)
    },
    sub () {
      this.handleSub(3)
    },
    joint () {
      this.strNumb()
    }
  },
  computed: {
    ...mapState({
      numb: state => state.numb
    })
  }
}
</script>

<style lang="scss" scoped>
.show_style {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>
