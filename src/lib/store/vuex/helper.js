import { isObject } from '@/lib/store/vuex/until'

export const mapState = normalizeNamespace((namespace, states) => {
	const res = {}
	normalizeMap(states).forEach(({key, val}) => {
		res[key] = function mappedState () {
			console.log(this, '调用')
			let state = this.$store.state
			// if (namespace) {
			// 	const module = getModuleByNamespace(this.$store, 'mapState', namespace)
			// 	if (!module) {
			// 		return
			// 	}
			// 	state = module.context.state
			// 	getters = module.context.getters
			// }
			return state[val]
		}
	})
	console.log('res', res)
	return res
})

function isValidMap (map) {
	return Array.isArray(map) || isObject(map)
}

function normalizeMap (map) {
	if (!isValidMap(map)) return []
	console.log(map, Array.isArray(map))
	return map.map(key => {
			return {
				key: key,
				val: key
			}
		})
}

function normalizeNamespace (fn) {
	return (namespace, map) => {
		if (typeof namespace !== 'string') {
			map = namespace
			namespace = ''
		} else if (namespace.charAt(namespace.length - 1) !== '/') {
			namespace += '/'
		}
		return fn(namespace, map)
	}
}

function getModuleByNamespace (store, helper, namespace) {
	return store._modulesNamespaceMap[namespace]
}
