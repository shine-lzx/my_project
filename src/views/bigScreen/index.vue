<template>
  <div class="bigScreenContainer">
    <div class="border8">
      <dv-border-box-11 :title="userName">
        <div class="content">这是你输入的标题名称：{{userName}}</div>
      </dv-border-box-11>
    </div>
    <div class="formStyle">
      <el-form :rules="rules" ref="form" :model="form" label-width="80px">
        <el-form-item label="输入标题" prop="titleName">
          <el-input v-model="form.titleName" clearable></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="enterClick">改变标题</el-button>
    </div>
    <div class="huadong">
      <hua @handlerSlide="handlerSlide" />
    </div>
  </div>
</template>

<script>
import hua from '@/components/huadong'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('vuexT')
export default {
  components: {
    hua
  },
  data () {
    return {
      form: {
        titleName: ''
      },
      rules: {
        titleName: [
          { required: true, message: '请输入标题名称', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.form.titleName = this.userName
  },
  methods: {
    ...mapMutations({ 'handleTitle': 'CHANGE_TITLE_NAME' }),
    handlerSlide (status) {
      console.log('滑动验证', status)
    },
    enterClick () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleTitle(this.form.titleName)
        } else {
          this.$message({
            message: '不可以不填，谢谢',
            type: 'warning'
          })
          return false
        }
      })
    }
  },
  computed: {
    ...mapState({ userName: state => state.uname })
  }
}
</script>

<style lang="scss" scoped>
.bigScreenContainer {
  width: 100%;
  height: calc(100vh - 50px);
  background: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  .border8 {
    width: 500px;
    height: 200px;
    .content {
      line-height: 200px;
      text-align: center;
      color: white;
    }
  }
  .formStyle {
    width: 400px;
  }
}
.huadong {
  width: 300px;
}
</style>