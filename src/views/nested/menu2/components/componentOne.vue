<template>
  <div>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    _alert () {
      alert('弹窗')
    }
  }
}
</script>