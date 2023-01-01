<template>
<div class="refresh">
    <div class="track"
         ref="track"
         @touchstart="onTouchStart"
         @touchmove="onTouchMove"
         @touchend="onTouchEnd"
         @touchcancel="onTouchEnd"
    >
        <div class="head" :style="{top: headH}">
            <div class="text" :class="{tran: isTran}"><i class="el-icon-bottom"></i></div>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script>
const DEFAULT_HEAD_HEIGHT = 50
const STATE_MAP = {
    normal: 'normal',
    pulling: 'pulling',
    loosing: 'loosing',
    success: 'success'
}
let scrollEL
export default {
    name: 'refresh',
    props: {
        //加载成功文字
        successText: String,
        //加载中的文字
        loadingText: String,
        //到达阈值时的文字
        loosingText: String,
        //下拉时的文字
        pullingText: String,
        headHeight: {
            type: [Number, String],
            default: DEFAULT_HEAD_HEIGHT
        }
    },
    data(){
        return {
            status: STATE_MAP.normal,
            ceiling: '',
            showHead: false,
            startY: null,
            moveHeight: null,
            headHY: -300,
            isTran: false,

        }
    },
    computed: {
        //是否可触摸
        touchable(){
            return this.status === STATE_MAP.normal
        },
        headH(){
            return `${this.headHY}px`
        }
    },
    mounted(){
        scrollEL = this.getScroller(this.$el)
    },
    methods: {
        onTouchStart(event){
            if(!this.touchable) return false
            this.startY = event.touches[0].clientY
        },
        onTouchMove(event){
            if(!this.touchable) return false
            this.moveHeight = Math.floor(event.touches[0].clientY - this.startY)
            this.isTran = this.moveHeight > 50;
            if(this.moveHeight > 200) return;
            this.$refs.track.style.transform = `translateY(${this.moveHeight}px)`

        },
        onTouchEnd(event){
            if(!this.touchable) return false
            this.$refs.track.style.transition = 'all 0.7s'
            this.$refs.track.style.transform = `translateY(0px)`
            this.startY = 0
            this.isTran = false
            setTimeout(() => {
                this.$refs.track.style.transition = 'none'
            },700)
            //this.headHY = -50
        },

        resetTouchStatus(){
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
        },
        //获取元素
        getScroller(el, root = window){
            const overflowScrollReg = /scroll|auto|overlay/i
            let node = el;
            while (
                node &&
                node.tagName !== 'HTML' &&
                node.tagName !== 'BODY' &&
                node.nodeType === 1 &&
                node !== root
                ) {
                const { overflowY } = window.getComputedStyle(node);
                if (overflowScrollReg.test(overflowY)) {
                    return node;
                }
                node = node.parentNode
            }
            return root;
        },
        //获取高度
        getScrollTop(el){
            const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
            return Math.max(top, 0)
        },
        getDirection(x, y) {
            if (x > y) {
                return 'horizontal';
            }

            if (y > x) {
                return 'vertical';
            }

            return '';
        },
    }
}
</script>

<style scoped lang="stylus">
.refresh{
    overflow hidden
    user-select none
    height: 100%;

    .track{
        position: relative
        height:100%;


        .head{
            position absolute
            left 0
            right 0
            height: 300px;
            display flex
            align-items end
            justify-content center
            color #969799FF
            background-color #34b9a4

            .text{
                text-align center
                transition all 0.7s
            }

        }
    }
}
    .tran{
        transform rotate(-180deg)

    }
</style>
