<template>
  <div class="wrap">
    <p-title>
      <span>javascript</span>
    </p-title>
    <p-text>
      概念：轻量级脚本语言，不具备开发操作系统的能力
    </p-text>
<!--    <p-code :text="code"></p-code>-->
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      code: 'let a = 12;'
    }
  }
}
</script>

<style scoped>

</style>