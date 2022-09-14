export default{
  state: {
    name: null,
    age: null
  },
  mutations: {
    setName(state, data) {
      state.name = data;

    }
  },
  actions: {
    setName({commit}, data) {
      commit('setName', data)
    }
  }
}