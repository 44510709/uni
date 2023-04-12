export default {
	MLOGIN(state, userInfo) {
		uni.setStorageSync('userInfo', JSON.stringify(userInfo))
		state.userInfo = userInfo
	},
	MLOGOUT(state) {
		uni.clearStorageSync('userInfo')
		state.userInfo = {
			"userName": "未登录用户"
		}
	},
	SETMOBILE(state, mobile) {
		uni.setStorageSync('mobile', mobile)
		state.mobile = mobile
	},
	SETOPNID(state, openid) {
		uni.setStorageSync('openid', openid)
		state.openid = openid
	},
	SETTOKEN(state, token) {
		uni.setStorageSync('token', token)
		state.token = token
	}
}
