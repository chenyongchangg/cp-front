<template>
  <div class="main">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent = "handleLogin()">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" >登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {

    async handleLogin () {
      console.log('1')
      localStorage.setItem('token', 'data.token')
      await this.$router.push({name: 'home'})
      this.$message.success('登录成功')
      //   const res = await this.$http.post('localhost:8080/test', this.form)
      //   const {
      //     data,
      //     meta: {msg, status}
      //   } = res.data
      //   if (status === 200) {
      //     localStorage.setItem('token', 'data.token')
      //     await this.$router.push({name: 'home'})
      //     this.$message.success('登录成功')
      //   } else {
      //     this.$message.warning('登录失败')
      //   }
      // }
    }
  }
}
</script>

<style lang="css" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 100px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
  }

  .login-title {
    text-align: center;
    /*margin: 0 auto 40px auto;*/
  }

  .main{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #b3c0d1;
  }
</style>
