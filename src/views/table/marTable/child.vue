<template>
    <div>
        {{ a }}
        <el-button type="primary" @click="changeNum">child</el-button>
    </div>
</template>

<script>
export default {
    name: 'child',
    props: {
        a: Number
    },
    methods: {
        changeNum () {
            this.$emit('changeA',999)
        }
    }
}
</script>

<style scoped>

</style>
