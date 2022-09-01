const http = uni.$u.http

// post请求，获取菜单
export const postTest = (params, config = {}) => http.post('/m1/1427349-0-default/getinfo', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getTest = (data) => http.get('/m1/1427349-0-default/getinfo', data)
