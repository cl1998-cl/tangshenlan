<template>
    <div class="container">
        <div class="card-box head">
            <img alt="暂无" src="">
            <p>
                主轴（main axis）是沿着flex元素放置的方向延伸的轴
            </p>
            <p>
                交叉轴（cross axis）是垂直于flex元素放置方向的轴
            </p>
            <p>
                设置了 display: flex 的父元素被称之为flex容器(flex container)
            </p>
            <p>
                在flex容器中表现为柔性的盒子的元素被称之为flex项(flex item)
            </p>
        </div>
        <div class="flex">


            <div class="card-box setting_box">
                <el-form
                    ref="form"
                    :model="formData"
                    class="form_flex"
                    label-width="150px">

                    <template v-for="item in option.children">
                        <div :key="item.key" class="form_item">

                            <el-form-item v-bind="item" :label="item.title">
                                <el-select
                                    v-model="formData[item.prop]"
                                    default-first-option
                                    filterable
                                    size="mini"
                                    @change="handleChange(item)"
                                >
                                    <el-option
                                        v-for="item in item.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                    </el-option>
                                </el-select>
                                <el-popover
                                    :content="item.content"
                                    placement="top-start"
                                    trigger="hover"
                                    width="200">
                                    <template slot="reference">
                                        <i class="el-icon-warning-outline"></i>
                                    </template>
                                </el-popover>
                            </el-form-item>
                        </div>
                    </template>


                </el-form>
            </div>
            <div class="card-box flex_right">
                <div :style="flexStyle" class="test_box">
                    <div class="test_item">1</div>
                    <div class="test_item">2</div>
                    <div class="test_item">3</div>
                    <div class="test_item">4</div>
                    <div class="test_item">5</div>
                    <div class="test_item">6</div>
                    <div class="test_item">7</div>
                    <div class="test_item">8</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            formData: {
                direction: 'row',
                wrap: 'wrap',
                alignItem: 'center'
            },
            option: {
                children: [
                    {
                        key: 1,
                        title: 'flex-direction',
                        prop: 'direction',
                        content: '可以指定主轴的方向，默认值为row',
                        options: [
                            {
                                label: 'row',
                                value: '指定主轴方向为横轴'
                            },
                            {
                                label: 'column',
                                value: '指定主轴方向为竖轴'
                            },
                            {
                                label: 'row-reverse',
                                value: '反转横轴'
                            },
                            {
                                label: 'column-reverse',
                                value: '反转竖轴'
                            }
                        ]
                    },
                    {
                        key: 2,
                        title: 'flex-wrap',
                        prop: 'wrap',
                        content: '行溢出处理',
                        options: [
                            {
                                label: 'wrap',
                                value: 'wrap'
                            }
                        ]
                    },
                    {
                        key: 3,
                        title: 'align-items',
                        prop: 'alignItem',
                        content: '控制flex项在交叉轴上的位置',
                        options: [
                            {
                                label: 'wrap',
                                value: 'wrap'
                            }
                        ]
                    },

                ]
            }
        }
    },
    computed: {
        flexStyle () {
            let res = {}
            const { wrap, alignItem, direction } = this.formData
            return {
                flexWrap: wrap,
                alignItem: alignItem,
                flexDirection: direction
            }
        }
    },
    methods: {
        handleChange(){
            console.log(this.formData)
        }
    }
}
</script>

<style lang="stylus" scoped>
.form_flex
    display flex
    flex-direction column

.head
    height: 200px

.flex
    height: calc(100% - 200px);
    display flex

    .flex_right
        flex 1;

.form_item
    width 100%
    display flex

    i
        margin-top: 10px

.flex_right
    height: 100%;

.setting_box
    width 400px

.test_box
    display flex
    border 12px solid rgba(0, 139, 139, 0.44)
    height: 500px;
    width: 500px;
    overflow auto

    .test_item
        height 50px
        width: 50px
        background-color: olivedrab
        text-align center
        line-height 50px
        margin-right 20px
        margin-bottom 20px

</style>
