<template>
    <div :style="{width: width}" class="cflex menu_left">
        <div class="menu_page_top rflex">
            <span class="logo">pomelo</span>
        </div>
        <div class="menu_page_bottom is-scroll-left">
            <el-menu :default-active="activeIndex"
                     style="width: inherit;"
                     @select="handleSelect">
                <child-menu :menu-list="option"></child-menu>
            </el-menu>
        </div>
    </div>
</template>

<script>
import routeList from '@/router/index'
import ChildMenu from './childMenu'

export default {
    name: 'sideMenu',
    components: {
        ChildMenu
    },
    data () {
        return {
            isCollapse: false,
            activeIndex: '',
            width: '180px'
        }
    },
    computed: {
        option: function () {
            //暂时写死
            return [
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
                    title: '树形',
                    path: '/tree'
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
                    title: 'swiper',
                    path: '/swiper',
                    child: [
                        {
                            title: '例子1',
                            path: '/swiper'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleOpen () {

        },
        handleClose () {

        },
        handleSelect (val) {
            this.$router.push(val)
        },
        print () {
            console.log(routeList)
        }
    }
}
</script>

<style lang="stylus" scoped>
.menu_left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

.menu_page_top {
    height 60px;
    width 100%;
    display: flex;
    align-items: center;
    padding-left: 22px;
}

.menu_page_bottom {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    margin-top: 3px;
    z-index 100000;
}

.logo {
    font-size: 20px;
    font-family: fantasy;
    font-weight: 700;
    font-style: italic;
    color: dodgerblue;
}
</style>
