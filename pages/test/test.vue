<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/subpages/fenbao/fenbao">分包</navigator>
		<c-component :msg='title' @childEvent="sayhello"></c-component>

		<view class="">{{userInfo.userName}}11</view>
		<button @click="login('gjx')">登录</button>
		<button @click="logout">退出</button>
		<u-button type="primary" loading loadingText="加载中"></u-button>

		<button class="btnBig marT140" @click="getUserInfo" v-if="userInfo.userName=='未登录用户'">
			微信账号快捷登录
		</button>
		
		<button class="btnBig marT140" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
			点击获取手机号
		</button>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	import {
		getTest,
	} from '@/api/api.js'
	
	export default {
		data() {
			return {
				title: '我是父组件的数据信息'
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		async onLoad() {
			// let test = await getTest({custom: { auth: false}})
			// console.log(test,121);
		},
		methods: {
			...mapActions(['login', 'logout']),
			sayhello(data) {
				this.title = '自组件和我通信了' + data
			},
			// 授权登录
			getUserInfo() {
				this.$wx.getWxInfo().then(res=>{
					this.login({
						userName:res.userInfo.nickName,
						avatarUrl:res.userInfo.avatarUrl
					})
				})
			},
			// 手机号授权
			async onGetPhoneNumber(e) {
				await this.$wx.wxLogin()
				this.$wx.getPhoneNumber(e).then(res=>{
					console.log(res);
				})

			}
		}
	}
</script>

<style>

</style>
