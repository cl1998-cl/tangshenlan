<template>
<div class="table-box">
    <el-table
        :data="tableData"
        style="width: 100%">
        <template v-for="(item, index) in options.columns">
            <template v-if="!item.isHidden">
                <el-table-column
                    v-if="true"
                    v-bind="item"
                    :key="index"
                >
                    <template slot="header" v-if="!item.hideIcon" slot-scope="{row,$index}">
                        <div @click.stop="openSearch(item)">
                            <label>{{item.label}}</label>
                            <i :class="item.icon ? item.icon : 'el-icon-info'"></i>
                        </div>
                    </template>
                </el-table-column>
            </template>
        </template>
    </el-table>

    <el-dialog
        :title='this.curColumnProp'
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-input v-model="inputText" placeholder="请输入"></el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: 'index',
    props: {
        tableData: Array,
        options: Object
    },
    data() {
        return {
            curColumnProp: '',
            inputText: '',
            dialogVisible: false,
        }
    },
    methods: {
        openSearch({prop}) {
            this.curColumnProp = prop;
            this.dialogVisible = true;
        },
        handleClose() {
            this.curColumnProp = '';
            this.inputText = '';
            this.dialogVisible = false;
        },
        confirm() {
            //校验通过
            let val = {
                [this.curColumnProp]: this.inputText
            }
            this.$emit('confirm',val)
            this.handleClose()
        }
    }
}
</script>

<style scoped>

</style>
