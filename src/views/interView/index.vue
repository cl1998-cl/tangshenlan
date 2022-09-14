<template>
    <div class="content">
        <div class="card-box content">
            <el-tree
                :data="treeData"
                :expand-on-click-node="false"
                :render-content="renderContent"
                node-key="id"
            >
            </el-tree>
            <el-button size="mini" type="primary" @click="run">启动</el-button>
            <el-button size="mini" type="primary" @click="percentage = 0">归0</el-button>
            <el-progress :percentage="percentage" type="circle"></el-progress>
            <canvas ref="draw" height="30" width="100" @click="getCode">draw</canvas>
            <canvas ref="clock" height="400" width="400"></canvas>
            <canvas ref="test" height="100" width="100"></canvas>
            <test :test="a" ref="test"></test>

        </div>
    </div>
</template>

<script>
import Img from '../../assets/img/clock_date.png'
class TreeItem extends Object {
    constructor (text, id, children, placeholder = '请填写', icon = 'el-icon-menu') {
        super()
        this.icon = icon
        this.placeholder = placeholder
        this.text = text
        this.id = id
        this.children = children
    }
}
import Test from '../dom/index'
let tr = () => {
    let treeItem = new TreeItem('一级', 0, [])
    for (let i = 0; i < 3; i++) {
        let tr = new TreeItem(i + '子级', i + 100)
        treeItem.children.push(tr)
    }
    return [treeItem]
}
const PI = Math.PI

export default {
    components: {
       Test
    },
    data () {
        return {
            treeData: tr(),
            percentage: 0,
            form: {},
             qq : {
                a: 1,
                b: function() {
                    //aaa
                },
                 c: undefined,
                 d: null,
                 e: '5'
            }
        }
    },
    mounted () {
        this.getClock()
        this.$refs.test.a(this.a)
    },
    watch: {},
    methods: {
        a() {
            console.log('this', this)
        },
        test () {
            let now = Date.now()
            let total = 500000000
            let ul = this.$refs.ulRef
            let once = 2000
            let page = total / once
            let index = 0

            function loop (currentTotal, currentIndex) {
                if (currentTotal <= 0) return false
                let pageCount = Math.min(currentTotal, once)
                window.requestAnimationFrame(() => {
                    let fragment = document.createDocumentFragment()
                    for (let i = 0; i < pageCount; i++) {
                        let li = document.createElement('li')
                        li.innerText = ~~(Math.random() * total)
                        fragment.appendChild(li)
                    }
                    ul.appendChild(fragment)
                    loop(currentTotal - pageCount, currentIndex + pageCount)
                })
            }

            loop(total, index)


            this.$nextTick(() => {

            })
            setTimeout(() => {

            }, 0)
        },
        show () {
            this._loading.show()
            setTimeout(() => {
                this._loading.hide()
            }, 2000)
        },
        renderContent (h, { node, data, store }) {

            return h(
                'span',
                {
                    class: 'custom-tree-node',
                },
                [
                    h(
                        'el-input',
                        {
                            attrs: {
                                value: data.text
                            },
                            props: {
                                placeholder: data.placeholder,
                                suffixIcon: data.icon,
                                size: 'mini',
                                // value: data.text
                            },
                            on: {
                                input: function (e) {
                                    data.text = e
                                }
                            }
                        }
                    )
                ]
            )
        },
        animate () {
            let that = this

            function add () {
                that.percentage += 0.1
            }

            requestAnimationFrame(add, 50)
        },
        draw () {
            let drawing = this.$refs.draw
            // let imgURL = drawing.toDataURL("image/png");
            // let img = document.createElement('img');
            // img.src = imgURL;
            // document.body.append(img)
            // console.log(img)

            let ctx = drawing.getContext('2d')
            // ctx.fillStyle = "#ff0000";
            // ctx.fillRect(10, 10, 50,50);
            // ctx.fillStyle = 'rgba(0,0,255,.5)';
            // ctx.fillRect(30,30,50,50);
            // ctx.clearRect(40,40,10,10);

            ctx.beginPath()
            ctx.arc(100, 100, 99, 0, 2 * Math.PI, false)
            ctx.moveTo(194, 100)
            ctx.arc(100, 100, 94, 0, 2 * Math.PI, false)
            //ctx.translate(100, 100);
            ctx.moveTo(100, 100)
            ctx.lineTo(185, 120)
            ctx.moveTo(100, 100)
            ctx.lineTo(35, 100)
            ctx.stroke()

            ctx.font = 'bold 14px Arial'
            ctx.textAlign = 'middle'
            ctx.textBaseline = 'middle'
            ctx.fillText('12', 100, 20)
        },
        getColor () {
            return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        },
        getRandom (a, b = 0) {
            let max = a
            let min = b
            if (a < b) {
                max = b
                min = a
            }
            let cc
            cc = Math.floor(Math.random() * (max - min)) + min
            return cc
        },
        getCode () {
            let num = 4
            let drawing = this.$refs.draw
            let ctx = drawing.getContext('2d')
            if (ctx) {

                let width = ctx.canvas.width
                let height = ctx.canvas.height
                ctx.clearRect(0, 0, width, height)
                ctx.lineWidth = 2
                for (let i = 0; i < 100; i++) {
                    ctx.beginPath()
                    let x = this.getRandom(width - 2, 0)
                    let y = this.getRandom(height - 2, 0)

                    ctx.moveTo(x, y)
                    ctx.lineTo(x + 1, y + 1)
                    ctx.strokeStyle = this.getColor()
                    ctx.stroke()
                }
                for (let i = 0; i < 10; i++) {
                    ctx.beginPath()

                    let x = this.getRandom(width - 2, 0)
                    let y = this.getRandom(height - 2, 0)

                    let w = this.getRandom(width - x)
                    let h = this.getRandom(height - y)

                    ctx.moveTo(x, y)
                    ctx.lineTo(x + w, y + h)
                    ctx.strokeStyle = this.getColor()
                    ctx.stroke()
                }
                let strContainer = 'abcdefghijkmnpqrstuvwxyz2345678ABCDEFGHJKLMNPQRSTUVWXYZ'
                ctx.font = width / 4 + 'px 微软雅黑'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                let str = ''
                for (let i = 0; i < 4; i++) {
                    ctx.beginPath()
                    ctx.fillStyle = '#f00'
                    let word = strContainer[this.getRandom(strContainer.length, 0)]
                    let w = width / num

                    let left = this.getRandom(i * w + width / 5, (i + 1) * w - width / 5)
                    let top = this.getRandom(height / 2 - 10, height / 2 + 10)
                    ctx.fillText(word, left, top)
                    ctx.stroke()

                }
            }
        },
        getClock () {
            let clock = this.$refs.clock
            let ctx = clock.getContext('2d')
            if (ctx) {
                ctx.translate(200, 200)
                ctx.save()




                function mill() {
                    ctx.clearRect(-200,-200,400,400)
                    ctx.restore()

                    ctx.beginPath()
                    ctx.lineWidth = 24
                    ctx.arc(0, 0, 100, 0, PI * 2)
                    ctx.strokeStyle = '#B5876B'
                    ctx.stroke()
                    ctx.closePath()

                    ctx.beginPath()
                    ctx.lineWidth = 7
                    ctx.fillStyle = '#E5DCD9'
                    ctx.moveTo(90, 0)
                    ctx.arc(0, 0, 90, 0, PI * 2)
                    ctx.stroke()
                    ctx.closePath()

                    ctx.beginPath()
                    ctx.fillStyle = '#543F3A'
                    ctx.moveTo(83, 0)
                    ctx.arc(0, 0, 83, 0, PI * 2)
                    ctx.fill()
                    ctx.closePath()

                    for (let i = 0; i < 60; i++) {
                        let h = i % 5 === 0 ? 74 : 77
                        if (i !== 0) {
                            ctx.rotate(PI / 30)
                        }
                        ctx.beginPath()
                        ctx.lineWidth = 1
                        ctx.strokeStyle = i % 5 === 0 ? '#e5e7e7' : '#727374'
                        ctx.moveTo(0, 82)
                        ctx.lineTo(0, h)
                        ctx.stroke()
                        ctx.closePath()
                    }
                    ctx.restore()

                    for (let i = 0; i < 12; i++) {
                        ctx.beginPath()
                        ctx.fillStyle = '#FFF'
                        ctx.strokeStyle = '#B39D95'
                        if (i % 3 === 0) {
                            if (i === 0 || i === 3) {
                                ctx.strokeRect(-4, 50, 8, 20)
                                ctx.fillRect(-4, 50, 8, 20)
                                ctx.stroke()
                            } else if (i === 6) {
                                ctx.moveTo(-8, 70)
                                ctx.lineTo(8, 70)
                                ctx.lineTo(0, 50)
                                ctx.fill()
                                ctx.stroke()
                            } else if (i === 9) {
                                let img = new Image(20,20)
                                img.src = Img
                                img.onload = function () {
                                    ctx.drawImage(img, 40, -10, this.width, this.height)
                                }
                                ctx.globalCompositeOperation = 'color-dodge'
                                //暂时做不出这种效果
                                // ctx.fillRect(-7, 43, 10, 10)
                                // ctx.stroke()

                            }
                        } else {
                            ctx.arc(0, 64, 8, 0, PI * 2)
                            ctx.fill()
                            ctx.stroke()
                        }
                        ctx.rotate(PI / 6)
                        ctx.closePath()
                    }
                    ctx.restore()



                    // ctx.beginPath()
                    // ctx.fillStyle = '#fff'
                    // ctx.moveTo(0, 4)
                    // ctx.arc(0,0,3,0,PI*2);
                    // ctx.fill()
                    // ctx.closePath()

                    // ctx.beginPath()
                    // ctx.strokeStyle = '#fff'
                    // ctx.lineWidth = 4
                    // ctx.moveTo(0,5)
                    // ctx.lineTo(0,-20)
                    // ctx.stroke()
                    // ctx.closePath()
                    //
                    // ctx.beginPath()
                    // ctx.lineWidth = 2
                    // ctx.moveTo(0,8)
                    // ctx.lineTo(0,-28)
                    // ctx.stroke()
                    // ctx.closePath()


                    // let date = new Date()
                    // let ss = date.getSeconds()
                    // ctx.rotate(PI/30*ss)
                    // ctx.beginPath()
                    // ctx.lineWidth = 1
                    // ctx.moveTo(0,12)
                    // ctx.lineTo(0,-35)
                    // ctx.stroke()
                    // ctx.closePath()
                }
                setInterval(mill, 1000)


            }
        },

    },
}
</script>

<style lang="stylus" scoped>
.content {
    height: 670px;
    background-size: cover;
}
/deep/ .el-tree  .el-tree-node{
    margin-top 5px
}

</style>
