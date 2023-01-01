<template>
<div class="container">
    {{c}}{{c}}
</div>
</template>

<script>
export default {
    name: 'a',
    data(){
        return {
            a: '1',
            b: '2'
        }
    },
    computed: {
        c(){
            console.log('计算属性')
            return this.a + this.b
        }
    }
    //
}
</script>

<style scoped>

</style>
