import Vue from 'vue'
import Vuex from './vuex/index'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		name: '测试',
		age: 12
	},
	// getters: {
	// 	setName (state) {
	// 		return state.name + 'getter'
	// 	}
	// },
	// mutations: {
	// 	syncSet(state, payload){
	// 		state.name = payload
	// 	}
	// },
	// actions: {
	// 	aSet({commit}, pay) {
	// 		setTimeout(() => {
	// 			commit('syncSet', pay)
	// 		})
	// 	}
	// }
})

export default store
