<template>
  <!-- 对logoin与/与404进行筛选 -->
  <div v-if="!sidebarRouteItem.hidden">
    <el-submenu :index="resolvePath(sidebarRouteItem.path)">
      <template slot="title">
        <item
          v-if="sidebarRouteItem.meta"
          :title="sidebarRouteItem.meta.title"
          :icon="sidebarRouteItem.meta && sidebarRouteItem.meta.icon"
        />
      </template>
      <div>
        {{sidebarRouteItem.children}}
        <!-- <sidebar-item
          v-for="child in sidebarRouteItem.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />-->
      </div>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './Item'
import { isExternal } from '@/utils/validate'
export default {
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    sidebarRouteItem: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
  /* [ { "path": "index", "name": "Myform", "meta": { "title": "Myform", "icon": "form" } } ] */
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>