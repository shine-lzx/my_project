<template>
  <div class="container">
    <div class="perspective drag-area">
      <div class="camera">
        <div class="rotate">
          <div class="cube">
            <div class="side front">
              <div class="side left">
                <div class="side top"></div>
                <div class="side bottom"></div>
                <div class="side back">
                  <div class="side right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="axes">
      <div class="rotate">
        <div class="axis main-axis red-axis">
          <div class="axis perpendicular-axis red-axis"></div>
        </div>
        <div class="axis main-axis green-axis">
          <div class="axis perpendicular-axis green-axis"></div>
        </div>
        <div class="axis main-axis blue-axis">
          <div class="axis perpendicular-axis blue-axis"></div>
        </div>
      </div>
    </div>
    <div class="controls">
      <img class="input-show-borders" src="../../../assets/images/cube.svg" />
      <img class="input-show-grid" src="../../../assets/images/globe.svg" />
      <div class="zoom">
        <input class="input-zoom" type="range" min="-800" max="800" value="800" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//http://www.jq22.com/yanshi22023  Photo Sphere Viewer
* {
  transform-style: preserve-3d;
}

.perspective,
.camera,
.rotate {
  width: 100%;
  height: 100%;
}

.container {
  background: black;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.perspective {
  perspective: 800px;
  overflow: hidden;
}

.camera {
  transform: translateZ(800px);
}

.drag-area {
  cursor: grab;
}

.drag-area:active {
  cursor: grabbing;
}

.cube {
  transform: translate3d(-50%, -100%, 0) rotateX(-90deg);
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.cube.borders .side {
  box-shadow: inset 0 0 0px 1px black;
}

.side {
  background-image: url('../../../assets/images/environment.jpg');
  background-repeat: no-repeat;
  background-size: 400% 300%;
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: left;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateX(99.9%) rotateY(-90deg);
}

.cube.grid .side {
  background-image: url('../../../assets/images/grid.jpg'),
    url('../../../assets/images/environment.jpg');
  background-blend-mode: lighten;
}

.cube .top {
  background-position: 33.33% 0%;
  transform-origin: bottom;
  transform: translateY(-99.9%) rotateX(-90deg);
}

.cube .bottom {
  background-position: 33.33% 100%;
  transform-origin: top;
  transform: translateY(99.9%) rotateX(90deg);
}

.cube .front {
  transform: translateX(0%);
  background-position: 0% 50%;
}

.cube .left {
  background-position: 33.33% 50%;
}

.cube .back {
  background-position: 66.66% 50%;
}

.cube .right {
  background-position: 99.99% 50%;
}

.axes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.axes .rotate {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
}

.axis {
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 150px;
  transform-origin: top center;
}

.main-axis.red-axis {
  transform: rotateZ(90deg) rotateX(180deg) translateY(-50%);
}

.main-axis.green-axis {
  transform: rotateY(-90deg) translateY(-50%);
}

.main-axis.blue-axis {
  transform: rotateX(90deg) translateY(-50%);
}

.perpendicular-axis {
  transform: rotateY(90deg);
}

.red-axis {
  background-image: linear-gradient(
    transparent,
    rgba(255, 0, 0, 0.1) 50%,
    red 50%,
    transparent
  );
}

.green-axis {
  background-image: linear-gradient(
    transparent,
    rgba(0, 255, 0, 0.1) 50%,
    green 50%,
    transparent
  );
}

.blue-axis {
  background-image: linear-gradient(
    transparent,
    rgba(0, 0, 255, 0.1) 50%,
    blue 50%,
    transparent
  );
}

.controls {
  border-radius: 5px 5px 0 0;
  background-color: rgba(82, 120, 169, 0.35);
  color: white;
  font: 12px arial, sans-serif;
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.zoom {
  flex: auto;
  padding: 10px;
}

.zoom input {
  display: block;
  margin: auto;
  width: 65%;
  transform: scale(1.5) rotate(180deg);
}

.input-show-borders,
.input-show-grid {
  height: 30px;
  width: auto;
  padding: 10px;
}

.input-show-borders,
.input-show-grid,
.zoom input {
  cursor: pointer;
  opacity: 0.8;
}

.input-show-borders:hover,
.input-show-grid:hover,
.zoom input:hover {
  opacity: 1;
}
</style>