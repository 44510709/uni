import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		// userName:'未登录用户'
		userInfo:uni.getStorageSync('userInfo')?(JSON.parse(uni.getStorageSync('userInfo'))):{userName:'未登录用户'}
	},
	mutations:{
		MLOGIN(state,userInfo){
			uni.setStorageSync('userInfo',JSON.stringify(userInfo))
			state.userInfo = userInfo
		},
		MLOGOUT(state){
			uni.clearStorageSync('userInfo')
			state.userInfo = {"userName":"未登录用户"}
		}
	},
	actions:{
		login(context,userInfo){
			context.commit('MLOGIN',userInfo)
		},
		logout(context){
			context.commit('MLOGOUT')
		}
	}
})


export default store