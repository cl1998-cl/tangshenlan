<template>
  <div class="p_bread">
    <el-breadcrumb separator="/" class="bread_container">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="stylus">
.p_bread{
  position absolute
  width: 100%;
  top 0
  left: 0
  background-color: rgba(0,0,0,.1);
  padding 10px 0;
  .bread_container{
    margin-left 20px

  }
}
</style>