<template>
  <div class="app-main">
    <div class="shine-container">
      <div class="item1">
        <input type="text" v-model="searchKey" placeholder="请输入搜索内容" />
      </div>
      <div class="item2">{{ _style}}</div>
      <div class="item3">Huawei</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKey: ''
    }
  },
  computed: {
    _style: {
      get: function shine () {
        return this.searchKey
      },
      set: function setShine (params) {
        console.log(params)
        return params
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
$red: #f00;
$border: 1px solid #333;
.app-main {
  display: flex;
  justify-content: center;
}
.shine-container {
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  border: $border;
  border-radius: 5px;
  .item1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: hsl(255, 255, 1);
    // flex-grow: 1;
    // width: 100px;
    // flex-shrink: 1;
    flex-basis: 40px;
    input {
      outline: none;
      border: none;
      height: 30px;
      width: 250px;
      padding-left: 10px;
      border-radius: 10px;
    }
    input::-webkit-input-placeholder {
      // 设置placeholder颜色
      color: #f5a6a6;
      font-family: Lato, sans-serif;
    }
  }
  .item2 {
    flex-grow: 2;
    background: url('https://unsplash.it/300/300/?random');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
    font-size: 25px;
    // width: 300px;
    // flex-shrink: 1;
    // flex-basis: 300px;
  }
  .item3 {
    // flex-grow: 1;
    // width: 100px;
    // flex-shrink: 1;
    color: white;
    display: flex;
    flex-basis: 50px;
    justify-content: center;
    align-items: center;
    background: #333;
  }
}
</style>