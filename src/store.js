import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalSupply: 0,
    type: 'card',
  },
  mutations: {
    setTotalSupply(state, payload) {
      state.totalSupply = payload.totalSupply;
    },
    setType(state, payload) {
      state.type = payload.type;
    },
  },
  actions: {
    doUpdateTotalSpply({ commit }, totalSupply) {
      commit('setTotalSupply', { totalSupply });
    },
    doUpdateType({ commit }, type) {
      commit('setType', { type });
    },
  },
});
