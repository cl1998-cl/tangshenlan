<template>
    <div class="home rflex">
        <side-menu></side-menu>
        <div class="menu_right wflex el-scrollbar">
            <p-head></p-head>
            <div class="menu_content">
                 <router-view></router-view><!--页面渲染入口-->
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/breadcrumb/index'
import PHead from '@/components/layout/header'
import SideMenu from '@/components/layout/sideMenu'

export default {
    name: 'Index',
    components: {
        BreadCrumb,
        PHead,
        SideMenu
    },
}
</script>
<style lang="stylus" scoped>
 .home{
        .menu_right{
            overflow: auto;
            position: absolute;
            right:0;
            top:0;
            bottom:0;
            background:#f0f2f5;
            width calc(100% - 180px)
            .menu_content{
                margin-top: 60px;
                position: relative;
                width:100%;
                height calc(100% - 60px)
                background:#f0f2f5;
            }

        }
    }
</style>
