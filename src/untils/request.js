import axios from 'axios'
import {Loading, Message} from 'element-ui';

const service = axios.create({
	timeout: 3000
})

let loading = null

service.interceptors.request.use(
	config => {
		//在此判断是否需要加密、设置headers，设置token
		
		if(loading) {
			loading.close()
		}
		if(config?.loading === false){
			loading = null
		}else {
			loading = Loading.service({
				lock: true,
				text: '正在拼命加载...',
				spinner: 'el-icon-loading',
				customClass: 'req-loading-class'
			})
		}
		return config
	},
	error => {
		if(loading) {
			loading.close();
		}
	}
)
service.interceptors.response.use(
	response => {
		if(response.status === 200) {
			if(loading) {
				loading.close()
			}
			return response.data
		}else{
			Message({
				message: '请求错误，请稍后重试！',
				type: 'error',
				duration: 3.5 * 1000
			})
		}
	},
	error => {
		if(loading){
			loading.close();
		}
		Message({
			message: '请求错误，请稍后重试！',
			type: 'error',
			duration: 3.5 * 1000
		})
	}
)

export default service
