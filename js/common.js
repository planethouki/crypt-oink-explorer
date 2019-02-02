const getInstance = async function() {

    const contracts = {};

    const abis = {
        "Auction": {
            "abi": [
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
            ],
        },
        "EntityCore": {
            "abi": [
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
            ]
        },
    };

    const apiKey = "6d6832b8808346ab82226925aac5509d";

    const endPoints = {
        "mainnet": "https://mainnet.infura.io/v3/",
    };

    const searchParams = new URLSearchParams(location.search);


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

    const address = "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1";
    contracts['EntityCore'] = window.web3.eth.contract(abis['EntityCore'].abi).at(address);

    const auctionSellAddress = "0xa2156f24711a631e92e65dc114cf172065ddd49b";
    const auctionSeedAddress = "0xcf20f1cc6efa9a05ae7eff8a0c6331f3680899cf";
    contracts['AuctionSell'] = window.web3.eth.contract(abis['Auction'].abi).at(auctionSellAddress);
    contracts['AuctionSeed'] = window.web3.eth.contract(abis['Auction'].abi).at(auctionSeedAddress);

    return contracts;
};


async function getPageSize() {
    const searchParams = new URLSearchParams(location.search);
    let ps;
    if (searchParams.has("size")) {
        ps = parseInt(searchParams.get("size"));
        console.log(`page size specification: ${ps}`);
    } else {
        ps = 60;
    }
    return ps;
}