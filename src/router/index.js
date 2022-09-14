import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
		redirect: '/index',
		children: [
			{
				path: '/aaa',
				component: () => import('@/components/table/demo')
			},
			{
				path: '/index',
				name: 'Introduction',
				component: () => import('@/views/index/index.vue'),
				meta: {
					title: '首页'
				}
			},
			{
				path: '/pomelo/js/introduction',
				name: 'Introduction',
				component: () => import('@/views/basic/index.vue'),
				meta: {
					title: '导论'
				}
			},
			{
				path: '/pomelo/js/dom',
				name: 'Introduction',
				component: () => import('@/views/dom/index.vue'),
				meta: {
					title: 'DOM'
				}
			},
			{
				path: '/upload',
				name: 'upload',
				component: () => import('@/views/upload/index.vue'),
				meta: {
					title: '文件上传'
				}
			},
			{
				path: '/table1',
				name: 'upload',
				component: () => import('@/views/table/marTable/index'),
				meta: {
					title: '合并表格'
				}
			},
			{
				path: '/table2',
				name: 'upload',
				component: () => import('@/views/table/childrenTable/index'),
				meta: {
					title: '嵌套表格'
				}
			},
			{
				path: '/view',
				name: 'interView',
				component: () => import('@/views/interView/index'),
				meta: {
					title: '炫酷大屏'
				}
			},
			{
				
				path: '/flex',
				name: 'flex',
				component: () => import('@/views/layout/flex/index'),
				meta: {
					title: 'flex布局'
				}
			},
			{
				path: '/grid',
				name: 'grid',
				component: () => import('@/views/layout/grid/index'),
				meta: {
					title: 'grid系统'
				}
			},
			{
				path: '/swiper',
				name: 'swiper',
				component: () => import('@/views/swiper/demo1/index'),
				meta: {
					title: 'swiper卡片'
				}
			},
		
		]
		
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
	return VueRouterPush.call(this, to).catch(err => err)
}
export default router
