import Request from '@/untils/request'


export const getUserInfo = (data) => Request({
	method: 'post',
	url: '/pomelo/table/getUserInfo',
	timeout: 3000,
	data
})
