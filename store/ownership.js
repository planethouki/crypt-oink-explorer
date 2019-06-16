export const state = () => ({
  addressToTokens: {},
  lastModBlockHeight: 0
})

export const getters = {
  lastModBlockHeight(state) {
    return state.lastModBlockHeight
  },
  tokens: state => address => {
    return state.addressToTokens[address]
  }
}

export const mutations = {
  addOwnership(state, { address, tokenIds }) {
    const addressToTokens = JSON.parse(JSON.stringify(state.addressToTokens))
    addressToTokens[address] = tokenIds
    state.addressToTokens = addressToTokens
  },
  setLastMod(state, { height }) {
    state.lastModBlockHeight = height
  }
}

export const actions = {
  async doUpdate({ commit, state }, { address }) {
    if (state.lastModBlockHeight === 0) {
      const block = await this.$axios.$get(
        'https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json'
      )
      commit('setLastMod', { height: block.block })
    }
    if (state.addressToTokens[address.toLowerCase()] === undefined) {
      const tokens = await this.$axios.$get(
        `https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownertotokens/${address.toLowerCase()}.json`
      )
      commit('addOwnership', { address, tokenIds: tokens.reverse() })
    }
  }
}
