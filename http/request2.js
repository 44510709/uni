export default {
	common:{
		// baseUrl:'http://192.168.11.120:3000',
		baseUrl:'',
		data:{},
		header:{
			"Content-Type":"application/json",
			// "Content-Type":"application/x-www-form-urlencoded",
		},
		method:"GET",
		dataType:"json"
	},
	request(options={}){
		uni.showLoading({
			title: '加载中'
		});
		
		options.url = this.common.baseUrl + options.url;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		options.data = options.data || this.common.data;
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result)=>{
					setTimeout(function () {
						uni.hideLoading();
					}, 500);
					if(result.statusCode!=200){
						return rej()
					}
					let data = result.data.data;
					return res(data)
				}
			})
		})
	}
}