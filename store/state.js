export default {
	openid: uni.getStorageSync('openid') ? uni.getStorageSync('openid') : '',
	token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
	mobile: uni.getStorageSync('mobile') ? uni.getStorageSync('mobile') : '',
	userInfo: uni.getStorageSync('userInfo') ? (JSON.parse(uni.getStorageSync('userInfo'))) : {
		userName: '未登录用户'
	}
}
