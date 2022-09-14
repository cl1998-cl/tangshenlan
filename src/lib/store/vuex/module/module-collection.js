export default class ModuleCollection {
	constructor (options) {
		this.register([], options)
	}
	register(path, rootModule) {
		let newModule = {
			_raw: rootModule,
			state: rootModule.state,
			children: {}
		}
		//
		if(path.length === 0) {
			this.root = newModule
		}else {
		
		}
		if(rootModule.modules){
		
		}
	}
}
