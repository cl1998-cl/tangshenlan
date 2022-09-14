<template>
    <div class="container">
        <!--       <s-z></s-z>-->
        <template v-for="item in cardList">
            <div :ref="item.ref" class="card flex_item">
                <div class="content_img">
                    <el-image fit="fit"
                              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                              style="height: 100%; width: 100%;"></el-image>
                </div>
                <div class="content">
                    <h1>{{ item.title }}</h1>
                    <h3>{{ item.sec }}</h3>
                    <p> {{ item.text }}</p>
                    <div class="foot" @click.stop="addAnimate(item)">
                        <i class="el-icon-cloudy"></i>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
import SZ from '@/components/css/sz'

export default {
    name: 'index',
    components: {
        SZ
    },
    data () {
        return {
            formData: {},
            cardList: [
                {
                    title: 'No1',
                    sec: 'swiper',
                    text: '基于swiper实现的轮播图',
                    ref: 'oneRef'
                },
                {
                    ref: 'twoRef'
                },
                {
                    ref: 'threeRef'
                },
                {
                    ref: 'fourRef'
                },
                {
                    ref: 'fiveRef'
                },
                {
                    ref: 'sixRef'
                }
            ]
        }
    },
    async mounted () {

    },
    methods: {
        addAnimate({ref}){
            let dom = this.$refs[ref]
            console.log(dom)
        }
    }
}
</script>

<style lang="stylus" scoped>
.container {
    width: 100%;
    height 100%;
    background-color: #161623;
    padding 100px 50px
    overflow hidden
    display flex
    flex-wrap wrap

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#2196f3, #e91e63);
        clip-path: circle(10% at 5% 7%);
    }

}

.card {
    position: relative;
    width: 180px;
    height: 300px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    z-index 20
}

.content {
    position absolute
    top 100%
    left 0
    width 100%
    height: 100%
    transition 1s
    padding: 30px 20px

    h1 {
        font-width: 400;
        font-size 26px
        font-family Arial;
    }

    h3 {
        font-size 18px
        font-weight 350
    }

    p {
        word-break: break-word;
        font-size: 18px;
        font-weight: 400;
        color: #0a0c0e;
    }
}

.card:hover .content {
    top 0
}

.content_img {
    position absolute
    inset 0
    opacity 1
    transition 1s
}

.card:hover .content_img {
    opacity 0
    top -100%
    bottom 100%
}

.run {
    transform: rotateX(180deg);
}

.foot {
    position: absolute;
    bottom: 22px;
    rignt: 0;
    right: 30px;
    cursor pointer
}
</style>
