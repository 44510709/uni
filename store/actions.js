export default {
	login(context, userInfo) {
		context.commit('MLOGIN', userInfo)
	},
	logout(context) {
		context.commit('MLOGOUT')
	},
	setmobile(context, mobile) {
		context.commit('SETMOBILE', mobile)
	},
	setopenid(context, openid) {
		context.commit('SETOPNID', openid)
	},
	settoken(context, token) {
		context.commit('SETTOKEN', token)
	}
}
