import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import Dash from '../components/home/dash.vue'
import Map2 from '../components/map/map2.vue'
import User from '../components/user/user.vue'
import SystemLog from '../components/system/systemlog.vue'
import AlertLog from '../components/system/alertlog'
import EquipmentLog from '../components/equipment/equipment.vue'
import Remote from '../components/remotecontroll/remotecontroll.vue'
import EXCELI from '../components/map/excelimport.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'main',
      path: '/',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'user',
          path: '/user',
          component: User
        },
        {
          name: 'map2',
          path: '/map2',
          component: Map2
        },
        {
          name: 'systemlog',
          path: '/systemlog',
          component: SystemLog
        },
        {
          name: 'alertlog',
          path: '/alertlog',
          component: AlertLog
        },
        {
          name: 'equipmentlog',
          path: '/equipmentlog',
          component: EquipmentLog
        },
        {
          name: 'remote',
          path: '/remote',
          component: Remote
        },
        {
          name: 'dash',
          path: '/dash',
          component: Dash
        },
        {
          name: 'exceli',
          path: '/exceli',
          component: EXCELI
        }
      ]
    }
  ]
})
