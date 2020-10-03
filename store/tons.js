/* eslint-disable prettier/prettier */
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
        const apiCalls = [
          this.$axios.$get(`/tons/${ton.id}`),
          this.$axios.$get(`/shop/${ton.id}`),
          this.$axios.$get(`/breed/${ton.id}`)
        ].map((call) => {
          return call.then((data) => {
            return Object.keys(data).length === 0 ? null : data
          })
        })
        Promise.all(apiCalls)
          .then(([tons, shop, breed]) => {
          const asyncTon = {
            id: ton.id,
            isBreeding: tons.isBreeding,
            isReady: tons.isReady,
            cooldownIndex: tons.cooldownIndex,
            nextActionAt: tons.nextActionAt,
            matingWithId: tons.matingWithId,
            birthTime: tons.birthTime,
            breederId: tons.breederId,
            seederId: tons.seederId,
            generation: tons.generation,
            dna: tons.dna,
            owner: tons.owner
          }
          if (shop) {
            asyncTon.sell = {
              seller: shop.seller,
              startingPrice: shop.startingPrice,
              endingPrice: shop.endingPrice,
              duration: shop.duration,
              startedAt: shop.startedAt,
              shown: true,
              price: shop.price
            }
          } else {
            asyncTon.sell = {
              shown: false
            }
          }
          if (breed) {
            asyncTon.seed = {
              seller: breed.seller,
              startingPrice: breed.startingPrice,
              endingPrice: breed.endingPrice,
              duration: breed.duration,
              startedAt: breed.startedAt,
              shown: true,
              price: breed.price
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
