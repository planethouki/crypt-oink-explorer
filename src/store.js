import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalSupply: 0,
  },
  mutations: {
    setTotalSupply(state, payload) {
      state.totalSupply = payload.totalSupply;
    },
  },
  actions: {
    doUpdateTotalSpply({ commit }, totalSupply) {
      commit('setTotalSupply', { totalSupply });
    },
  },
});
