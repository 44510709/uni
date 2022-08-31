// import {
// 	myRequest
// } from '@/config/api.js';

// uni.login()封装
const wxLogin = function(openid) {
	return new Promise((resolve, reject) => {
		uni.login({
			success(res) {
				if (res.code) {
					resolve(res.code)
				} else {
					reject(res.errMsg);
				}
			}

		})
	})
}
/*微信小程序登录*/
const getWxInfo = function() {
	return new Promise((resolve,reject)=>{
		uni.getUserProfile({
			desc: '获取用户授权',
			success: res => {
				let userInfo = res.userInfo;
				wxLogin().then(code => { // 引用uni.login()封装
					// wx.login获取code --ajax-- 存本地 store
					resolve({userInfo,code})
				})
			}
		})
	})
}

// 获取手机号授权
const getPhoneNumber = function(event) {
	let that = this;
	// let code = event.detail.code; //获取手机code
	var promise = new Promise(function(resolve, reject) {
		// 检查登录状态是否过期
		uni.checkSession({
			success: (res) => {
				let phone = res.data;
				resolve(phone);
			},
			fail(err) {
				console.log('登录过期');
			}
		})
	})
	return promise;
}

module.exports = {
	getWxInfo,
	getPhoneNumber,
	wxLogin
}
