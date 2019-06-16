export const state = () => ({
  currentTons: [],
  asyncTonsCache: {}
})

export const getters = {
  currentTons(state) {
    return state.currentTons
  },
  asyncTonsCache(state) {
    return state.asyncTonsCache
  },
  tonsLoaded(state) {
    const tonsNotFond = state.currentTons.filter(
      t => state.asyncTonsCache[t.id] === undefined
    )
    return tonsNotFond.length === 0
  }
}

export const mutations = {
  setTons(state, { tons }) {
    state.currentTons = tons
  },
  setAsyncTon(state, { asyncTon, id }) {
    const newAsyncTonsCache = JSON.parse(JSON.stringify(state.asyncTonsCache))
    newAsyncTonsCache[id] = asyncTon
    state.asyncTonsCache = newAsyncTonsCache
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
        return state.asyncTonsCache[ton.id] === undefined
      })
      .map(ton => {
        Promise.all([
          this.$contracts.EntityCore.methods.getEntity(ton.id).call(),
          this.$contracts.EntityCore.methods.ownerOf(ton.id).call(),
          this.$contracts.AuctionSell.methods.getAuction(ton.id).call(),
          this.$contracts.AuctionSell.methods.getCurrentPrice(ton.id).call(),
          this.$contracts.AuctionSeed.methods.getAuction(ton.id).call(),
          this.$contracts.AuctionSeed.methods.getCurrentPrice(ton.id).call()
        ]).then(results => {
          const entity = results[0]
          const owner = results[1]
          const sell = results[2]
          const sellPrice = results[3]
          const seed = results[4]
          const seedPrice = results[5]
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
          if (sellPrice) {
            asyncTon.sell = {
              seller: sell.seller,
              startingPrice: sell.startingPrice.toString(),
              endingPrice: sell.endingPrice.toString(),
              duration: sell.duration.toString(),
              startedAt: sell.startedAt.toString(),
              shown: true,
              price: sellPrice.toString()
            }
          } else {
            asyncTon.sell = {
              shown: false
            }
          }
          if (seedPrice) {
            asyncTon.seed = {
              seller: seed.seller,
              startingPrice: seed.startingPrice.toString(),
              endingPrice: seed.endingPrice.toString(),
              duration: seed.duration.toString(),
              startedAt: seed.startedAt.toString(),
              shown: true,
              price: seedPrice.toString()
            }
          } else {
            asyncTon.seed = {
              shown: false
            }
          }
          commit('setAsyncTon', { asyncTon, id: ton.id })
        })
      })
  }
}
