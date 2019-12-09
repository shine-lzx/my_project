<template>
  <div>
    <!-- <el-input v-dfocus v-model="input" placeholder="请输入内容"></el-input> -->
    <!-- <input :value="value" v-bind="$attrs" @input="$emit('input', $event.target.value)" /> -->
    <input :value="value" v-bind="$attrs" v-on="listeners" />
    <input type="password" :value="passWord" v-bind="$attrs" v-on="passWordFun" />
  </div>
</template>

<script>
export default {
  name: 'myForm',
  data () {
    return {
      passWord: '',
      value: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          console.log('用户名：', this.$listeners)
          this.$emit('input', event.target.value)
        }
      }
    },
    passWordFun () {
      return {
        ...this.$listeners,
        input: event => {
          console.log('密码：', event.target.value)
        }
      }
    }
  }
}
</script>