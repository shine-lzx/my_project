<template>
  <div class="container">
    <div class="power-switch">
      <!-- 思维方式比较重要，但需要知其然 -->
      <input type="checkbox" @click="handelClick" :checked="checkedFlag" />
      <div class="button">
        <svg class="power-off">
          <use xlink:href="#line" class="line" />
          <use xlink:href="#circle" class="circle" />
        </svg>
        <svg class="power-on">
          <use xlink:href="#line" class="line" />
          <use xlink:href="#circle" class="circle" />
        </svg>
      </div>
    </div>

    <!-- SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="line">
        <line x1="75" y1="34" x2="75" y2="58" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="circle">
        <circle cx="75" cy="80" r="35" />
      </symbol>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkedFlag: true
    }
  },
  methods: {
    handelClick () {
      this.checkedFlag = !this.checkedFlag
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #1b1a23;
  height: 100vh;
  font: 400 16px 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.power-switch {
  --color-invert: #ffffff;
  --width: 150px;
  --height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);
}
.power-switch .button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.power-switch .button:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: radial-gradient(
    circle closest-side,
    var(--color-invert),
    transparent
  );
  -webkit-filter: blur(20px);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 1s ease, -webkit-transform 1s ease;
  transition: opacity 1s ease, transform 1s ease;
  transition: opacity 1s ease, transform 1s ease, -webkit-transform 1s ease;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.power-switch .button .power-on,
.power-switch .button .power-off {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  fill: none;
  stroke: var(--color-invert);
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.power-switch .button .power-on .line,
.power-switch .button .power-off .line {
  opacity: 0.2;
}
.power-switch .button .power-on .circle,
.power-switch .button .power-off .circle {
  opacity: 0.2;
  -webkit-transform: rotate(-58deg);
  transform: rotate(-58deg);
  -webkit-transform-origin: center 80px;
  transform-origin: center 80px;
  stroke-dasharray: 220;
  stroke-dashoffset: 40;
}
.power-switch .button .power-on {
  -webkit-filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8));
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8));
}
.power-switch .button .power-on .line {
  opacity: 0;
  transition: opacity 0.3s ease 1s;
}
.power-switch .button .power-on .circle {
  opacity: 1;
  stroke-dashoffset: 220;
  transition: stroke-dashoffset 1s ease 0s, -webkit-transform 0s ease;
  transition: transform 0s ease, stroke-dashoffset 1s ease 0s;
  transition: transform 0s ease, stroke-dashoffset 1s ease 0s,
    -webkit-transform 0s ease;
}

.power-switch input {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}

.power-switch input:checked + .button:after {
  opacity: 0.15;
  -webkit-transform: scale(2) perspective(1px) translateZ(0);
  transform: scale(2) perspective(1px) translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease,
    -webkit-transform 0.5s ease;
}
.power-switch input:checked + .button .power-on,
.power-switch input:checked + .button .power-off {
  -webkit-animation: click-animation 0.3s ease forwards;
  animation: click-animation 0.3s ease forwards;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.power-switch input:checked + .button .power-on .line,
.power-switch input:checked + .button .power-off .line {
  -webkit-animation: line-animation 0.8s ease-in forwards;
  animation: line-animation 0.8s ease-in forwards;
}
.power-switch input:checked + .button .power-on .circle,
.power-switch input:checked + .button .power-off .circle {
  -webkit-transform: rotate(302deg);
  transform: rotate(302deg);
}
.power-switch input:checked + .button .power-on .line {
  opacity: 1;
  transition: opacity 0.05s ease-in 0.55s;
}
.power-switch input:checked + .button .power-on .circle {
  -webkit-transform: rotate(302deg);
  transform: rotate(302deg);
  stroke-dashoffset: 40;
  transition: stroke-dashoffset 0.4s ease 0.2s, -webkit-transform 0.4s ease 0.2s;
  transition: transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s;
  transition: transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s,
    -webkit-transform 0.4s ease 0.2s;
}

@-webkit-keyframes line-animation {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  40% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  60% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  85% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

@keyframes line-animation {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  40% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  60% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  85% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@-webkit-keyframes click-animation {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes click-animation {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>