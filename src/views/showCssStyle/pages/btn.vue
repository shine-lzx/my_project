<template>
  <div class="container">
    <button data-text="点击进入" class="btn btn-primary btn-ghost btn-border-stroke btn-text-float-up">
      <div class="btn-borders">
        <div class="border-top"></div>
        <div class="border-right"></div>
        <div class="border-bottom"></div>
        <div class="border-left"></div>
      </div>
      <span class="btn-text">了解详情</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.container {
  display: flex;
}
.btn {
  --hue: 190;
  --ease-in-duration: 0.25s;
  --ease-out-duration: 0.65s;
  --ease-out-delay: var(--ease-in-duration);
  position: relative;
  width: 100px;
  height: 36px;
  // padding: 36px 100px;
  font-size: 1rem;
  line-height: 20px;
  color: white;
  text-decoration: none;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 171;
  }

  &-ghost {
    // color: hsl(var(--hue), 100%, 41%);
    color: hsl(0, 100%, 50%);
    background-color: transparent;
    // border-color: hsl(var(--hue), 100%, 41%);
    border-color: hsl(0, 100%, 50%);

    &:hover {
      color: white;
    }
  }

  &-border-stroke {
    // border-color: hsla(var(--hue), 100%, 41%, 0.35);
    border-color: hsla(0, 100%, 50%, 0.5);

    .btn-borders {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .border-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        // background: hsl(var(--hue), 100%, 41%);
        background: hsl(0, 100%, 50%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-right {
        position: absolute;
        right: 0;
        width: 1px;
        height: 100%;
        // background: hsl(var(--hue), 100%, 41%);
        background: hsl(0, 100%, 50%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      .border-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        // background: hsl(var(--hue), 100%, 41%);
        background: hsl(0, 100%, 50%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-left {
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        // background: hsl(var(--hue), 100%, 41%);
        background: hsl(0, 100%, 50%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      // when unhover, ease-in top, right; ease-out bottom, left

      .border-left {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          cubic-bezier(0.2, 1, 0.2, 1);
      }
      .border-bottom {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          cubic-bezier(0.2, 1, 0.2, 1);
      }

      .border-right {
        transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
      }
      .border-top {
        transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
      }
    }

    &:hover {
      // color: hsl(var(--hue), 100%, 41%);
      color: hsl(0, 100%, 50%);
      background: transparent;

      .border-top,
      .border-bottom {
        transform: scaleX(1);
      }
      .border-left,
      .border-right {
        transform: scaleY(1);
      }

      // when hover, ease-in bottom, left; ease-out top, right

      .border-left {
        transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
      }
      .border-bottom {
        transition: var(--ease-in-duration) cubic-bezier(1, 0, 0.8, 0);
      }

      .border-right {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          cubic-bezier(0.2, 1, 0.2, 1);
      }
      .border-top {
        transition: var(--ease-out-duration) var(--ease-out-delay)
          cubic-bezier(0.2, 1, 0.2, 1);
      }
    }
  }

  &-text-float-up {
    &::after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(35%);
      transition: 0.25s ease-out;
    }

    // when hover, ease-in top-text; ease-out bottom-text

    .btn-text {
      display: block;
      transition: 0.75s 0.1s cubic-bezier(0.2, 1, 0.2, 1);
    }

    &:hover {
      // when hover, ease-in bottom-text; ease-out top-text

      .btn-text {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.25s ease-out;
      }

      &::after {
        opacity: 1;
        transform: translateY(0);
        transition: 0.75s 0.1s cubic-bezier(0.2, 1, 0.2, 1);
      }
    }
  }
}
</style>