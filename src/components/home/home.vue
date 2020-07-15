<template>
  <el-container class="container">
    <el-header class="header">
      <el-row >
        <el-col :span="4"><div class="grid-content bg-purple"><h2>LOGO</h2>  </div></el-col>
        <el-col :span="18" class="middle"><div class="grid-content bg-purple"> <h3>欢迎使用智慧消防云平台</h3> </div></el-col>
        <el-col :span="2" ><div class="grid-content bg-purple"><a @click.prevent = "logout()" class="loginout" href=""> 登出</a></div></el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu :router="true" :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="user">
                <i class="el-icon-circle-plus"></i>
                <span>用户查询</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>设备</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="equipmentlog">
                <i class="el-icon-s-release"></i>
                <span>设备管理</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-share"></i>
              <span>可视化</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="map2">
                <i class="el-icon-location"></i>
                <span>地图</span>
              </el-menu-item>
              <el-menu-item index="dash">
                <i class="el-icon-video-play"></i>
                <span>dash</span>
              </el-menu-item>
              <el-menu-item index="earth">
                <i class="el-icon-video-play"></i>
                <span>earth</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-attract"></i>
              <span>远程控制</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="remote">
                <i class="el-icon-data-line"></i>
                <span>命令下发</span>
              </el-menu-item>
              <el-menu-item index="4-2">
                <i class="el-icon-location"></i>
                <span>option</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>系统</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="systemlog">
                <i class="el-icon-notebook-1"></i>
                <span>系统日志</span>
              </el-menu-item>
              <el-menu-item index="alertlog">
                <i class="el-icon-notebook-1"></i>
                <span>报警日志</span>
              </el-menu-item>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>数据维护</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="exceli">
                <i class="el-icon-notebook-1"></i>
                <span>报表导入</span>
              </el-menu-item>
              <el-menu-item index="excelo">
                <i class="el-icon-notebook-1"></i>
                <span>报表导入</span>
              </el-menu-item>
              <el-menu-item index="datao">
                <i class="el-icon-notebook-1"></i>
                <span>数据库导出</span>
              </el-menu-item>
            </el-menu-item-group>

          </el-submenu>
        </el-menu>

      </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
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
    background-color: #334251;
    color: white;
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
    color: white;

  }
</style>
