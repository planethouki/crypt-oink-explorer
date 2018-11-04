const getInstance = async function() {

    const contracts = {};

    const abis = {
        "AuctionSeed": {
            "abi": [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        },
                        {
                            "name": "_startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_duration",
                            "type": "uint256"
                        },
                        {
                            "name": "_seller",
                            "type": "address"
                        }
                    ],
                    "name": "createAuction",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "unpause",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "bid",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "paused",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawBalance",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getAuction",
                    "outputs": [
                        {
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "name": "startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "duration",
                            "type": "uint256"
                        },
                        {
                            "name": "startedAt",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "ownerCut",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "pause",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "cancelAuctionWhenPaused",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "cancelAuction",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getCurrentPrice",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "isAuctionSeed",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "pure",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "nonFungibleContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "name": "_nftAddr",
                            "type": "address"
                        },
                        {
                            "name": "_cut",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "startingPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "endingPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "duration",
                            "type": "uint256"
                        }
                    ],
                    "name": "AuctionCreated",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "userPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "commission",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "winner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "seller",
                            "type": "address"
                        }
                    ],
                    "name": "AuctionSuccessful",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "AuctionCancelled",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event"
                }
            ],
        },
        "AuctionSell": {
            "abi": [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        },
                        {
                            "name": "_startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_duration",
                            "type": "uint256"
                        },
                        {
                            "name": "_seller",
                            "type": "address"
                        }
                    ],
                    "name": "createAuction",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "unpause",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "bid",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "lastGen0SalePrices",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "paused",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawBalance",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getAuction",
                    "outputs": [
                        {
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "name": "startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "duration",
                            "type": "uint256"
                        },
                        {
                            "name": "startedAt",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "ownerCut",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "pause",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "cancelAuctionWhenPaused",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "gen0SaleCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "isAuctionSell",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "pure",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "cancelAuction",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getCurrentPrice",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "nonFungibleContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "averageGen0SalePrice",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "name": "_nftAddr",
                            "type": "address"
                        },
                        {
                            "name": "_cut",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "startingPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "endingPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "duration",
                            "type": "uint256"
                        }
                    ],
                    "name": "AuctionCreated",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "userPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "commission",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "winner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "seller",
                            "type": "address"
                        }
                    ],
                    "name": "AuctionSuccessful",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "AuctionCancelled",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event"
                }
            ],
        },
        "EntityCore": {
            "abi": [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_interfaceID",
                            "type": "bytes4"
                        }
                    ],
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "cfoAddress",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "ceoAddress",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_address",
                            "type": "address"
                        }
                    ],
                    "name": "setDnaCoreAddress",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "GEN0_STARTING_PRICE",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "dnaCoreContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "activated",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_entityId",
                            "type": "uint256"
                        }
                    ],
                    "name": "isPregnant",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "GEN0_AUCTION_DURATION",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCEO",
                            "type": "address"
                        }
                    ],
                    "name": "setCEORequest",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "Minimalize",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCOO",
                            "type": "address"
                        }
                    ],
                    "name": "setCOORequest",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "GEN0_STARTING_PRICE_END",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_breederId",
                            "type": "uint256"
                        },
                        {
                            "name": "_seederId",
                            "type": "uint256"
                        }
                    ],
                    "name": "mateWithAuto",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "matingAllowedToAddress",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_ceo",
                            "type": "address"
                        },
                        {
                            "name": "_coo",
                            "type": "address"
                        },
                        {
                            "name": "_cfo",
                            "type": "address"
                        }
                    ],
                    "name": "setCoAddresses",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_seederId",
                            "type": "uint256"
                        },
                        {
                            "name": "_breederId",
                            "type": "uint256"
                        }
                    ],
                    "name": "bidOnAuctionSeed",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCOO",
                            "type": "address"
                        }
                    ],
                    "name": "setCOOConfirm",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "Activate",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_entityId",
                            "type": "uint256"
                        },
                        {
                            "name": "_startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_duration",
                            "type": "uint256"
                        }
                    ],
                    "name": "createAuctionSell",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawBalance",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCEO",
                            "type": "address"
                        }
                    ],
                    "name": "setCEOConfirm",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "newContractAddress",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "count",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_v2Address",
                            "type": "address"
                        }
                    ],
                    "name": "setNewAddress",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "secondsPerBlock",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_genes",
                            "type": "uint256"
                        },
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "createAndGiveEntity",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "tokensOfOwner",
                    "outputs": [
                        {
                            "name": "ownerTokens",
                            "type": "uint256[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_breederId",
                            "type": "uint256"
                        }
                    ],
                    "name": "giveBirth",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_addr",
                            "type": "address"
                        },
                        {
                            "name": "_seederId",
                            "type": "uint256"
                        }
                    ],
                    "name": "approveMating",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawAuctionBalances",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "minimal",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "entityIndexToApproved",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "cooldowns",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint32"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_entityId",
                            "type": "uint256"
                        },
                        {
                            "name": "_startingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_endingPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_duration",
                            "type": "uint256"
                        }
                    ],
                    "name": "createAuctionSeed",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_breederId",
                            "type": "uint256"
                        },
                        {
                            "name": "_seederId",
                            "type": "uint256"
                        }
                    ],
                    "name": "canMateWith",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "cooAddress",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getEntity",
                    "outputs": [
                        {
                            "name": "isBreeding",
                            "type": "bool"
                        },
                        {
                            "name": "isReady",
                            "type": "bool"
                        },
                        {
                            "name": "cooldownIndex",
                            "type": "uint256"
                        },
                        {
                            "name": "nextActionAt",
                            "type": "uint256"
                        },
                        {
                            "name": "matingWithId",
                            "type": "uint256"
                        },
                        {
                            "name": "birthTime",
                            "type": "uint256"
                        },
                        {
                            "name": "breederId",
                            "type": "uint256"
                        },
                        {
                            "name": "seederId",
                            "type": "uint256"
                        },
                        {
                            "name": "generation",
                            "type": "uint256"
                        },
                        {
                            "name": "dna",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "auctionSeedContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "Deactivate",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_genes",
                            "type": "uint256"
                        }
                    ],
                    "name": "createGen0Auction",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_sell",
                            "type": "address"
                        },
                        {
                            "name": "_seed",
                            "type": "address"
                        }
                    ],
                    "name": "setAuctionAddresses",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCFO",
                            "type": "address"
                        }
                    ],
                    "name": "setCFOConfirm",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_entityId",
                            "type": "uint256"
                        }
                    ],
                    "name": "isReadyToBreed",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "auctionSellContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_newCFO",
                            "type": "address"
                        }
                    ],
                    "name": "setCFORequest",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "entityIndexToOwner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "fallback"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "newContract",
                            "type": "address"
                        }
                    ],
                    "name": "ContractUpgrade",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "breederId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "seederId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "cooldownEndBlock",
                            "type": "uint256"
                        }
                    ],
                    "name": "Pregnant",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "approved",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "breederId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "seederId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "dna",
                            "type": "uint256"
                        }
                    ],
                    "name": "Birth",
                    "type": "event"
                }
            ]
        },
    };

    const apiKey = "6d6832b8808346ab82226925aac5509d";

    const endPoints = {
        "mainnet": "https://mainnet.infura.io/v3/",
        "ropsten": "https://ropsten.infura.io/v3/",
    };

    const searchParams = new URLSearchParams(location.search);

    let address = "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1";
    if (searchParams.has("address")) {
        address = searchParams.get("address");
        console.log(`address specification: ${address}`);
    }

    function setInfuraProvider() {
        let endPoint = `${endPoints['mainnet']}${apiKey}`;
        if (searchParams.has("network")) {
            const network = searchParams.get("network");
            if (endPoints.hasOwnProperty(network)) {
                endPoint = `${endPoints[network]}${apiKey}`;
                console.log(`network specification: ${network}`);
            } else {
                console.log(`network specification fail. use main net.`);
            }
        }
        window.web3 = new Web3(new Web3.providers.HttpProvider(endPoint));
    }

    if (searchParams.has("provider")) {
        const provider = searchParams.get("provider");
        switch (provider) {
            case "metamask":
                console.log("metamask mode");
                if (window.ethereum) {
                    window.web3 = new Web3(ethereum);
                    try {
                        await ethereum.enable();
                    } catch (error) {
                        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                        console.log("infura mode");
                        setInfuraProvider();
                    }
                } else if (window.web3) {
                    window.web3 = new Web3(web3.currentProvider);
                } else {
                    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                    console.log("infura mode");
                    setInfuraProvider();
                }
                break;
            default:
                console.log("infura mode");
                setInfuraProvider();
        }
    } else {
        console.log("infura mode");
        setInfuraProvider();
    }

    contracts['EntityCore'] = window.web3.eth.contract(abis['EntityCore'].abi).at(address);

    const auctionSellAddress = await new Promise((resolve, reject) => {
        contracts.EntityCore.auctionSellContract((error, result) => {
            if (error) { reject(error) } else { resolve(result) }
        });
    });

    const auctionSeedAddress = await new Promise((resolve, reject) => {
        contracts.EntityCore.auctionSeedContract((error, result) => {
            if (error) { reject(error) } else { resolve(result) }
        });
    });

    contracts['AuctionSell'] = window.web3.eth.contract(abis['AuctionSell'].abi).at(auctionSellAddress);
    contracts['AuctionSeed'] = window.web3.eth.contract(abis['AuctionSeed'].abi).at(auctionSeedAddress);

    return contracts;
};
