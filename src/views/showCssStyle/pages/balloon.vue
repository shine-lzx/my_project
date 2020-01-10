<template>
  <div class="envato-animate">
    <span class="envato-balloon">666</span>
    <span class="envato-balloon">666</span>
    <span class="envato-balloon">666</span>
    <span class="envato-balloon">666</span>
    <span class="envato-balloon">666</span>
    <span class="envato-balloon">666</span>
  </div>
</template>

<style lang="scss" scoped>
.envato-animate {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 396px;
  height: 200px;
  text-align: center;
  margin-left: -198px;
  margin-top: -100px;
}
.envato-animate .envato-balloon {
  width: 50px;
  height: 70px;
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  position: relative;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  background: #e74c3c;
  display: inline-block;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  font-family: 'Varela Round', sans-serif;
}
.envato-animate .envato-balloon:after {
  width: 0;
  height: 0;
  left: 50%;
  content: '';
  bottom: -8px;
  margin-left: -8px;
  position: absolute;
  border: 8px solid transparent;
  border-bottom: 8px solid #e74c3c;
}
</style>