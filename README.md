# uniapp 模版

## 目录结构
   - api 存放request封装 以及api接口管理 
   ```
   request.js 使用uview ui uview官网api -> Http请求  
   详细看文档 [https://www.uviewui.com/js/http.html]
   ```
  
   - components 存放组件 pages.json 配置easycom 按需自动加载 无需手动导入
   ```
   "easycom": {
     "autoscan": true,
     "custom": {
   	"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue" //按需加载
   	// "(.*)": "@/components/$1.vue" // 匹配components目录内的vue文件
     }
   }
   ```
   - store vuex 
   - subpages 小程序分包 详细看文档