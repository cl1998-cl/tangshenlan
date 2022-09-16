<template>
    <div class="container">
        <!--       <s-z></s-z>-->
        <template v-for="item in cardList">
            <div :id="item.ref" class="card flex_item" @mouseenter="cardEnter">
                <div class="content_img">
                    <el-image fit="fit"
                              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                              style="height: 100%; width: 100%;"></el-image>
                </div>
                <div class="content">
                    <h1>{{ formatData(item, 'title') }}</h1>
                    <h3>{{ formatData(item, 'sec') }}</h3>
                    <p> {{ formatData(item, 'text') }}</p>
                    <div class="foot" @click.stop="addAnimate(item)">
                        <i v-show="item.show" class="el-icon-sunny"></i>
                        <i v-show="!item.show" class="el-icon-moon"></i>
                    </div>
                </div>
            </div>
        </template>
        <div ref="test">{{test}}</div>

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
                    list: [
                        {
                            title: 'No1正面',
                            sec: 'search table',
                            text: '喷喷喷',

                        },
                        {
                            title: 'No1反面',
                            sec: 'search table',
                            text: '大大大',
                            ref: 'oneRef'
                        }
                    ],
                    ref: 'oneRef',
                    show: true
                },
                {
                    ref: 'twoRef',
                    list: [],
                    show: true
                },
                {
                    ref: 'threeRef',
                    list: [],
                    show: true
                },
                {
                    ref: 'fourRef',
                    list: [],
                    show: true
                },
                {
                    ref: 'fiveRef',
                    list: [],
                    show: true
                },
                {
                    ref: 'sixRef',
                    list: [],
                    show: true
                }
            ],
            test: '123'
        }
    },
    async mounted () {

    },
    methods: {
        addAnimate (item) {
            this.test = Math.random()
            console.log('test', this.$refs.test.innerHTML)
            Promise.resolve().then(res => {
                console.log('wei', this.$refs.test.innerHTML)
            })
            this.$nextTick(() => {
                console.log('next', this.$refs.test.innerHTML)
            })
            let dom = document.getElementById(item.ref)
            let children = [...dom.childNodes]
            children.forEach(node => {
                node.style.opacity = 0
                this.animate('tran', node)
                setTimeout(() => {
                    node.style.opacity = 1
                }, 1000)
            })
            this.animate('tran', dom)
            setTimeout(() => {
                item.show = !item.show
            }, 1000)
        },
        animate (na, dom) {
            let classes = dom.className
            if (classes.includes(na)) {
                dom.className = dom.className.replace(na, '')
                dom.style.backgroundColor = 'rgba(255,255,255,.85)'
            } else {
                dom.className = na + ' ' + classes
                dom.style.backgroundColor = 'rgba(255,255,255,.1)'
            }
        },
        formatData(item, t){
            let num = item.show ? 0 : 1
            let obj = item.list[num]
            if(obj) return obj[t]
            return ""
        },
        cardEnter(e){
            console.log(e)
            let a
            a = 1
            a = 2
            a = 3
            //a = 3
        },


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
    background: rgba(255, 255, 255, 0.85);
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

.tran {
    transform rotateX(180deg)
}

.flex_item {
    transition 2s
}
</style>
