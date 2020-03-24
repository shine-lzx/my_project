<template>
  <div class="tabContainer">
    <ul class="tabUl">
      <li
        v-for="item in tabList"
        :key="item.id"
        :class="`${active === item.id ? 'active' : 'nonactivated'}`"
        @click="tabEvent(item.id)"
      >{{item.title}}</li>
    </ul>
    <slot name="title"></slot>
    <slot name="contents"></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      active: 0,
      tabList: [
        { title: '能耗统计', id: 0 },
        { title: '设备统计', id: 1 },
        { title: '维修统计', id: 2 }]
    }
  },
  methods: {
    tabEvent (id) {
      this.$emit('handelTabClick', id)
      this.active = id
    }
  }
}
</script>

<style lang="scss" scoped>
.tabContainer {
  width: 400px;
  height: 600px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .tabUl {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      cursor: pointer;
      list-style: none;
      margin-right: 20px;
    }
  }
  .nonactivated {
    &::before {
      content: '';
      position: absolute;
      top: 25px;
      width: 66px;
      border-bottom: 3px solid transparent;
    }
  }

  .active {
    &::before {
      transition: 0.1s border linear;
      content: '';
      position: absolute;
      top: 25px;
      width: 66px;
      border-bottom: 3px solid red;
    }
  }
}
</style>