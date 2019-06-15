export const state = () => ({
  currentTons: [],
  asyncTonsCache: []
})

export const getters = {
  currentTons(state) {
    return state.currentTons
  },
  asyncTonsCache(state) {
    return state.asyncTonsCache
  }
}

export const mutations = {
  setTons(state, { tons }) {
    state.currentTons = tons
  },
  pushAsyncTon(state, { asyncTon }) {
    state.asyncTonsCache.push(asyncTon)
  }
}

export const actions = {
  updateTonsFromTokenIds({ state, commit }, { tokenIds }) {
    const tons = tokenIds.map(tokenId => ({
      id: tokenId,
      imgSrc: this.$tonImg(tokenId)
    }))
    commit('setTons', { tons })
    tons
      .filter(ton => {
        return state.asyncTonsCache.findIndex(t => t.id === ton.id) < 0
      })
      .map(ton => {
        Promise.all([
          this.$contracts.EntityCore.methods.getEntity(ton.id).call(),
          this.$contracts.EntityCore.methods.ownerOf(ton.id).call()
        ]).then(results => {
          const entity = results[0]
          const owner = results[1]
          const asyncTon = {
            id: ton.id,
            isBreeding: entity.isBreeding,
            isReady: entity.isReady,
            cooldownIndex: entity.cooldownIndex.toString(),
            nextActionAt: entity.nextActionAt.toString(),
            matingWithId: entity.matingWithId.toString(),
            birthTime: entity.birthTime.toString(),
            breederId: entity.breederId.toString(),
            seederId: entity.seederId.toString(),
            generation: entity.generation.toString(),
            dna: this.$web3.utils.toHex(entity.dna),
            owner: owner
          }
          commit('pushAsyncTon', { asyncTon })
        })
      })
  }
}
