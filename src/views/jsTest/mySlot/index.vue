<template>
  <div>
    <div class="Box">
      <div>
        <slot name="title"></slot>
      </div>
      <hr />
      <div>
        <!-- <slot name="content"></slot> -->
        <!-- <div v-for="(item, i) in List" :key="i">{{ item }}</div> -->
        <div v-for="(item, i) in List" :key="i">
          <slot name="item" :row="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://juejin.im/post/5da72b3fe51d4524cf450f8e
export default {
  name: 'mySlot',
  props: {
    List: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.Box {
  width: 400px;
  padding: 30px;
  margin: 0 auto;
}
</style>