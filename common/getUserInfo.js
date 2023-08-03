// import {
// 	getOpenid,
// 	getMobile,
// 	getUser
// } from '@/api/user.js'

import store from '@/store/index.js'
/**
 * @toLogin:登录取code拿openid
 * @createTime: 2023-04-03 15:25:55
 */
const toLogin = function() {
	return new Promise((resolve, reject) => {
		uni.login({
			success(res) {
				if (res.code) {
					// getOpenid({
					// 	'code': res.code
					// }).then(result => {
					// 	store.dispatch('setopenid', result)
					// 	resolve(result)
					// })
				} else {
					reject(res.errMsg);
				}
			}

		})
	})
}
/**
 * @getUserInfo:获取用户信息
 * @createTime: 2023-04-03 15:25:55
 */
const getUserInfo = function() {
	return new Promise((resolve, reject) => {
		uni.getUserInfo({
			success(res) {
				console.log("getUserProfile 调用成功：", res.userInfo);
				if (res.userInfo) {
					store.dispatch('userInfo', JSON.stringify(res.userInfo))
				}
			},
			fail(res) {
				console.log("getUserProfile 调用失败", res);
			},
		});
	})
}

/**
 * @getPhoneNumber:获取手机号授权
 * @createTime: 2023-04-03 15:25:55
 */
const getPhoneNumber = function(event) {
	return new Promise(function(resolve, reject) {
		// 检查登录状态是否过期
		uni.checkSession({
			success: async (res) => {
				let openid = store.state.openid;
				let mobile = await getMobile({
					openid: openid,
					iv: event.detail.iv,
					encryptedData: event.detail.encryptedData,
				})
				console.log(mobile, 1111);
				// store.dispatch('setmobile', mobile.phoneNumber)
				// store.dispatch('settoken', token)
				resolve(true);
			},
			fail(err) {
				console.log('登录过期');
				toLogin().then(res => {
					if (res) {
						uni.showToast({
							title: '登录过期，请再次点击登录',
							icon: 'none',
							duration: 3000
						});
					}
				})

			}
		})
	})
}

/**
 * @loginPop:授权引导弹窗
 * @createTime: 2023-04-03 15:25:55
 */
const showLogin = function() {
	uni.showModal({
		title: '系统提示',
		content: '请登录',
		confirmColor: '#04AFDB',
		success: function(res) {
			if (res.confirm) {
				// uni.navigateTo({
				// 	url: '/subpages/login/login'
				// })
			} else if (res.cancel) {
				console.log('用户点击取消');
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	});
}

module.exports = {
	getUserInfo,
	getPhoneNumber,
	toLogin,
	showLogin
}
