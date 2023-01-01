<template>
    <div class="app_wrap">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',

    data () {
        return {
            noScroll: false,
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init(){

            console.log( this._init)
        }


    }
}
</script>

<style lang="stylus">
.app_wrap {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
