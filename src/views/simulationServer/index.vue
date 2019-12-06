<template>
  <div>Mock</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'simulationServer',
  created () {
    axios.post('/datas').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  data () {
    return {}
  },
  methods: {}
}
</script>