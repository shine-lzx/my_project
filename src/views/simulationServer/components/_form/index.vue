<template>
  <div>
    <!-- <el-input v-dfocus v-model="input" placeholder="请输入内容"></el-input> -->
    <!-- <input :value="value" v-bind="$attrs" @input="$emit('input', $event.target.value)" /> -->
    <input :value="value" v-bind="$attrs" v-on="listeners" />
  </div>
</template>

<script>
export default {
  name: 'myForm',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          // console.log(event.target.value)
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>