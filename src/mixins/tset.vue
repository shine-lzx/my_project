
<script>
import indexMixins from './index'
export default {
  mixins: [indexMixins],
  props: {
    msgValue: {
      type: String
    }
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
  },
  render () {
    return (
      <div class="contain">
        {/* <div class="bg"></div> */}
        <div class="main">
          <div class="modalTitle">标题</div>
          <div class="modalContent">内容： {this.msgValue}</div>
          <div class="modalFooter">
            <el-button type="default" onClick={() => { this.cancel() }}>取消</el-button>
            <el-button type="primary" onClick={() => { this.submitValue(this.msgValue) }}>确定</el-button>
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.contain{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  position: absolute;
  z-index: 1;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
}
.main {
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 20px;
  .modalTitle {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0px 10px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 3px;
  }
  .modalContent {
    flex: 1;
  }
  .modalFooter {
    align-self: flex-end;
    margin: 0px 10px 10px 10px;
  }
}
</style>
