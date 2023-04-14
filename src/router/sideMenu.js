





export default [
	{
		title: '首页',
		path: '/index',
		icon: '',
	},
	{
		title: '表格',
		icon: '',
		path: '/table1',
		child: [
			{
				title: '合并表格',
				path: '/table1'
			},
			{
				title: '嵌套表格',
				path: '/table2'
			}
		]
	},
	{
		title: '表单',
		path: '/form'
	},
	{
		title: '移动端',
		path: '/btnav',
		child: [
			{
				title: '底部导航栏',
				path: '/btnav'
			},
			{
				title: '下拉刷新',
				path: '/refresh'
			},
		]
	},
	{
		title: '文件上传',
		path: '/upload'
	},
	{
		title: '炫酷大屏',
		path: '/view'
	},
	{
		title: '布局',
		path: '/flex',
		child: [
			{
				title: 'flex',
				path: '/flex'
			},
			{
				title: 'grid',
				path: '/grid'
			}
		]
	},
	{
		title: '好玩的CSS',
		path: '/option1',
		child: [
			{
				title: '配置项1',
				path: '/option1'
			},
			{
				title: '配置项2',
				path: '/option2'
			}
		]
	},
	{
		title: 'swiper',
		path: '/swiper',
		child: [
			{
				title: '例子1',
				path: '/swiper'
			}
		]
	},
	{
		title: '诸神皇冠',
		path: '/gods',
		child: [
			{
				title: '名字',
				path: '/gods/name'
			},
			{
				title: '相亲语言解释',
				path: '/gods/talk'
			},
			{
				title: '特性寿命',
				path: '/gods/life'
			},
			{
				title: '特性面相特征',
				path: '/gods/images'
			},
		]
	},
]
