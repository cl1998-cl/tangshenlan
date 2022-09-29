class Vue{
	constructor (options) {
		this.$options = options || {}
		this.$data = options.data
		this.$el = typeof options.el === 'string'? document.querySelector(options.el) : options.el
		
		this._proxyData(this.$data)
		new Observer(this.$data)
		new Compiler(this)
	}
	_proxyData(data){
		Object.keys(data).forEach(key => {
			Object.defineProperty(this, key, {
				enumerable: true,
				configurable: true,
				get(){
					return data[key]
				},
				set(n){
					if(n === data[key]) return
					data[key] = n
				}
			})
		})
	}
}
class Observer{
	constructor (data) {
		this.walk(data)
	}
	walk(data){
		if(!data || typeof data !== 'object'){
			return
		}
		Object.keys(data).forEach(key => {
			this.defineReactive(data, key, data[key])
		})
		
	}
	defineReactive(obj, key, val){
		let that = this
		let dep = new Dep()
		this.walk(val)
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get(){
				Dep.target && dep.addSub(Dep.target)
				return val
			},
			set(n){
				debugger
				if(n === val) return
				val = n
				that.walk(val)
				dep.notify()
			}
		})
	}
}
class Compiler{
	constructor (vm) {
		this.el = vm.$el
		this.vm = vm
		this.compile(this.el)
	}
	isDirective(attrName){
		return attrName.startsWith('v-')
	}
	isTextNode(node){
		return node.nodeType === 3
	}
	isElementNode(node){
		return node.nodeType === 1
	}
	compile(el){
		let childNodes = [...el.childNodes]
		childNodes.forEach(node => {
			if(this.isTextNode(node)){
				this.compileText(node)
			}else if(this.isElementNode(node)){
				this.compileElement(node)
			}
			
			if(node.childNodes && node.childNodes.length){
				this.compile(node)
			}
		})
		
	}
	compileText(node){
		let reg = /\{\{(.+?)\}\}/
		let value = node.textContent
		if(reg.test(value)){
			let key = RegExp.$1.trim()
			node.textContent = value.replace(reg, this.vm[key])
			
			new Watcher(this.vm, key, newValue => {
				node.textContent = newValue
			})
		}
	}
	compileElement(node){
		[...node.attributes].forEach(attr => {
			let attrName = attr.name
			if(this.isDirective(attrName)){
				attrName = attrName.substr(2)
				let key = attr.value
				this.update(node, key, attrName)
			}
		})
	}
	update(node, key, attrName){
		let updateFn = this[attrName + 'Updater']
		updateFn && updateFn.call(this, node, this.vm[key], key)
	}
	modelUpdater(node, value, key){
		node.value = value
		new Watcher(this.vm, key, newValue => {
			this.vm[key] = newValue
		})
		node.addEventListener('input', () => {
			this.vm[key] = node.value
		})
	}
	textUpdater(node, value, key){
		node.textContent = value
		new Watcher(this.vm, key, n => {
			node.textContent = n
		})
	}
}
class Dep{
	constructor () {
		this.subs = []
	}
	addSub(watcher){
		this.subs.push(watcher)
	}
	notify(){
		let copys = this.subs.slice()
		for(let i = 0; i < copys.length; i++){
			copys[i].update()
		}
	}
}
class Watcher{
	constructor (vm, key, cb) {
		this.vm = vm
		this.key = key
		this.cb = cb
		
		Dep.target = this
		this.oldValue = vm[key]
		Dep.target = null
	}
	update(){
		let newValue = this.vm[this.key]
		if(this.oldValue === newValue) return
		this.cb(newValue)
	}
}


