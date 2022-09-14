<template>
<div>
    <p-table
        :table-data="tableData"
        @confirm="getTableData"
        :options="options"
    >
    </p-table>
</div>
</template>

<script>
import PTable from './index'
import {getData} from './index.service'
export default {
    name: 'demo',
    components: {PTable},
    data() {
        return {
            tableData: [],
            options:{
                //可以做一些其他表格的自定义
                columns: [
                    {
                        prop: 'a',
                        label: 'a',
                    },
                    {
                        prop: 'b',
                        label: 'b'
                    }
                ]
            }
        }
    },
    methods: {
        async getTableData(val) {
            //获取查询条件
            let params = {...val}
            const {code, data} = await getData(params)
            if(code === 200) {
                this.tableData = data
            }

        }
    }
}
</script>

<style scoped>

</style>
