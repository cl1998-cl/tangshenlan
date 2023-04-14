<template>
<div class="container">
    <el-card class="box-card">
        <el-form ref="form" :model="formData" label-width="80px">

        </el-form>
    </el-card>
</div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return{
            formData: {

            }
        }
    }
}
</script>

<style scoped>

</style>
