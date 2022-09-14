<template>
<div class="wrap">
  <div class="text">
    <slot></slot>
  </div>

</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="stylus">
.text{
  font-weight 400
  font-size 12px
  height: 24px;
  text-align: left;
  line-height 24px
}
</style>