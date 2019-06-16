export const state = () => ({
  totalSupply: 0,
  type: 'card',
  perPage: 50,
  tabs: [
    {
      id: 'card',
      text: 'Card',
      icon: 'th-large'
    },
    {
      id: 'list',
      text: 'List',
      icon: 'th-list'
    }
  ]
})

export const getters = {
  totalSupply(state) {
    return state.totalSupply
  },
  type(state) {
    return state.type
  },
  perPage(state) {
    return state.perPage
  },
  tabs(state) {
    return state.tabs
  }
}

export const mutations = {
  setTotalSupply(state, { totalSupply }) {
    state.totalSupply = totalSupply
  },
  setType(state, { type }) {
    state.type = type
  }
}

export const actions = {
  async doUpdateTotalSupply({ commit }) {
    const totalSupply = await this.$contracts.EntityCore.methods
      .totalSupply()
      .call()
      .then(result => {
        return result.toNumber()
      })
    console.log('totalSupply: ', totalSupply)
    commit('setTotalSupply', { totalSupply })
  },
  async doUpdateTotalSupplyIfNotSet({ commit, state }) {
    if (state.totalSupply > 0) return
    const totalSupply = await this.$contracts.EntityCore.methods
      .totalSupply()
      .call()
      .then(result => {
        return result.toNumber()
      })
    console.log('totalSupply: ', totalSupply)
    commit('setTotalSupply', { totalSupply })
  },
  doUpdateType({ commit }, type) {
    commit('setType', { type })
  }
}
