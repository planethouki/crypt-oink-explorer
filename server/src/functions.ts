import * as ethers from 'ethers'
import * as datefns from 'date-fns'
import * as contracts from './contracts'

const getAuction = (instance) => (tokenId) => {
  return instance.getAuction(tokenId).then((data) => {
    return {
      seller: data.seller,
      startingPrice: ethers.utils.formatEther(data.startingPrice),
      endingPrice: ethers.utils.formatEther(data.endingPrice),
      duration: data.duration.toNumber(),
      startedAt: data.startedAt.toNumber(),
      startedAtGMT: datefns.lightFormat(datefns.fromUnixTime(data.startedAt.toNumber()), 'yyyy-MM-dd HH:mm:ss'),
    }
  }).catch((e) => {
    if (e.code === 'CALL_EXCEPTION') {
      return {}
    } else {
      throw e
    }
  })
}

const getCurrentPrice = (instance) => (tokenId) => {
  return instance.getCurrentPrice(tokenId).then((data) => {
    return {
      price: ethers.utils.formatEther(data)
    }
  }).catch((e) => {
    if (e.code === 'CALL_EXCEPTION') {
      return {}
    } else {
      throw e
    }
  })
}

export function totalSupply() {
  return contracts.entityCore.totalSupply().then((data) => {
    return {
      totalSupply: data.toNumber()
    }
  })
}

export function ownerOf(tokenId) {
  return contracts.entityCore.ownerOf(tokenId).then((data) => {
    return {
      owner: data
    }
  })
}

export function getEntity(tokenId) {
  return contracts.entityCore.getEntity(tokenId).then((data) => {
    return {
      isBreeding: data.isBreeding,
      isReady: data.isReady,
      cooldownIndex: data.cooldownIndex.toNumber(),
      nextActionAt: data.nextActionAt.toNumber(),
      matingWithId: data.matingWithId.toNumber(),
      birthTime: data.birthTime.toNumber(),
      birthTimeGMT: datefns.lightFormat(datefns.fromUnixTime(data.birthTime.toNumber()), 'yyyy-MM-dd HH:mm:ss'),
      breederId: data.breederId.toNumber(),
      seederId: data.seederId.toNumber(),
      generation: data.generation.toNumber(),
      dna: data.dna.toHexString()
    }
  })
}

export function getAuctionSell(tokenId) {
  return getAuction(contracts.auctionSell)(tokenId)
}
export function getAuctionSeed(tokenId) {
  return getAuction(contracts.auctionSeed)(tokenId)
}
export function getCurrentPriceSell(tokenId) {
  return getCurrentPrice(contracts.auctionSell)(tokenId)
}
export function getCurrentPriceSeed(tokenId) {
  return getCurrentPrice(contracts.auctionSeed)(tokenId)
}
