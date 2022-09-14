<template>
    <div class="container">
        <!--       <s-z></s-z>-->
        <template v-for="item in cardList">
            <div class="card flex_item">
                <h1>{{ item.title }}</h1>
                <h3>{{ item.sec }}</h3>
                <p> {{ item.text }}</p>
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
                    sec: 'search table',
                    text: 'fdsajkfhjkdsfhjksdafhjkldsafhdjksfhdsjafjdsfhjkdshf'
                },
                {}, {}, {}, {}, {}, {}
            ]
        }
    },
    async mounted () {

    },
    methods: {

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
}
</style>
