import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: null
  },
  mutations: {
    ADDRESS(state,value) {
      state.address = value
    }
  },
  actions: {
    address(context,value){
      context.commit('ADDRESS',value)
    }
  },
  modules: {
  }
})
