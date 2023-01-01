<template>
    <div class="container">
        <ve-table
            :cell-span-option="cellSpanOption"
            :cell-style-option="cellStyleOption"
            :columns="columns"
            :footer-data="footerData"
            :max-height="300"
            :table-data="tableData"
            border-y
            fixed-header
            rowKeyFieldName="rowKey"
            id="tt"
        />
        <el-button type="primary" @click="handleExport">导出</el-button>
    </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
    name: 'index',
    data () {
        return {
            columns: [
                { field: 'name', key: 'a', title: 'Name', align: 'center' },
                { field: 'date', key: 'b', title: 'Date', align: 'left' },
                {
                    field: 'hobby',
                    key: 'c',
                    title: 'Hobby',
                    align: 'center',
                },
                {
                    field: 'address',
                    key: 'd',
                    title: 'Address',
                    align: 'left',
                },
            ],
            tableData: [],
            footerData: [],
            cellStyleOption: {
                bodyCellClass: ({ row, column, rowIndex }) => {
                    if ([2, 5].includes(rowIndex)) {
                        return 'tableAAA'
                    }
                }
            },
            cellSpanOption: {
                bodyCellSpan: this.bodyCellSpan,
            },
        }
    },
    methods: {
        initTableData () {
            let data = []
            for (let i = 0; i < 6; i++) {
                if (i === 2) {
                    data.push({
                        rowKey: i,
                        name: '汇总1',
                        hobby: '习惯',
                        address: '哈哈'
                    })
                } else if (i === 5) {
                    data.push({
                        rowKey: i,
                        name: '汇总2',
                        hobby: '汉字',
                        address: '地址'
                    })
                } else {
                    data.push({
                        rowKey: i,
                        name: i,
                        date: i,
                        hobby: i,
                        address: i,
                    })
                }
            }
            this.tableData = data
        },
        bodyCellSpan ({ row, column, rowIndex }) {
            if (rowIndex === 2 || rowIndex === 5) {
                if (column.field === 'name') {
                    return {
                        rowspan: 1,
                        colspan: 2,
                    }
                }
                // does not need to be rendered
                else if (column.field === 'date') {
                    return {
                        rowspan: 0,
                        colspan: 0,
                    }
                }
            }
        },

        handleExport () {
            this.outputXLSX('王五的成绩表', '.container #tt', this)
        },
        outputXLSX (filename, selector, _this) {
            /*
             引入 file-saver 和 xlsx 插件:
             import FileSaver from "file-saver";
             import XLSX from "xlsx";

             传参：
             filename  文件名
             selector  dom
             _this     组件实例 this

             导出内容：在table表格里面展示的内容
             */
            const wb = XLSX.utils.table_to_book(document.querySelector(selector), {
                raw: true,
            })

            const wbout = XLSX.write(wb, {
                bookType: 'xlsx',
                bookSST: false,
                type: 'array',
            })
            try {
                FileSaver.saveAs(
                    new Blob([wbout], { type: 'application/octet-stream' }),
                    filename + '.xlsx'
                )
                if (_this) _this.$message.success('导出成功') //导出成功的提示
            } catch (e) {
                if (typeof console !== 'undefined') console.log(e, wbout)
            }
            return wbout
        },

    },
    created () {
        this.initTableData()
    },
}
</script>

<style>
.tableAAA {
    background-color: #2196f3 !important;
    color: white !important;
    font-size: 16px !important;
    font-weight: 550 !important;
}
</style>
