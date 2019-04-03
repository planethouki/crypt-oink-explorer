import Vue from 'vue';
import Web3 from 'web3';

const host = 'https://mainnet.infura.io/v3/6d6832b8808346ab82226925aac5509d';

const provider = new Web3.providers.HttpProvider(host);

process.versions = { node: '10.8.0' };

const web3 = new Web3(provider);
// const web3 = new Web3(host);


const abis = {
  Auction: {
    abi: [
      {
        constant: true,
        inputs: [
          {
            name: '_tokenId',
            type: 'uint256',
          },
        ],
        name: 'getAuction',
        outputs: [
          {
            name: 'seller',
            type: 'address',
          },
          {
            name: 'startingPrice',
            type: 'uint256',
          },
          {
            name: 'endingPrice',
            type: 'uint256',
          },
          {
            name: 'duration',
            type: 'uint256',
          },
          {
            name: 'startedAt',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_tokenId',
            type: 'uint256',
          },
        ],
        name: 'getCurrentPrice',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  EntityCore: {
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            name: 'owner',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_id',
            type: 'uint256',
          },
        ],
        name: 'getEntity',
        outputs: [
          {
            name: 'isBreeding',
            type: 'bool',
          },
          {
            name: 'isReady',
            type: 'bool',
          },
          {
            name: 'cooldownIndex',
            type: 'uint256',
          },
          {
            name: 'nextActionAt',
            type: 'uint256',
          },
          {
            name: 'matingWithId',
            type: 'uint256',
          },
          {
            name: 'birthTime',
            type: 'uint256',
          },
          {
            name: 'breederId',
            type: 'uint256',
          },
          {
            name: 'seederId',
            type: 'uint256',
          },
          {
            name: 'generation',
            type: 'uint256',
          },
          {
            name: 'dna',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
};

const contracts = {};
const address = '0x1a94fce7ef36bc90959e206ba569a12afbc91ca1';
const auctionSellAddress = '0xa2156f24711a631e92e65dc114cf172065ddd49b';
const auctionSeedAddress = '0xcf20f1cc6efa9a05ae7eff8a0c6331f3680899cf';
contracts.EntityCore = new web3.eth.Contract(abis.EntityCore.abi, address);
contracts.AuctionSell = new web3.eth.Contract(abis.Auction.abi, auctionSellAddress);
contracts.AuctionSeed = new web3.eth.Contract(abis.Auction.abi, auctionSeedAddress);


Vue.prototype.$contracts = contracts;
Vue.prototype.$web3 = web3;
