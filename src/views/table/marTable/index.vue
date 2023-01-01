<template>
    <div class="content">
        <div class="form card-box">
            <el-button size="mini" type="primary" @click="getTableData">查询</el-button>
        </div>

                <div class="table_box card-box">
                    <el-table
                        :data="tableData"
                        :span-method="arraySpanMethod"
                        border
                        header-row-class-name="table_head"
                        height="275"
                        highlight-current-row
                        size="mini"
                        style="width:100%"
                    >
                        <el-table-column label="国家" min-width="110" prop="nation"></el-table-column>
                        <el-table-column label="职业" min-width="110" prop="occupation"></el-table-column>
                        <el-table-column label="性别" min-width="90" :formatter="sexFormat" prop="sex"></el-table-column>
                        <el-table-column label="技能数量" min-width="90" prop="skillNum"></el-table-column>
                    </el-table>
                </div>
                <div>{{ $store.state }}</div>
                <div>{{ $store.getters }}</div>
                <div>{{b}}</div>
                <el-button type="primary" @click="testA">mutation</el-button>
                <el-button type="primary" @click="testB">actions</el-button>
                <child :a="b" @changeA="changeA"></child>

                <el-button type="primary">{{ this.name }}</el-button>
                <el-button type="primary">{{ this.age }}</el-button>
        <div class="card-box">
            <div class="round">
                <div class="p_round">222</div>
            </div>
        </div>

    </div>
</template>

<script>
import { getUserInfo } from '@/api/table'
import { mapState } from '@/lib/store/vuex'
import Child from './child'

export default {
    name: 'index',
    components: {
        Child
    },
    data () {
        return {
            a: 3,
            b: 20,
            tableData: [],
            spanArray: {},
            spanList: ['nation', 'occupation', 'sex', 'skillNum'],
            test: [
                {
                    prop: 'nation',
                    rely: false
                },
                {
                    prop: 'sex',
                    rely: 'nation'
                }
            ]
        }
    },
    computed: {
        ...mapState(['name', 'age'])
    },
    watch: {
        a(n,o){

        }
    },
    created () {
        //this.getTableData()
    },
    mounted () {
        console.log(this.name)
        // let button = this.$refs.button
        //
        // button.addEventListener('click', () => {
        //     Promise.resolve().then(() => {
        //         console.log('微任务1')
        //     })
        //     console.log('1')
        // })
        // button.addEventListener('click', () => {
        //     Promise.resolve().then(() => {
        //         console.log('微任务2')
        //     })
        //     console.log('2')
        // })
    },
    methods: {
        async getTableData () {
            let param = {}
            const { code, data } = await getUserInfo(param)
            if (code === '200') {
                this.spanArray = this.computedSpan(this.spanList, data)
                this.tableData = data

            }
        },
        getHeadClass ({ row, rowIndex }) {
            console.log(row, rowIndex)
            return 'table_head'

        },
        arraySpanMethod ({ column, rowIndex }) {
            if (column.property === 'nation') return this.margeAction('nation', rowIndex)
            if (column.property === 'occupation') return this.margeAction('occupation', rowIndex)
            if (column.property === 'sex') return this.margeAction('sex', rowIndex)
            if (column.property === 'skillNum') return this.margeAction('skillNum', rowIndex)
        },
        computedSpan (needArr, arr) {
            let needMarge = {}
            needArr.forEach(i => {
                needMarge[i] = {
                    rowArr: [],
                    rowMargeNum: 0
                }
                let temp = needMarge[i]
                arr.forEach((item, index) => {
                    if (index === 0) {
                        temp.rowArr[temp.rowMargeNum] = 1
                        temp.rowMargeNum = 0
                    } else {
                        if (item[i] === arr[index - 1][i]) {
                            temp.rowArr[temp.rowMargeNum] += 1
                            temp.rowArr.push(0)
                        } else {
                            temp.rowMargeNum = index
                            temp.rowArr[temp.rowMargeNum] = 1
                        }
                    }
                })
            })
            return needMarge
        },
        margeAction (val, rowIndex) {
            let rowNum = this.spanArray[val].rowArr[rowIndex]
            let colNum = rowNum === 0 ? 0 : 1
            return [rowNum, colNum]
        },
        sexFormat(row, column, value, $index){

        },
        testImport () {
            console.log('设置成功')
        },
        testA () {
            this.$store.commit('syncSet', 'aaa')
        },
        testB () {
            console.log(this.b)
        },
        changeA (val) {
            this.b = val
        },
        test3 () {
            let num = 0
            aa()
            aa()

            function aa () {
                num++
                Promise.resolve().then(() => {
                    console.log(num + 'set')
                })
                console.log(num)
            }
        },

    },
}
</script>

<style lang="stylus" scoped>
.table_box >>> .table_head {
    font-size: 14px;
    font-weight: 700px;
    color: black;
    background: #e5e6eb

}

.table_box >>> .table_head th,
.table_box >>> .table_head td {
    background: none;
}


.form {
    padding: 51px 0;
    display: flex;
    margin-bottom: 16px;
    justify-content: flex-end;
    padding-right: 10px;
}

.table_box {
    padding: 15px;
}

.round {
    margin-left 300px
    width 200px
    aspect-ratio 1
    border-radius 100px
    background-color #34b9a4
    animation  remoteRound 4s linear infinite
}

@keyframes remoteRound {
    from {

    }
    100% {
        transform rotate(360deg)
    }
}

.p_round {
    animation _remoteRound 4s linear infinite
    width: fit-content;
    height: fit-content;
    margin-left 30px
    margin-top 30px
}

@keyframes _remoteRound {
    from {

    }
    100% {
        transform rotate(-360deg)
    }
}
</style>
