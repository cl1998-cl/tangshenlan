<template>
    <div class="wrap">
    <el-button type="primary" @click="handleTest">子组件测试</el-button>
    </div>
</template>

<script>

export default {
    name: 'index',
    props: {
        test: Function
    },
    data () {
        return {
            da: 'zi'
        }
    },

    methods: {
        handleTest() {
            let a = {
                c: 'a',
                a: function() {
                    console.log(this)
                }
            }
            let b = {
                c: 'b',
                a: function(val) {
                   console.log(val)
                }
            }
            let c = function(){
                console.log(this)
            }
            c()
            c.bind(a)()
            c.apply(b, ['111'])
            c.bind(a).bind(b)()

            let index = arr.findIndex(i => i.val === val)

        },
        a(fn) {
            fn();
            fn.call(this);
            console.log(this)
        },
        edit(item, index) {
            this.flag = true;
            this.currentIndex = index;
            this.name = item.name;
            this.content = item.content
        },
        confirm() {
            //假设表格数据
            this.$set(this.tableData[this.currentIndex], 'name', this.name)
            this.$set(this.tableData[this.currentIndex], 'content', this.content)
            this.name = '';
            this.content = '';
            this.currentIndex = '';
            this.flag = false
        }


    }
}
</script>

<style lang="stylus" scoped>
.box {
    width: 200px;
    height: 100px
}

.is-disabled {
    background-color: #fafafa;
    border-color: #e4e4e4;

}
</style>
