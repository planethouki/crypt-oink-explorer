import * as ethers from 'ethers'
import { abi } from './abi'
import { address } from './address'

const provider = new ethers.providers.InfuraProvider("homestead", process.env.INFURA)

const entityCore = new ethers.Contract(address.EntityCore, abi.EntityCore.abi, provider)
const auctionSell = new ethers.Contract(address.AuctionSell, abi.Auction.abi, provider)
const auctionSeed = new ethers.Contract(address.AuctionSeed, abi.Auction.abi, provider)

export {
  entityCore,
  auctionSell,
  auctionSeed
}
