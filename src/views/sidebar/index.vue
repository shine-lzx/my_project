<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <Logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :unique-opened="false"
        mode="vertical"
      >
        <sidebarItem
          v-for="item in sidebarRouter"
          :key="item.path"
          :sidebarRouteItem="item"
          :basePath="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import sidebarItem from './components/sidebarItem'
import Logo from './components/Logo'
import variables from '@/styles/variables.scss'
export default {
  components: {
    sidebarItem,
    Logo
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    sidebarRouter () {
      return this.$router.options.routes
    }
  },
  data () {
    return {
      showLogo: true,
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('key, keyPath', key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('key, keyPath', key, keyPath)
    },
    variables () {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
