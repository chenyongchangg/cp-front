<template>
  <el-container class="container">
    <el-header class="header">
      <el-row >
        <el-col :span="4"><div class="grid-content bg-purple">平台商标</div></el-col>
        <el-col :span="18" class="middle"><div class="grid-content bg-purple"> <h3>platform of test</h3> </div></el-col>
        <el-col :span="2" ><div class="grid-content bg-purple"><a @click.prevent = "logout()" class="loginout" href=""> logout</a></div></el-col>

      </el-row>

    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>

      </el-aside>
      <el-container>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  beforeCreate () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push({name: 'login'})
    }
  },
  methods: {

    async logout () {
      await this.$router.push({name: 'login'})
      await this.$message.warning('你己经退出')
      await localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped>
  .container{
    position: absolute;
   height: 100%;
    width: 100%;
  }
  .header{
    background-color: #b3c0d1;
  }
  .aside{
    background-color: #d3dce6;
  }
  .main{
    background-color: #e9eef3;

  }
  .middle{
    text-align: center;
  }
  .loginout{
    text-decoration: none;
    line-height: 60px;

  }
</style>
