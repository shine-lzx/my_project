<template>
  <div>
    勇敢，不是通过让别人为他担心来证明的，尤其是那些关心他的人；强者，是能够让他的朋友亲人感到安全和放心，这些，你能够明白吗？
    的确不容易懂，这个道理你可能要用很长的时间才能明白，我希望你能够答应我，把这两句话记在心里，可以吗？
  </div>
</template>

<script>
import { createPerson } from './index'
export default {
  created () {
    var person = createPerson('bangbang', 18, '脚踏实地才能壮志凌云！')
    console.log(person)
  },
  data () {
    return {}
  },
  methods: {}
}
</script>