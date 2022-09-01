<template>
	<view class="com">
		新建组件
		<view>{{msg}}</view>
		<button @click="sayToFather">sayhello</button>
	</view>
</template>

<script>
	export default {
		name:"c-component",
		props:['msg'],
		data() {
			return {
				
			};
		},
		methods:{
			sayToFather(){
				this.$emit('childEvent','我是子组件')
			}
		}
	}
</script>

<style lang="scss" scoped>
.com{
	color: red;
}
</style>