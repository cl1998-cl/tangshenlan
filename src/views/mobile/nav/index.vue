<template>
    <div class="container">
        <div class="box" :style="{'$border-color': color}">
            box
        </div>
        <div class="mobile">
            <div class="nav">
                <template v-for="(menu, index) in menuList">
                    <div class="item" :class="index === activeIndex ? 'active': ''" @click="menuClick(menu, index)">
                        <i :class="menu.icon" class="icon"></i>
                        <div class="text">{{ menu.text }}</div>
                    </div>
                </template>
                <div class="indicator"></div>
            </div>
        </div>
    </div>
</template>

<script>
import m from '@/assets/css/mixin.styl'
export default {
    name: 'index',
    data () {
        return {
            menuList: [
                {
                    icon: 'el-icon-house',
                    text: '首页'
                },
                {
                    icon: 'el-icon-user',
                    text: '朋友'
                },
                {
                    icon: 'el-icon-circle-plus-outline',
                    text: '关注'
                },
                {
                    icon: 'el-icon-chat-dot-round',
                    text: '消息'
                },
                {
                    icon: 'el-icon-setting',
                    text: '设置'
                },
            ],
            activeIndex: 0,
            color: 'red'
        }
    },
    methods: {
        menuClick(menu, index){
            this.activeIndex = index
            let arr = ['red', 'black', 'green', 'blue']
            this.color = arr[this.getRandomInt(0, 3)]
            console.log(m)
        },
        getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
}
</script>

<style lang="stylus" scoped>
//@import "src/assets/css/mixin.styl"
@import "~@/assets/css/variable.styl"
*{
    margin: 0
    padding: 0
    box-sizing border-box
}
colorA = #222327

.box{
    width: 50px;
    height: 50px;
    background-color $box-bg-color
    color $text-color
}
.container {
    height 100%
    width 100%
    display flex
    justify-content center
    align-items center

    .mobile {
        width 390px
        height: 600px
        background-color colorA
        position relative
        overflow hidden

        .nav {
            position absolute
            left 0
            right 0
            bottom 0
            height: 70px;


            background-color #ffffff

            display flex
            justify-content space-around
            align-items center

            .item {
                width 100%
                height 100%
                display flex
                flex-direction column
                justify-content center
                align-items center

                font-size 24px

                .icon {
                    transform translateY(10px)
                    transition 0.5s
                    z-index 1
                }

                .text {
                    font-size 12px
                    transform translateY(-7px)
                    transition 0.5s
                    opacity 0
                }


                &:hover .icon {
                    transform translateY(-25px)
                }

                &:hover .text {
                    opacity 1
                }

            }
            .item.active .icon{
                transform translateY(-25px)
            }
            .item.active .text{
                opacity 1
            }
        }
    }
}

.indicator {
    position absolute
    left 13px
    top -35%
    width 50px
    aspect-ratio: 1;
    border-radius 50%
    border 6px solid colorA
    background-color #0be858
    transition 0.5s

    &::before{
        content: ''
        position absolute
        width 20px
        aspect-ratio 1
        top 45%
        left -22px
        background-color transparent
        border-top-right-radius 20px
        box-shadow 0 -10px 0 0 colorA
    }
    &::after{
        content: ''
        position absolute
        width 20px
        aspect-ratio 1
        top 45%
        left 41px
        background-color transparent
        border-top-left-radius 20px
        box-shadow 0 -10px 0 0 colorA
    }
}
.item:nth-child(1).active ~ .indicator{
    transform translateX(calc(78px * 0))
}
.item:nth-child(2).active ~ .indicator{
    transform translateX(calc(78px * 1))
}
.item:nth-child(3).active ~ .indicator{
    transform translateX(calc(78px * 2))
}
.item:nth-child(4).active ~ .indicator{
    transform translateX(calc(78px * 3))
}
.item:nth-child(5).active ~ .indicator{
    transform translateX(calc(78px * 4))
}
</style>
