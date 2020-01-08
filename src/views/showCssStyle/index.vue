<template>
  <div class="container">
    <div class="btns">
      <el-button type="primary" @click="ocean">ocean</el-button>
      <el-button type="primary" @click="btn">btn</el-button>
      <el-button type="primary" @click="dazzlingBtn">dazzlingBtn</el-button>
      <el-button type="primary" @click="statusBtn">statusBtn</el-button>
      <el-button type="primary" @click="loading">loading</el-button>
      <el-button type="primary" @click="login">login</el-button>
    </div>
    <ocean v-if="oceanFlag" />
    <btn v-if="btnFlag" />
    <dazzlingBtn v-if="dazzlingBtnFlag" />
    <statusBtn v-if="statusBtnFlag" />
    <loading v-if="loadingFlag" />
    <login v-if="loginFlag" />
  </div>
</template>

<script>
import ocean from './pages/ocean'
import btn from './pages/btn'
import dazzlingBtn from './pages/dazzlingBtn'
import statusBtn from './pages/statusBtn'
import loading from './pages/loading'
import login from './pages/login'
export default {
  components: {
    ocean,
    btn,
    dazzlingBtn,
    statusBtn,
    loading,
    login
  },
  data () {
    return {
      oceanFlag: false,
      btnFlag: false,
      dazzlingBtnFlag: false,
      statusBtnFlag: false,
      loadingFlag: false,
      loginFlag: false
    }
  },
  methods: {
    ocean () {
      this.oceanFlag = !this.oceanFlag
    },
    btn () {
      this.btnFlag = !this.btnFlag
    },
    dazzlingBtn () {
      this.dazzlingBtnFlag = !this.dazzlingBtnFlag
    },
    statusBtn () {
      this.statusBtnFlag = !this.statusBtnFlag
    },
    loading () {
      this.loadingFlag = !this.loadingFlag
    },
    login () {
      this.loginFlag = !this.loginFlag
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300');
.container {
  position: relative;
  .btns {
    position: fixed;
    right: 0;
    z-index: 999;
  }
}
</style>