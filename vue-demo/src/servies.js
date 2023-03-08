//axios二次封装导入axios
import axios from 'axios'
import {getToken} from '@/utils/setToken.js'
import {Message} from 'element-ui'


const servies =axios.create({
	// 自动加载请求地址上
	baseURL:'/api',
	//超过时间请求中断
	timeout:3000 
})
//请求拦截器
servies.interceptors.request.use((config)=>{
	//请求之前做什么（获取并设置token）
	config.headers['token'] =getToken('token')
	return config
},(error)=>{
	return Promise.reject(error)
})
//响应拦截器
servies.interceptors.response.use((response)=>{
	//对相应数据做
	let { status,message }=response.data
	if(status !== 200){
		Message({messag:message || 'error', type:'waring'})
	}
	//返回要不然是und
	return response
},(error)=>{
	return Promise.reject(error)
})

export default servies