<template>
<div class="title">
  <span class="p_title">
    <slot></slot>
  </span>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="stylus">
.title{
  font-weight bold
  font-size 18px
  height: 32px;
  text-align: left;
  text-indent: 1.5em;
  line-height 32px
}

</style>