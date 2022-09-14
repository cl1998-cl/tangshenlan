<template>
<div class="menu_tree">
   <template v-for="(item, index) in menuList">
       <el-submenu v-if="item[propLabel.child]" :key="index" :index="item.path" :popper-append-to-body="true">
           <template slot="title">
               <i :class="item[propLabel.icon]" v-if="item[propLabel.icon]"></i>
               <span>{{ item[propLabel.title] }}</span>
           </template>
           <child-menu :menu-list="item[propLabel.child]"></child-menu>
       </el-submenu>
       <el-menu-item v-else :key="index" :index="item.path" :popper-append-to-body="true">
           <template slot="title">
               <i :class="item[propLabel.icon]" v-if="item[propLabel.icon]"></i>
               <span>{{ item[propLabel.title] }}</span>
           </template>
       </el-menu-item>
   </template>
</div>
</template>

<script>
export default {
    name: 'child-menu',
    props: {
        menuList: {
            type: Array,
            default() {
                return []
            }
        },
        propLabel: {
            type: Object,
            default () {
                return {
                    child: 'child',
                    title: 'title',
                    icon: 'icon'
                }
            }
        }
    }
}
</script>

<style scoped>

</style>