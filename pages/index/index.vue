<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/pages/list/list">lunbo</navigator>
		<navigator url="/subpages/fenbao/fenbao">fenbao111221</navigator>
		<new-component :msg='title' @childEvent="sayhello"></new-component>
		
		<view class="">{{userName}}</view>	
		<button @click="login('gjx')">登录</button>
		<button @click="logout">退出</button>
		<u-button type="primary" loading loadingText="加载中"></u-button>
	</view>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	import {getTest} from '@/api/api.js'
	export default {
		data() {
			return {
				title: '我是父组件的数据信息'
			}
		},
		computed:{
			...mapState(['userName'])
		},
		async onLoad() {
			let test = await getTest()
			console.log(test,11);
		},
		methods: {
			...mapActions(['login','logout']),
			sayhello(data){
				this.title = '自组件和我通信了'+data
			}
		}
	}
</script>

<style>
	
</style>
