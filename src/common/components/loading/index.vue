<template>
    <div>
        <div v-if="visible" class="loading">
            {{ text }}
            <!--            波纹加载效果-->
            <!--            <div class="load_seven"></div>-->
            <!--            点加载效果-->
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            text: '加'
        }
    }

}
</script>

<style lang="stylus" scoped>
.loading
    position: fixed
    inset: 0
    display: flex
    z-index 1000
    justify-content: center
    align-items: center
    background-color: rgba(0, 0, 0, .4)

    .load_seven
        position relative
        width 48px
        height: 48px;

    .load_seven:before, .load_seven:after
        content ""
        width 100px
        height: 100px
        border-radius 50%
        border 4px solid #ffffff
        position absolute
        top 0
        left 0
        animation p 2s linear infinite


    .load_seven:after
        animation-delay 1s


@keyframes p {
    0% {
        transform scale(0)
        opacity 1
    }
    100% {
        transform scale(1)
        opacity 0
    }
}

</style>
