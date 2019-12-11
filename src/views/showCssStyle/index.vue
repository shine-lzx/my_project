<template>
  <div>
    <div class="container">
      <div class="box">style0</div>
      <div class="box">style1</div>
      <div class="box">style2</div>
      <div class="box">style3</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// row: 默认值，水平从左到右
// colunm:垂直从上到下
// row-reverse:水平从右到左
// column-reverse：垂直从下到上
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .box {
    margin-bottom: 10px;
    flex: 1;
    border: 1px solid #333;
  }
}
.image {
  background: #34495e;
  border: 1px solid #34495e;
  width: 200px;
  height: 200px;
}
.image-contain {
  object-fit: contain;
  object-position: center;
}
.image-cover {
  object-fit: cover;
  object-position: right top;
}
</style>