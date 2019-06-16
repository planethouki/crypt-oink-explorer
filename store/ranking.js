export const state = () => ({
  ownerRanking: [],
  lastModBlockHeight: 0
})

export const getters = {
  lastModBlockHeight(state) {
    return state.lastModBlockHeight
  },
  ranking(state) {
    return state.ownerRanking
  }
}

export const mutations = {
  setRanking(state, { ranking }) {
    state.ownerRanking = ranking
  },
  setLastMod(state, { height }) {
    state.lastModBlockHeight = height
  }
}

export const actions = {
  async doUpdate({ commit, state }) {
    if (state.lastModBlockHeight === 0) {
      const block = await this.$axios.$get(
        'https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json'
      )
      commit('setLastMod', { height: block.block })
    }
    if (state.ownerRanking.length === 0) {
      const ranking = await this.$axios.$get(
        'https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownerRanking.json'
      )
      const addBar = ranking.map((item, index, items) => ({
        order: item.order,
        owner: item.owner,
        count: item.count,
        bar: Math.floor((item.count / items[0].count) * 100)
      }))
      commit('setRanking', { ranking: addBar })
    }
  }
}
