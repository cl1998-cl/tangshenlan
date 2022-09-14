<template>
  <div class="app_wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      noScroll: false,
    };
  },
};
</script>

<style lang="stylus">
.app_wrap {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
