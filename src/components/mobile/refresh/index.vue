<template>
<div class="refresh">
    <div class="track" ref="track" >
        <div class="head">
            <div class="text">aaa</div>
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
        }
    },
    computed: {
        //是否可触摸
        touchable(){
            return this.status === STATE_MAP.normal
        }
    },
    mounted(){
        this.initTouch(this.$refs.track)
        scrollEL = this.getScroller(this.$el)
    },
    methods: {
        initTouch(el){
            const {onTouchStart, onTouchMove, onTouchEnd} = this
            this.on(el, 'touchstart', onTouchStart)
            this.on(el, 'touchmove', onTouchMove)
            this.on(el, 'touchend', onTouchEnd)
            this.on(el, 'touchcancel', onTouchEnd)
        },
        //给元素添加相关事件
        on(target, event, fn){
            target.addEventListener( event, fn)
        },
        touchStart(event){
            this.resetTouchStatus()
            this.startX = event.touches[0].clientX
            this.startY = event.touches[0].clientY
        },
        touchMove(event) {
            const touch = event.touches[0];
            this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            const LOCK_DIRECTION_DISTANCE = 10;
            if (
                !this.direction ||
                (this.offsetX < LOCK_DIRECTION_DISTANCE &&
                    this.offsetY < LOCK_DIRECTION_DISTANCE)
            ) {
                this.direction = this.getDirection(this.offsetX, this.offsetY);
            }
        },
        touchEnd(event){

        },
        onTouchStart(event){
            if(this.touchable){
                this.checkPullStart(event)
            }
        },
        onTouchMove(event){
            if(!this.touchable) return
            if(!this.ceiling) {
                this.checkPullStart()
            }
            this.touchMove(event)
        },
        onTouchEnd(event){
            if (this.touchable && this.ceiling && this.deltaY) {
                this.duration = this.animationDuration;
                if (this.status === 'loosing') {
                    this.$nextTick(() => {
                        this.$emit('refresh');
                    });
                } else {
                }
            }
        },
        checkPullStart(event){
            this.ceiling = this.getScrollTop(scrollEL) === 0
            if(this.ceiling){

                this.touchStart(event)
            }
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

    .track{
        position: relative

        .head{
            position absolute
            left 0
            width 100%
            height: 50px;
            line-height 50px
            text-align center
            color #969799FF
        }
    }
}
</style>
