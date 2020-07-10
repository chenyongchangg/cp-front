import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = function (Vue) {
  axios.defaults.baseURL = 'http://49.235.201.184:8080/firehydrants/'
  Vue.prototype.$http = axios
}
export default MyHttpServer
