<template id="layout">
  <div>
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'index',
  components: {
    Sidebar
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
