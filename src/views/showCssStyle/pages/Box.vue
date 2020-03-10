<template>
  <div class="container">
    <input id="font" type="radio" name="select" checked />
    <label for="font" class="text">正面</label>

    <input id="left" type="radio" name="select" checked />
    <label for="left" class="text">左边</label>

    <input id="right" type="radio" name="select" checked />
    <label for="right" class="text">右边</label>

    <input id="top" type="radio" name="select" checked />
    <label for="top" class="text">顶部</label>

    <input id="bottom" type="radio" name="select" checked />
    <label for="bottom" class="text">底部</label>

    <input id="back" type="radio" name="select" checked />
    <label for="back" class="text">背面</label>

    <div class="btn"></div>
    <div class="all">
      <div class="box">
        <div class="box_font face"></div>
        <div class="box_top face"></div>
        <div class="box_bottom face"></div>
        <div class="box_left face"></div>
        <div class="box_right face"></div>
        <div class="box_back face"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  color: #333;
  font-family: Georgia, 'Times New Roman', Times serif;
  text-align: center;
}
input {
  display: none;
}
label {
  margin-top: 150px;
  margin-left: 50px;
  display: inline-block;
  width: 80px;
  height: 30px;
  border: 1px solid rgb(248, 15, 15);
  color: white;
  border-radius: 10px;
  line-height: 30px;
}
.btn {
  margin: 100px auto;
}
.all {
  perspective: 1000px;
  width: 250px;
  height: 250px;
  text-align: center;
  display: inline-block;
}
.box {
  display: inline-block;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 1s;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(20deg);
}
.face {
  overflow: hidden;
  position: absolute;
  // border: 1px solid #666;
  background: #fff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.4);
  color: #333;
  line-height: 250px;
  opacity: 0.8;
}
.box_font {
  width: 500px;
  height: 500px;
  transform: translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-6.png);
  background-size: 100% 100%;
}
.box_top {
  width: 500px;
  height: 500px;
  transform: rotateX(90deg) translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-5.png);
  background-size: 100% 100%;
}
.box_bottom {
  width: 500px;
  height: 500px;
  transform: rotateX(-90deg) translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-1.png);
  background-size: 100% 100%;
}
.box_left {
  width: 500px;
  height: 500px;
  transform: rotateY(-90deg) translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-2.png);
  background-size: 100% 100%;
}
.box_right {
  width: 500px;
  height: 500px;
  transform: rotateY(90deg) translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-3.png);
  background-size: 100% 100%;
}
.box_back {
  width: 500px;
  height: 500px;
  transform: rotateY(180deg) translate3d(0, 0, 250px);
  background: url(http://www.jq22.com/img/cs/500x500-4.png);
  background-size: 100% 100%;
}
#bottom:checked ~ .all .box {
  transform: rotateX(90deg);
}
#top:checked ~ .all .box {
  transform: rotateX(-90deg);
}
#left:checked ~ .all .box {
  transform: rotateY(90deg);
}
#right:checked ~ .all .box {
  transform: rotateY(-90deg);
}
#back:checked ~ .all .box {
  transform: rotateY(180deg);
}
#bottom,
#top,
#left,
#right,
#back:hover {
  background: #ccc;
}
</style>