import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

//调用 store vuex状态管理 
import store from '@/store/index.js'


//引用uview ui 
import uView from 'uview-ui'
Vue.use(uView)

//引用封装的授权js
import wxInfo from '@/common/getUserInfo.js'
Vue.prototype.$wx = wxInfo

const app = new Vue({
    ...App,
	store
})
// 引入请求封装，将app参数传递到配置中
require('@/http/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app,
	store
  }
}
// #endif