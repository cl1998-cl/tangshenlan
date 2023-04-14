import Request from '@/untils/request'


export const uploadFile = (data) => Request({
	method: 'post',
	url: '/upload',
	timeout: 3000,
	data
})
