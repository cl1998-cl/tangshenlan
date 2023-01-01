<template>
    <div class="head_nav rflex">
      <div class="right_nav rflex">
        <div class="head_menu rflex">
            <div class="head_menu_item cursor">知识产权</div>
            <div class="head_menu_item cursor">挖土掘金</div>
            <div class="head_menu_item cursor">详细信息</div>
        </div>
        <div class="head_search">
            <el-input v-model="searchText" placeholder="搜索" size="mini"></el-input>
        </div>
        <div class="head_github"></div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'p-header',
    data () {
        return {
            searchText: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.head_nav {
        position: fixed;
        top: 0;
        right: 0;
        left 180px
        z-index: 29;
        transition: width .2s;
        justify-content: space-between;
        height: 60px;
        line-height 60px
        box-sizing: border-box;
        background: #fff;
}
.right-nav{
        display: flex;
        flex: 1;
        width:calc(100% - 180px);
        padding-right: 15px;
        justify-content: space-between;
        box-shadow:0 2px 5px 0 rgba(237,233,233,0.5);
}

.head_menu{
  display: flex;

  .head_menu_item + .head_menu_item{
    margin-left: 15px;
  }

  .head_menu_item{
    font-size: 12px;
  }
  &:nth-child(1) {
    margin-left: 20px;
  }
}
.head_search{
  padding-left: 60px;


  /deep/.el-input--mini .el-input__inner{
    height 22px;
    line-height 22px;
    vertical-align: text-bottom;
  }
}
</style>
