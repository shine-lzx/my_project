<template>
  <div>
    <div class="show_style">
      <div>{{numb}}</div>
      <div>{{str}}</div>
    </div>
    <div class="btn_style">
      <el-button @click="add">增加</el-button>
      <el-button @click="sub">减少</el-button>
      <el-button @click="joint" :disabled="flag">拼接</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('Test')
export default {
  name: 'Layout',
  watch: {
    numb: {
      handler (val, oldVal) {
        if (oldVal !== undefined && oldVal !== val) {
          this.flag = false
        }
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      flag: true
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
      numb: state => state.numb,
      str: state => state.str
    })
  }
}
</script>

<style lang="scss" scoped>
.show_style {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  width: 100%;
  height: 100px;
  div:nth-of-type(1) {
    line-height: 100px;
    width: 200px;
    height: 100px;
    color: red;
  }
  div:nth-of-type(2) {
    line-height: 100px;
    width: 200px;
    height: 100px;
    color: blue;
  }
}
.btn_style {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
