<template>
  <div class="container">
    <div class="item">
      <div class="item_content content-lar">1 我最大</div>
    </div>
    <div class="item">
      <div class="item_content content-sma">2 我最小</div>
    </div>
    <div class="item">
      <div class="item_content content-mid">3 我中等</div>
    </div>
    <div class="item">
      <div class="item_content content-sma">4 我最小</div>
    </div>
    <div class="item">
      <div class="item_content content-mid">5 我中等</div>
    </div>
    <div class="item">
      <div class="item_content content-lar">6 我最大</div>
    </div>
    <div class="item">
      <div class="item_content content-sma">7 我最小</div>
    </div>
    <div class="item">
      <div class="item_content content-lar">8 我最大</div>
    </div>
    <div class="item">
      <div class="item_content content-lar">9 我最大</div>
    </div>
    <div class="item">
      <div class="item_content content-sma">10 我最小</div>
    </div>
    <div class="item">
      <div class="item_content content-mid">11 我中等</div>
    </div>
    <div class="item">
      <div class="item_content content-mid">12 我中等</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [
        {
          id: this.randoms(),
          styles: 'item_content content-lar',
          desc: '随机' + this.randoms()
          // imgUrl: require(`../../../assets/images/${this.imgsRandom()}`)
        }
      ],
      styleArr: ['item_content content-mid', 'item_content content-sma', 'item_content content-lar']
    }
  },
  created () {
    console.log(this.imgsRandom())
  },
  mounted () {
    // console.log(this.listData)
  },
  methods: {
    randoms () {
      return parseInt((Math.random(3) * 10))
    },
    imgsRandom () {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 800px;
  display: flex;
  flex-flow: column wrap;
  width: 70%;
  margin: 2em auto;
}

.item {
  // padding: 2em;
  margin-bottom: 2em;
  break-inside: avoid;
  // background: #ccc;
  color: #fff;
  text-align: center;
  margin: 10px;
  border: 1.5rem solid transparent;
  border-image: url(http://www.imaoda.com/s/img/tpl/border1.png) 15% 5%;
  filter: brightness(0.5);
  cursor: pointer;
  transition: all 0.2s;
}

.item:hover {
  transform: translate(0, -10%);
  filter: brightness(1);
}

.item .content-lar {
  height: 200px;
  background: url('https://unsplash.it/300/300/?random');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item .content-mid {
  height: 100px;
  background: url('https://unsplash.it/300/300/?random');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item .content-sma {
  height: 50px;
  background: url('https://unsplash.it/300/300/?random');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media screen and (max-width: 1100px) {
  .masonry {
    height: 800px;
  }
}

@media screen and (max-width: 800px) {
  .masonry {
    height: 1100px;
  }
}

@media screen and (max-width: 600px) {
  .masonry {
    height: 1300px;
  }
}

@media screen and (max-width: 460px) {
  .masonry {
    height: 1600px;
  }
}
</style>