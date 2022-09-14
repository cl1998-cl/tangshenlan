const Mock = require('mockjs')

Mock.setup({
	timeout: 3000
})
 Mock.mock('/pomelo/table/getUserInfo',{
	code: '200',
	data: [
		{
			nation: '吴国',
			occupation: '教师',
      sex: '男',
      skillNum: '1'
		},
    {
      nation: '吴国',
      occupation: '教师',
      sex: '女',
      skillNum: '2'
    },
    {
      nation: '蜀国',
      occupation: '士兵',
      sex: '女',
      skillNum: '3'
    },
    {
      nation: '蜀国',
      occupation: '士兵',
      sex: '男',
      skillNum: '4'
    },
    {
      nation: '蜀国',
      occupation: '炮兵',
      sex: '男',
      skillNum: '5'
    },
	]
	
})

