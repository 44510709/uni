//  uview api Http请求 https://www.uviewui.com/js/http.html

import env from '@/.env';
// 测试环境
const REQUEST_BASEURL = env.request_baseurl
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = REQUEST_BASEURL; /* 根域名 */
        return config
    })
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if(config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.$store.state.userInfo.token
		}
	    return config 
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data
		// 自定义参数
		if (data.code == 401) {
			return data;
		} else if (data.code == 400 || data.code == 1002030025) {
			return data;
		} else if (data.code != 0) {
			uni.$u.toast(response.data.msg);
		}

		return data.data === undefined ? undefined : data
	}, (response) => { 
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
