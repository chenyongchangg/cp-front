import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = function (Vue) {
  axios.defaults.baseURL = 'http://47.95.214.173:9000'
  Vue.prototype.$http = axios
}
export default MyHttpServer
