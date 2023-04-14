<template>
    <div class="content">
        <el-card class="card">
            <div slot="header" class="clearfix">
                <span>下雨效果</span>
            </div>
            <div class="c">
                <div class="cloud">
                    <div class="clouds"></div>
                    <div class="rain">
                        <span v-for="i in 10" :style="{'--i': Math.random()}"></span>
                    </div>
                </div>
            </div>

        </el-card>
        <el-card class="card">
            <div slot="header" class="clearfix">
                <span>文字</span>
                <el-button type="primary" @click="initText" size="mini">run</el-button>
            </div>
            <div class="b">
                <div class="text_box">
                   {{text}}
                </div>
                <audio class="audio" src=""></audio>
            </div>

        </el-card>
    </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return {
            text: '只是因为在人群中多看了你一眼',
            timer: null
        }
    },
    methods: {
        initText(){
            if(this.timer) {
                clearInterval(this.timer)
                this.timer = null
                this.text = this.$options.data.call(this).text
                return
            }
            let index = 0
            let text = this.text
            let that = this
            this.text = ''

            this.timer = setInterval(() => {
                if(index < text.length){
                    this.text = text.slice(0, index+1)
                }
                index++
                if(index === text.length){
                    index = 0
                }
            }, 300)
        },
    },
    mounted () {

    }
}
</script>

<style lang="stylus" scoped>
.content
    display flex
    padding 30px


    //rain

    .card
        width: 40%

    .card + .card
        margin-left 20px

.c
    overflow hidden
    background-color #d8e1ce

.cloud
    width: 320px
    height: 80px
    background-color #b0aaaa
    border-radius 50px
    margin 150px auto
    position relative

    &::after
        content ""
        width: 100%
        height: 10px
        background-color: #b0aaaa
        border-radius 50%
        position absolute
        bottom -120px

.clouds
    width: 90px
    height: 90px
    border-radius 50%
    background-color #b0aaaa
    position absolute
    top -50px
    left 50px

    &::after
        content ''
        width: 130px
        height: 130px
        background-color #b0aaaa
        border-radius 50%
        position absolute
        left 80px
        top -30px


.rain
    display flex
    position absolute
    topb 50%
    left 50%
    transform translate(-50%)

    span
        width: 15px
        height: 15px
        background-color #ffffff
        border-radius 50%
        margin 0 5px
        animation running linear 2s infinite
        animation-duration calc(var(--i) * 2s)

@keyframes running {
    0% {
        transform translateY(0) scale(0)
    }
    100% {
        transform translateY(170px) scale(1)
    }
}


//文字
.b
    overflow hidden
    position relative
    background-color #fb7373

    .text_box
        color #377637


</style>
