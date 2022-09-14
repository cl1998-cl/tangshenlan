import { applyMixin } from './mixin'

let Vue

export class Store {
	constructor (options = {}) {
		if (!Vue && typeof window !== void 0 && window.Vue) {
			install(window.Vue)
		}
		this._vm = new Vue({
			data () {
				return {
					$$state: options.state
				}
			}
		})
		
	}
	
	get state () {
		return this._vm._data.$$state
		
	}
}

export function install (_Vue) {
	if (Vue && Vue === _Vue) return
	Vue = _Vue
	applyMixin(Vue)
}
