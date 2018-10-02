// ToDo if no metamask, new web3


var contracts = {
    'AuctionSeed': {
        'address': '0xcf20f1cc6efa9a05ae7eff8a0c6331f3680899cf',
        'instance': null
    },
    'AuctionSell': {
        'address': '0xa2156f24711a631e92e65dc114cf172065ddd49b',
        'instance': null
    },
    'EntityCore': {
        'address': '0x1a94fce7ef36bc90959e206ba569a12afbc91ca1',
        'instance': null
    }
};

(() => {
	var contract_defs = 
	{
	"AuctionSeed":{
  "contractName": "AuctionSeed",
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
  "bytecode": "0x60606040526001600060146101000a81548160ff021916908315150217905550341561002a57600080fd5b6040516040806117b28339810160405280805190602001909190805190602001909190505081816000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061271082111515156100a457600080fd5b816002819055508290508073ffffffffffffffffffffffffffffffffffffffff166301ffc9a7639a20483d7c0100000000000000000000000000000000000000000000000000000000026000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001915050602060405180830381600087803b151561018657600080fd5b6102c65a03f1151561019757600080fd5b5050506040518051905015156101ac57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050506115b1806102016000396000f3006060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327ebe40a146100e05780633f4ba83a1461013d578063454a2ab31461016a5780635c975abb146101825780635fd8c710146101af57806378bd7935146101c457806383b5ff8b146102435780638456cb591461026c578063878eb368146102995780638da5cb5b146102bc57806396b5a75514610311578063c55d0f5614610334578063dab45b091461036b578063dd1b7a0f14610398578063f2fde38b146103ed575b600080fd5b34156100eb57600080fd5b61013b600480803590602001909190803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610426565b005b341561014857600080fd5b610150610576565b604051808215151515815260200191505060405180910390f35b610180600480803590602001909190505061063b565b005b341561018d57600080fd5b6101956106eb565b604051808215151515815260200191505060405180910390f35b34156101ba57600080fd5b6101c26106fe565b005b34156101cf57600080fd5b6101e56004808035906020019091905050610809565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b341561024e57600080fd5b61025661092c565b6040518082815260200191505060405180910390f35b341561027757600080fd5b61027f610932565b604051808215151515815260200191505060405180910390f35b34156102a457600080fd5b6102ba60048080359060200190919050506109f9565b005b34156102c757600080fd5b6102cf610acb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561031c57600080fd5b6103326004808035906020019091905050610af0565b005b341561033f57600080fd5b6103556004808035906020019091905050610b8c565b6040518082815260200191505060405180910390f35b341561037657600080fd5b61037e610bc9565b604051808215151515815260200191505060405180910390f35b34156103a357600080fd5b6103ab610bd2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103f857600080fd5b610424600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bf8565b005b61042e611507565b846fffffffffffffffffffffffffffffffff168514151561044e57600080fd5b836fffffffffffffffffffffffffffffffff168414151561046e57600080fd5b8267ffffffffffffffff168314151561048657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b6104ec8287610ccd565b60a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff168152602001866fffffffffffffffffffffffffffffffff168152602001856fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1681526020014267ffffffffffffffff16815250905061056e8682610ddd565b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105d357600080fd5b600060149054906101000a900460ff1615156105ee57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a16001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069957600080fd5b6003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106dc8234610fc2565b506106e781836111a5565b5050565b600060149054906101000a900460ff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107ac57508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156107b757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505090505050565b60008060008060008060036000888152602001908152602001600020905061083081611281565b151561083b57600080fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a90046fffffffffffffffffffffffffffffffff168260010160109054906101000a90046fffffffffffffffffffffffffffffffff168360020160009054906101000a900467ffffffffffffffff168460020160089054906101000a900467ffffffffffffffff16836fffffffffffffffffffffffffffffffff169350826fffffffffffffffffffffffffffffffff1692508167ffffffffffffffff1691508067ffffffffffffffff169050955095509550955095505091939590929450565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561098f57600080fd5b600060149054906101000a900460ff161515156109ab57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a16001905090565b60008060149054906101000a900460ff161515610a1557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7057600080fd5b600360008381526020019081526020016000209050610a8e81611281565b1515610a9957600080fd5b610ac7828260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166112af565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360008481526020019081526020016000209150610b1182611281565b1515610b1c57600080fd5b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b7d57600080fd5b610b8783826112af565b505050565b600080600360008481526020019081526020016000209050610bad81611281565b1515610bb857600080fd5b610bc1816112fd565b915050919050565b60006001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c5357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610cca57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1515610dc557600080fd5b6102c65a03f11515610dd657600080fd5b5050505050565b603c816060015167ffffffffffffffff1610151515610dfb57600080fd5b806003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507fa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba78282602001516fffffffffffffffffffffffffffffffff1683604001516fffffffffffffffffffffffffffffffff16846060015167ffffffffffffffff166040518085815260200184815260200183815260200182815260200194505050505060405180910390a15050565b6000806000806000806000600360008a81526020019081526020016000209550610feb86611281565b1515610ff657600080fd5b610fff866112fd565b945084881015151561101057600080fd5b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350611040896113f0565b600092506000915060008511156110a25761105a856114ac565b925082850391508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156110a157600080fd5b5b84880390503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156110e757600080fd5b7f58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd88983853388604051808681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390a184965050505050505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561126957600080fd5b6102c65a03f1151561127a57600080fd5b5050505050565b6000808260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16119050919050565b6112b8826113f0565b6112c281836111a5565b7f2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df826040518082815260200191505060405180910390a15050565b600080600090508260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421115611356578260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16420390505b6113e88360010160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168460010160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168560020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16846114c7565b915050919050565b60036000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556001820160106101000a8154906fffffffffffffffffffffffffffffffff02191690556002820160006101000a81549067ffffffffffffffff02191690556002820160086101000a81549067ffffffffffffffff0219169055505050565b600061271060025483028115156114bf57fe5b049050919050565b60008060008085851015156114de578693506114fc565b8787039250858584028115156114f057fe5b05915081880190508093505b505050949350505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff16815250905600a165627a7a72305820e220cf42c4eec5c0e527cb22d653d39edf3384001c5c4b10836dc7dc90487b3b0029",
  "deployedBytecode": "0x6060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327ebe40a146100e05780633f4ba83a1461013d578063454a2ab31461016a5780635c975abb146101825780635fd8c710146101af57806378bd7935146101c457806383b5ff8b146102435780638456cb591461026c578063878eb368146102995780638da5cb5b146102bc57806396b5a75514610311578063c55d0f5614610334578063dab45b091461036b578063dd1b7a0f14610398578063f2fde38b146103ed575b600080fd5b34156100eb57600080fd5b61013b600480803590602001909190803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610426565b005b341561014857600080fd5b610150610576565b604051808215151515815260200191505060405180910390f35b610180600480803590602001909190505061063b565b005b341561018d57600080fd5b6101956106eb565b604051808215151515815260200191505060405180910390f35b34156101ba57600080fd5b6101c26106fe565b005b34156101cf57600080fd5b6101e56004808035906020019091905050610809565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b341561024e57600080fd5b61025661092c565b6040518082815260200191505060405180910390f35b341561027757600080fd5b61027f610932565b604051808215151515815260200191505060405180910390f35b34156102a457600080fd5b6102ba60048080359060200190919050506109f9565b005b34156102c757600080fd5b6102cf610acb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561031c57600080fd5b6103326004808035906020019091905050610af0565b005b341561033f57600080fd5b6103556004808035906020019091905050610b8c565b6040518082815260200191505060405180910390f35b341561037657600080fd5b61037e610bc9565b604051808215151515815260200191505060405180910390f35b34156103a357600080fd5b6103ab610bd2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103f857600080fd5b610424600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bf8565b005b61042e611507565b846fffffffffffffffffffffffffffffffff168514151561044e57600080fd5b836fffffffffffffffffffffffffffffffff168414151561046e57600080fd5b8267ffffffffffffffff168314151561048657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b6104ec8287610ccd565b60a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff168152602001866fffffffffffffffffffffffffffffffff168152602001856fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1681526020014267ffffffffffffffff16815250905061056e8682610ddd565b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105d357600080fd5b600060149054906101000a900460ff1615156105ee57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a16001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069957600080fd5b6003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106dc8234610fc2565b506106e781836111a5565b5050565b600060149054906101000a900460ff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107ac57508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156107b757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505090505050565b60008060008060008060036000888152602001908152602001600020905061083081611281565b151561083b57600080fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a90046fffffffffffffffffffffffffffffffff168260010160109054906101000a90046fffffffffffffffffffffffffffffffff168360020160009054906101000a900467ffffffffffffffff168460020160089054906101000a900467ffffffffffffffff16836fffffffffffffffffffffffffffffffff169350826fffffffffffffffffffffffffffffffff1692508167ffffffffffffffff1691508067ffffffffffffffff169050955095509550955095505091939590929450565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561098f57600080fd5b600060149054906101000a900460ff161515156109ab57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a16001905090565b60008060149054906101000a900460ff161515610a1557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7057600080fd5b600360008381526020019081526020016000209050610a8e81611281565b1515610a9957600080fd5b610ac7828260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166112af565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360008481526020019081526020016000209150610b1182611281565b1515610b1c57600080fd5b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b7d57600080fd5b610b8783826112af565b505050565b600080600360008481526020019081526020016000209050610bad81611281565b1515610bb857600080fd5b610bc1816112fd565b915050919050565b60006001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c5357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610cca57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1515610dc557600080fd5b6102c65a03f11515610dd657600080fd5b5050505050565b603c816060015167ffffffffffffffff1610151515610dfb57600080fd5b806003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507fa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba78282602001516fffffffffffffffffffffffffffffffff1683604001516fffffffffffffffffffffffffffffffff16846060015167ffffffffffffffff166040518085815260200184815260200183815260200182815260200194505050505060405180910390a15050565b6000806000806000806000600360008a81526020019081526020016000209550610feb86611281565b1515610ff657600080fd5b610fff866112fd565b945084881015151561101057600080fd5b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350611040896113f0565b600092506000915060008511156110a25761105a856114ac565b925082850391508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156110a157600080fd5b5b84880390503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156110e757600080fd5b7f58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd88983853388604051808681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390a184965050505050505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561126957600080fd5b6102c65a03f1151561127a57600080fd5b5050505050565b6000808260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16119050919050565b6112b8826113f0565b6112c281836111a5565b7f2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df826040518082815260200191505060405180910390a15050565b600080600090508260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16421115611356578260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16420390505b6113e88360010160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168460010160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168560020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16846114c7565b915050919050565b60036000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556001820160106101000a8154906fffffffffffffffffffffffffffffffff02191690556002820160006101000a81549067ffffffffffffffff02191690556002820160086101000a81549067ffffffffffffffff0219169055505050565b600061271060025483028115156114bf57fe5b049050919050565b60008060008085851015156114de578693506114fc565b8787039250858584028115156114f057fe5b05915081880190508093505b505050949350505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff16815250905600a165627a7a72305820e220cf42c4eec5c0e527cb22d653d39edf3384001c5c4b10836dc7dc90487b3b0029",
  "sourceMap": "59:1620:3:-;;;295:4:2;274:25;;;;;;;;;;;;;;;;;;;;133:99:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;214:8;224:4;1020:24:5;205:10:18;197:5;;:18;;;;;;;;;;;;;;;;;;975:5:5;967:4;:13;;959:22;;;;;;;;1003:4;992:8;:15;;;;1054:11;1020:46;;1085:17;:35;;;514:10;507:18;;1085:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1077:71;;;;;;;;1181:17;1159:19;;:39;;;;;;;;;;;;;;;;;;885:321;;;133:99:3;;59:1620;;;;;;",
  "deployedSourceMap": "59:1620:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;240:879;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;887:114:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1127:451:3;;;;;;;;;;;;;;;;;;274:25:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1477:361:5;;;;;;;;;;;;;;4850:545;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;795:23:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:112:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4459:276:5;;;;;;;;;;;;;;;;;;;;;;;;;;121:20:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3899:301:5;;;;;;;;;;;;;;;;;;;;;;;;;;5524:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1592:82:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:33:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;319:126:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;240:879:3;873:22;;:::i;:::-;619:14;603:32;;585:14;:50;577:59;;;;;;;;687:12;671:30;;655:12;:46;647:55;;;;;;;;749:9;734:26;;721:9;:39;713:48;;;;;;;;804:19;;;;;;;;;;;782:42;;:10;:42;;;774:51;;;;;;;;836:26;844:7;853:8;836:7;:26::i;:::-;898:172;;;;;;;;;920:7;898:172;;;;;;950:14;898:172;;;;;;988:12;898:172;;;;;;1023:9;898:172;;;;;;1055:3;898:172;;;;;873:197;;1081:30;1093:8;1103:7;1081:11;:30::i;:::-;240:879;;;;;;:::o;887:114:2:-;934:4;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;583:6:2;;;;;;;;;;;575:15;;;;;;;;956:5;947:6;;:14;;;;;;;;;;;;;;;;;;968:9;;;;;;;;;;991:4;984:11;;887:114;:::o;1127:451:3:-;1271:14;1239:19;;;;;;;;;;;1217:42;;:10;:42;;;1209:51;;;;;;;;1288:16;:26;1305:8;1288:26;;;;;;;;;;;:33;;;;;;;;;;;;1271:50;;1407:25;1412:8;1422:9;1407:4;:25::i;:::-;;1543:27;1553:6;1561:8;1543:9;:27::i;:::-;1127:451;;:::o;274:25:2:-;;;;;;;;;;;;;:::o;1477:361:5:-;1524:18;1790:8;1553:19;;;;;;;;;;;1524:49;;1622:5;;;;;;;;;;;1608:19;;:10;:19;;;:60;;;;1658:10;1644:24;;:10;:24;;;1608:60;1586:93;;;;;;;;1801:10;:15;;:29;1817:4;:12;;;1801:29;;;;;;;;;;;;;;;;;;;;;;;1790:40;;1477:361;;:::o;4850:545::-;4953:14;4978:21;5010:19;5040:16;5067:17;5103:23;5129:16;:26;5146:8;5129:26;;;;;;;;;;;5103:52;;5174:21;5187:7;5174:12;:21::i;:::-;5166:30;;;;;;;;5229:7;:14;;;;;;;;;;;;5258:7;:21;;;;;;;;;;;;5294:7;:19;;;;;;;;;;;;5328:7;:16;;;;;;;;;;;;5359:7;:17;;;;;;;;;;;;5207:180;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4850:545;;;;;;;;:::o;795:23:1:-;;;;:::o;688:112:2:-;736:4;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;433:6:2;;;;;;;;;;;432:7;424:16;;;;;;;;758:4;749:6;;:13;;;;;;;;;;;;;;;;;;769:7;;;;;;;;;;790:4;783:11;;688:112;:::o;4459:276:5:-;4583:23;583:6:2;;;;;;;;;;;575:15;;;;;;;;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;4609:16:5;:26;4626:8;4609:26;;;;;;;;;;;4583:52;;4654:21;4667:7;4654:12;:21::i;:::-;4646:30;;;;;;;;4687:40;4702:8;4712:7;:14;;;;;;;;;;;;4687;:40::i;:::-;4459:276;;:::o;121:20:18:-;;;;;;;;;;;;;:::o;3899:301:5:-;3974:23;4078:14;4000:16;:26;4017:8;4000:26;;;;;;;;;;;3974:52;;4045:21;4058:7;4045:12;:21::i;:::-;4037:30;;;;;;;;4095:7;:14;;;;;;;;;;;;4078:31;;4142:6;4128:20;;:10;:20;;;4120:29;;;;;;;;4160:32;4175:8;4185:6;4160:14;:32::i;:::-;3899:301;;;:::o;5524:259::-;5617:7;5642:23;5668:16;:26;5685:8;5668:26;;;;;;;;;;;5642:52;;5713:21;5726:7;5713:12;:21::i;:::-;5705:30;;;;;;;;5753:22;5767:7;5753:13;:22::i;:::-;5746:29;;5524:259;;;;:::o;1592:82:3:-;1638:4;1662;1655:11;;1592:82;:::o;626:33:1:-;;;;;;;;;;;;;:::o;319:126:18:-;287:5;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;403:1;383:22;;:8;:22;;;;379:61;;;424:8;416:5;;:16;;;;;;;;;;;;;;;;;;379:61;319:126;:::o;1804:179:1:-;1919:19;;;;;;;;;;;:32;;;1952:6;1960:4;1966:8;1919:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1804:179;;:::o;2621:502::-;2854:9;2833:8;:17;;;:30;;;;2825:39;;;;;;;;2906:8;2877:16;:26;2894:8;2877:26;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2927:188;2964:8;2996;:22;;;2988:31;;3042:8;:20;;;3034:29;;3086:8;:17;;;3078:26;;2927:188;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2621:502;;:::o;3480:2787::-;3568:7;3643:23;4094:13;4279:14;4496:21;4532:22;5842:17;3669:16;:26;3686:8;3669:26;;;;;;;;;;;3643:52;;3982:21;3995:7;3982:12;:21::i;:::-;3974:30;;;;;;;;4110:22;4124:7;4110:13;:22::i;:::-;4094:38;;4165:5;4151:10;:19;;4143:28;;;;;;;;4296:7;:14;;;;;;;;;;;;4279:31;;4459:24;4474:8;4459:14;:24::i;:::-;4520:1;4496:25;;4557:1;4532:26;;4643:1;4635:5;:9;4631:918;;;4860:18;4872:5;4860:11;:18::i;:::-;4844:34;;4918:13;4910:5;:21;4893:38;;5506:6;:15;;:31;5522:14;5506:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4631:918;5875:5;5862:10;:18;5842:38;;6085:10;:19;;:30;6105:9;6085:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6156:78;6174:8;6184:14;6200:13;6215:10;6227:6;6156:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6254:5;6247:12;;3480:2787;;;;;;;;;;:::o;2221:177::-;2341:19;;;;;;;;;;;:28;;;2370:9;2381:8;2341:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2221:177;;:::o;6598:127::-;6669:4;6715:1;6694:8;:18;;;;;;;;;;;;:22;;;6686:31;;6598:127;;;:::o;3181:187::-;3260:24;3275:8;3260:14;:24::i;:::-;3295:28;3305:7;3314:8;3295:9;:28::i;:::-;3334:26;3351:8;3334:26;;;;;;;;;;;;;;;;;;3181:187;;:::o;7026:645::-;7125:7;7150:21;7174:1;7150:25;;7394:8;:18;;;;;;;;;;;;7388:24;;:3;:24;7384:97;;;7451:8;:18;;;;;;;;;;;;7445:24;;:3;:24;7429:40;;7384:97;7500:163;7535:8;:22;;;;;;;;;;;;7500:163;;7572:8;:20;;;;;;;;;;;;7500:163;;7607:8;:17;;;;;;;;;;;;7500:163;;7639:13;7500:20;:163::i;:::-;7493:170;;7026:645;;;;:::o;6389:103::-;6458:16;:26;6475:8;6458:26;;;;;;;;;;;;6451:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6389:103;:::o;9671:489::-;9731:7;10147:5;10136:8;;10127:6;:17;:25;;;;;;;;10120:32;;9671:489;;;:::o;7925:1648::-;8137:7;8844:23;9164:25;9444:19;8511:9;8493:14;:27;;8489:1077;;;8672:12;8665:19;;;;8489:1077;8900:14;8877:12;8870:45;8844:71;;9243:9;9218:14;9192:16;:41;:61;;;;;;;;9164:89;;9491:18;9473:14;9466:43;9444:65;;9541:12;9526:28;;7925:1648;;;;;;;;;;:::o;59:1620:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\r\n\r\nimport \"./AuctionTime.sol\";\r\n\r\ncontract AuctionSeed is AuctionTime {\r\n\r\n    // Delegate constructor\r\n    function AuctionSeed(address _nftAddr, uint256 _cut) public\r\n        AuctionTime(_nftAddr, _cut) {}\r\n\r\n    function createAuction(\r\n        uint256 _tokenId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        address _seller\r\n    )\r\n        external\r\n    {\r\n        // Sanity check that no inputs overflow how many bits we've allocated\r\n        // to store them in the auction struct.\r\n        require(_startingPrice == uint256(uint128(_startingPrice)));\r\n        require(_endingPrice == uint256(uint128(_endingPrice)));\r\n        require(_duration == uint256(uint64(_duration)));\r\n\r\n        require(msg.sender == address(nonFungibleContract));\r\n        _escrow(_seller, _tokenId);\r\n        Auction memory auction = Auction(\r\n            _seller,\r\n            uint128(_startingPrice),\r\n            uint128(_endingPrice),\r\n            uint64(_duration),\r\n            uint64(now)\r\n        );\r\n        _addAuction(_tokenId, auction);\r\n    }\r\n\r\n    function bid(uint256 _tokenId)\r\n        external\r\n        payable\r\n    {\r\n        require(msg.sender == address(nonFungibleContract));\r\n        address seller = tokenIdToAuction[_tokenId].seller;\r\n        // _bid checks that token ID is valid and will throw if bid fails\r\n        _bid(_tokenId, msg.value);\r\n        // We transfer the kitty back to the seller, the winner will get\r\n        // the offspring\r\n        _transfer(seller, _tokenId);\r\n    }\r\n\r\n    \r\n    function isAuctionSeed() public pure returns (bool) {\r\n        return true;\r\n    }\r\n\r\n}",
  "sourcePath": "C:\\DEV\\git\\crypton_contracts\\contracts\\AuctionSeed.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/C/DEV/git/crypton_contracts/contracts/AuctionSeed.sol",
      "exportedSymbols": {
        "AuctionSeed": [
          981
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 843,
        "name": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "attributes": {
          "SourceUnit": 1481,
          "absolutePath": "/C/DEV/git/crypton_contracts/contracts/AuctionTime.sol",
          "file": "./AuctionTime.sol",
          "scope": 982,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 844,
        "name": "ImportDirective",
        "src": "28:27:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            773,
            841,
            1480,
            5244
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            981,
            1480,
            773,
            841,
            5244
          ],
          "name": "AuctionSeed",
          "scope": 982
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AuctionTime",
                  "referencedDeclaration": 1480,
                  "type": "contract AuctionTime"
                },
                "id": 845,
                "name": "UserDefinedTypeName",
                "src": "83:11:3"
              }
            ],
            "id": 846,
            "name": "InheritanceSpecifier",
            "src": "83:11:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "AuctionSeed",
              "payable": false,
              "scope": 981,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_nftAddr",
                      "scope": 858,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 847,
                        "name": "ElementaryTypeName",
                        "src": "154:7:3"
                      }
                    ],
                    "id": 848,
                    "name": "VariableDeclaration",
                    "src": "154:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_cut",
                      "scope": 858,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 849,
                        "name": "ElementaryTypeName",
                        "src": "172:7:3"
                      }
                    ],
                    "id": 850,
                    "name": "VariableDeclaration",
                    "src": "172:12:3"
                  }
                ],
                "id": 851,
                "name": "ParameterList",
                "src": "153:32:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 856,
                "name": "ParameterList",
                "src": "230:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1480,
                      "type": "type(contract AuctionTime)",
                      "value": "AuctionTime"
                    },
                    "id": 852,
                    "name": "Identifier",
                    "src": "202:11:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 848,
                      "type": "address",
                      "value": "_nftAddr"
                    },
                    "id": 853,
                    "name": "Identifier",
                    "src": "214:8:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 850,
                      "type": "uint256",
                      "value": "_cut"
                    },
                    "id": 854,
                    "name": "Identifier",
                    "src": "224:4:3"
                  }
                ],
                "id": 855,
                "name": "ModifierInvocation",
                "src": "202:27:3"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 857,
                "name": "Block",
                "src": "230:2:3"
              }
            ],
            "id": 858,
            "name": "FunctionDefinition",
            "src": "133:99:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createAuction",
              "payable": false,
              "scope": 981,
              "stateMutability": "nonpayable",
              "superFunction": 1332,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 859,
                        "name": "ElementaryTypeName",
                        "src": "273:7:3"
                      }
                    ],
                    "id": 860,
                    "name": "VariableDeclaration",
                    "src": "273:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_startingPrice",
                      "scope": 939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 861,
                        "name": "ElementaryTypeName",
                        "src": "300:7:3"
                      }
                    ],
                    "id": 862,
                    "name": "VariableDeclaration",
                    "src": "300:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_endingPrice",
                      "scope": 939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 863,
                        "name": "ElementaryTypeName",
                        "src": "333:7:3"
                      }
                    ],
                    "id": 864,
                    "name": "VariableDeclaration",
                    "src": "333:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_duration",
                      "scope": 939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 865,
                        "name": "ElementaryTypeName",
                        "src": "364:7:3"
                      }
                    ],
                    "id": 866,
                    "name": "VariableDeclaration",
                    "src": "364:17:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_seller",
                      "scope": 939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 867,
                        "name": "ElementaryTypeName",
                        "src": "392:7:3"
                      }
                    ],
                    "id": 868,
                    "name": "VariableDeclaration",
                    "src": "392:15:3"
                  }
                ],
                "id": 869,
                "name": "ParameterList",
                "src": "262:152:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 870,
                "name": "ParameterList",
                "src": "438:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 871,
                            "name": "Identifier",
                            "src": "577:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 862,
                                  "type": "uint256",
                                  "value": "_startingPrice"
                                },
                                "id": 872,
                                "name": "Identifier",
                                "src": "585:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 873,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "603:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 874,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "611:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 862,
                                          "type": "uint256",
                                          "value": "_startingPrice"
                                        },
                                        "id": 875,
                                        "name": "Identifier",
                                        "src": "619:14:3"
                                      }
                                    ],
                                    "id": 876,
                                    "name": "FunctionCall",
                                    "src": "611:23:3"
                                  }
                                ],
                                "id": 877,
                                "name": "FunctionCall",
                                "src": "603:32:3"
                              }
                            ],
                            "id": 878,
                            "name": "BinaryOperation",
                            "src": "585:50:3"
                          }
                        ],
                        "id": 879,
                        "name": "FunctionCall",
                        "src": "577:59:3"
                      }
                    ],
                    "id": 880,
                    "name": "ExpressionStatement",
                    "src": "577:59:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 881,
                            "name": "Identifier",
                            "src": "647:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 864,
                                  "type": "uint256",
                                  "value": "_endingPrice"
                                },
                                "id": 882,
                                "name": "Identifier",
                                "src": "655:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 883,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "671:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 884,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "679:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 864,
                                          "type": "uint256",
                                          "value": "_endingPrice"
                                        },
                                        "id": 885,
                                        "name": "Identifier",
                                        "src": "687:12:3"
                                      }
                                    ],
                                    "id": 886,
                                    "name": "FunctionCall",
                                    "src": "679:21:3"
                                  }
                                ],
                                "id": 887,
                                "name": "FunctionCall",
                                "src": "671:30:3"
                              }
                            ],
                            "id": 888,
                            "name": "BinaryOperation",
                            "src": "655:46:3"
                          }
                        ],
                        "id": 889,
                        "name": "FunctionCall",
                        "src": "647:55:3"
                      }
                    ],
                    "id": 890,
                    "name": "ExpressionStatement",
                    "src": "647:55:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 891,
                            "name": "Identifier",
                            "src": "713:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 866,
                                  "type": "uint256",
                                  "value": "_duration"
                                },
                                "id": 892,
                                "name": "Identifier",
                                "src": "721:9:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint64",
                                          "typeString": "uint64"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 893,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "734:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint64",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint64)",
                                          "value": "uint64"
                                        },
                                        "id": 894,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "742:6:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 866,
                                          "type": "uint256",
                                          "value": "_duration"
                                        },
                                        "id": 895,
                                        "name": "Identifier",
                                        "src": "749:9:3"
                                      }
                                    ],
                                    "id": 896,
                                    "name": "FunctionCall",
                                    "src": "742:17:3"
                                  }
                                ],
                                "id": 897,
                                "name": "FunctionCall",
                                "src": "734:26:3"
                              }
                            ],
                            "id": 898,
                            "name": "BinaryOperation",
                            "src": "721:39:3"
                          }
                        ],
                        "id": 899,
                        "name": "FunctionCall",
                        "src": "713:48:3"
                      }
                    ],
                    "id": 900,
                    "name": "ExpressionStatement",
                    "src": "713:48:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 901,
                            "name": "Identifier",
                            "src": "774:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5336,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 902,
                                    "name": "Identifier",
                                    "src": "782:3:3"
                                  }
                                ],
                                "id": 903,
                                "name": "MemberAccess",
                                "src": "782:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_ERC721_$5324",
                                          "typeString": "contract ERC721"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 904,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "796:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 402,
                                      "type": "contract ERC721",
                                      "value": "nonFungibleContract"
                                    },
                                    "id": 905,
                                    "name": "Identifier",
                                    "src": "804:19:3"
                                  }
                                ],
                                "id": 906,
                                "name": "FunctionCall",
                                "src": "796:28:3"
                              }
                            ],
                            "id": 907,
                            "name": "BinaryOperation",
                            "src": "782:42:3"
                          }
                        ],
                        "id": 908,
                        "name": "FunctionCall",
                        "src": "774:51:3"
                      }
                    ],
                    "id": 909,
                    "name": "ExpressionStatement",
                    "src": "774:51:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 468,
                              "type": "function (address,uint256)",
                              "value": "_escrow"
                            },
                            "id": 910,
                            "name": "Identifier",
                            "src": "836:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 868,
                              "type": "address",
                              "value": "_seller"
                            },
                            "id": 911,
                            "name": "Identifier",
                            "src": "844:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 860,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 912,
                            "name": "Identifier",
                            "src": "853:8:3"
                          }
                        ],
                        "id": 913,
                        "name": "FunctionCall",
                        "src": "836:26:3"
                      }
                    ],
                    "id": 914,
                    "name": "ExpressionStatement",
                    "src": "836:26:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        916
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "auction",
                          "scope": 939,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct AuctionBase.Auction memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Auction",
                              "referencedDeclaration": 400,
                              "type": "struct AuctionBase.Auction storage pointer"
                            },
                            "id": 915,
                            "name": "UserDefinedTypeName",
                            "src": "873:7:3"
                          }
                        ],
                        "id": 916,
                        "name": "VariableDeclaration",
                        "src": "873:22:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct AuctionBase.Auction memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                },
                                {
                                  "typeIdentifier": "t_uint64",
                                  "typeString": "uint64"
                                },
                                {
                                  "typeIdentifier": "t_uint64",
                                  "typeString": "uint64"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 400,
                              "type": "type(struct AuctionBase.Auction storage pointer)",
                              "value": "Auction"
                            },
                            "id": 917,
                            "name": "Identifier",
                            "src": "898:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 868,
                              "type": "address",
                              "value": "_seller"
                            },
                            "id": 918,
                            "name": "Identifier",
                            "src": "920:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint128",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 919,
                                "name": "ElementaryTypeNameExpression",
                                "src": "942:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 862,
                                  "type": "uint256",
                                  "value": "_startingPrice"
                                },
                                "id": 920,
                                "name": "Identifier",
                                "src": "950:14:3"
                              }
                            ],
                            "id": 921,
                            "name": "FunctionCall",
                            "src": "942:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint128",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 922,
                                "name": "ElementaryTypeNameExpression",
                                "src": "980:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 864,
                                  "type": "uint256",
                                  "value": "_endingPrice"
                                },
                                "id": 923,
                                "name": "Identifier",
                                "src": "988:12:3"
                              }
                            ],
                            "id": 924,
                            "name": "FunctionCall",
                            "src": "980:21:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint64",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint64)",
                                  "value": "uint64"
                                },
                                "id": 925,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1016:6:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 866,
                                  "type": "uint256",
                                  "value": "_duration"
                                },
                                "id": 926,
                                "name": "Identifier",
                                "src": "1023:9:3"
                              }
                            ],
                            "id": 927,
                            "name": "FunctionCall",
                            "src": "1016:17:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint64",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint64)",
                                  "value": "uint64"
                                },
                                "id": 928,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1048:6:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5338,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 929,
                                "name": "Identifier",
                                "src": "1055:3:3"
                              }
                            ],
                            "id": 930,
                            "name": "FunctionCall",
                            "src": "1048:11:3"
                          }
                        ],
                        "id": 931,
                        "name": "FunctionCall",
                        "src": "898:172:3"
                      }
                    ],
                    "id": 932,
                    "name": "VariableDeclarationStatement",
                    "src": "873:197:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Auction_$400_memory_ptr",
                                  "typeString": "struct AuctionBase.Auction memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 522,
                              "type": "function (uint256,struct AuctionBase.Auction memory)",
                              "value": "_addAuction"
                            },
                            "id": 933,
                            "name": "Identifier",
                            "src": "1081:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 860,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 934,
                            "name": "Identifier",
                            "src": "1093:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 916,
                              "type": "struct AuctionBase.Auction memory",
                              "value": "auction"
                            },
                            "id": 935,
                            "name": "Identifier",
                            "src": "1103:7:3"
                          }
                        ],
                        "id": 936,
                        "name": "FunctionCall",
                        "src": "1081:30:3"
                      }
                    ],
                    "id": 937,
                    "name": "ExpressionStatement",
                    "src": "1081:30:3"
                  }
                ],
                "id": 938,
                "name": "Block",
                "src": "438:681:3"
              }
            ],
            "id": 939,
            "name": "FunctionDefinition",
            "src": "240:879:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "bid",
              "payable": true,
              "scope": 981,
              "stateMutability": "payable",
              "superFunction": 1352,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 972,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 940,
                        "name": "ElementaryTypeName",
                        "src": "1140:7:3"
                      }
                    ],
                    "id": 941,
                    "name": "VariableDeclaration",
                    "src": "1140:16:3"
                  }
                ],
                "id": 942,
                "name": "ParameterList",
                "src": "1139:18:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 943,
                "name": "ParameterList",
                "src": "1198:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 944,
                            "name": "Identifier",
                            "src": "1209:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5336,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 945,
                                    "name": "Identifier",
                                    "src": "1217:3:3"
                                  }
                                ],
                                "id": 946,
                                "name": "MemberAccess",
                                "src": "1217:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_ERC721_$5324",
                                          "typeString": "contract ERC721"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 947,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1231:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 402,
                                      "type": "contract ERC721",
                                      "value": "nonFungibleContract"
                                    },
                                    "id": 948,
                                    "name": "Identifier",
                                    "src": "1239:19:3"
                                  }
                                ],
                                "id": 949,
                                "name": "FunctionCall",
                                "src": "1231:28:3"
                              }
                            ],
                            "id": 950,
                            "name": "BinaryOperation",
                            "src": "1217:42:3"
                          }
                        ],
                        "id": 951,
                        "name": "FunctionCall",
                        "src": "1209:51:3"
                      }
                    ],
                    "id": 952,
                    "name": "ExpressionStatement",
                    "src": "1209:51:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        954
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "seller",
                          "scope": 972,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 953,
                            "name": "ElementaryTypeName",
                            "src": "1271:7:3"
                          }
                        ],
                        "id": 954,
                        "name": "VariableDeclaration",
                        "src": "1271:14:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "seller",
                          "referencedDeclaration": 391,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct AuctionBase.Auction storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 408,
                                  "type": "mapping(uint256 => struct AuctionBase.Auction storage ref)",
                                  "value": "tokenIdToAuction"
                                },
                                "id": 955,
                                "name": "Identifier",
                                "src": "1288:16:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 941,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 956,
                                "name": "Identifier",
                                "src": "1305:8:3"
                              }
                            ],
                            "id": 957,
                            "name": "IndexAccess",
                            "src": "1288:26:3"
                          }
                        ],
                        "id": 958,
                        "name": "MemberAccess",
                        "src": "1288:33:3"
                      }
                    ],
                    "id": 959,
                    "name": "VariableDeclarationStatement",
                    "src": "1271:50:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 642,
                              "type": "function (uint256,uint256) returns (uint256)",
                              "value": "_bid"
                            },
                            "id": 960,
                            "name": "Identifier",
                            "src": "1407:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 941,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 961,
                            "name": "Identifier",
                            "src": "1412:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 962,
                                "name": "Identifier",
                                "src": "1422:3:3"
                              }
                            ],
                            "id": 963,
                            "name": "MemberAccess",
                            "src": "1422:9:3"
                          }
                        ],
                        "id": 964,
                        "name": "FunctionCall",
                        "src": "1407:25:3"
                      }
                    ],
                    "id": 965,
                    "name": "ExpressionStatement",
                    "src": "1407:25:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 483,
                              "type": "function (address,uint256)",
                              "value": "_transfer"
                            },
                            "id": 966,
                            "name": "Identifier",
                            "src": "1543:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 954,
                              "type": "address",
                              "value": "seller"
                            },
                            "id": 967,
                            "name": "Identifier",
                            "src": "1553:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 941,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 968,
                            "name": "Identifier",
                            "src": "1561:8:3"
                          }
                        ],
                        "id": 969,
                        "name": "FunctionCall",
                        "src": "1543:27:3"
                      }
                    ],
                    "id": 970,
                    "name": "ExpressionStatement",
                    "src": "1543:27:3"
                  }
                ],
                "id": 971,
                "name": "Block",
                "src": "1198:380:3"
              }
            ],
            "id": 972,
            "name": "FunctionDefinition",
            "src": "1127:451:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuctionSeed",
              "payable": false,
              "scope": 981,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 973,
                "name": "ParameterList",
                "src": "1614:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 980,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 974,
                        "name": "ElementaryTypeName",
                        "src": "1638:4:3"
                      }
                    ],
                    "id": 975,
                    "name": "VariableDeclaration",
                    "src": "1638:4:3"
                  }
                ],
                "id": 976,
                "name": "ParameterList",
                "src": "1637:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 976
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 977,
                        "name": "Literal",
                        "src": "1662:4:3"
                      }
                    ],
                    "id": 978,
                    "name": "Return",
                    "src": "1655:11:3"
                  }
                ],
                "id": 979,
                "name": "Block",
                "src": "1644:30:3"
              }
            ],
            "id": 980,
            "name": "FunctionDefinition",
            "src": "1592:82:3"
          }
        ],
        "id": 981,
        "name": "ContractDefinition",
        "src": "59:1620:3"
      }
    ],
    "id": 982,
    "name": "SourceUnit",
    "src": "0:1679:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5778": {
      "events": {
        "0xa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba7": {
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
        "0x58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd8": {
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
        "0x2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df": {
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
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T07:22:20.856Z"
},
	"AuctionSell":{
  "contractName": "AuctionSell",
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
  "bytecode": "0x60606040526001600060146101000a81548160ff021916908315150217905550341561002a57600080fd5b6040516040806118fa8339810160405280805190602001909190805190602001909190505081816000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061271082111515156100a457600080fd5b816002819055508290508073ffffffffffffffffffffffffffffffffffffffff166301ffc9a7639a20483d7c0100000000000000000000000000000000000000000000000000000000026000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001915050602060405180830381600087803b151561018657600080fd5b6102c65a03f1151561019757600080fd5b5050506040518051905015156101ac57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050506116f9806102016000396000f3006060604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327ebe40a146101015780633f4ba83a1461015e578063454a2ab31461018b578063484eccb4146101a35780635c975abb146101da5780635fd8c7101461020757806378bd79351461021c57806383b5ff8b1461029b5780638456cb59146102c4578063878eb368146102f15780638a98a9cc146103145780638da5cb5b1461033d5780638e5064ad1461039257806396b5a755146103bf578063c55d0f56146103e2578063dd1b7a0f14610419578063eac9d94c1461046e578063f2fde38b14610497575b600080fd5b341561010c57600080fd5b61015c600480803590602001909190803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104d0565b005b341561016957600080fd5b610171610620565b604051808215151515815260200191505060405180910390f35b6101a160048080359060200190919050506106e5565b005b34156101ae57600080fd5b6101c460048080359060200190919050506107c7565b6040518082815260200191505060405180910390f35b34156101e557600080fd5b6101ed6107e1565b604051808215151515815260200191505060405180910390f35b341561021257600080fd5b61021a6107f4565b005b341561022757600080fd5b61023d60048080359060200190919050506108ff565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34156102a657600080fd5b6102ae610a22565b6040518082815260200191505060405180910390f35b34156102cf57600080fd5b6102d7610a28565b604051808215151515815260200191505060405180910390f35b34156102fc57600080fd5b6103126004808035906020019091905050610aef565b005b341561031f57600080fd5b610327610bc1565b6040518082815260200191505060405180910390f35b341561034857600080fd5b610350610bc7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561039d57600080fd5b6103a5610bec565b604051808215151515815260200191505060405180910390f35b34156103ca57600080fd5b6103e06004808035906020019091905050610bf5565b005b34156103ed57600080fd5b6104036004808035906020019091905050610c91565b6040518082815260200191505060405180910390f35b341561042457600080fd5b61042c610cce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561047957600080fd5b610481610cf4565b6040518082815260200191505060405180910390f35b34156104a257600080fd5b6104ce600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d40565b005b6104d861164f565b846fffffffffffffffffffffffffffffffff16851415156104f857600080fd5b836fffffffffffffffffffffffffffffffff168414151561051857600080fd5b8267ffffffffffffffff168314151561053057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058c57600080fd5b6105968287610e15565b60a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff168152602001866fffffffffffffffffffffffffffffffff168152602001856fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1681526020014267ffffffffffffffff1681525090506106188682610f25565b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067d57600080fd5b600060149054906101000a900460ff16151561069857600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a16001905090565b6000806003600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915061072b833461110a565b905061073733846112ed565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107c2578060058060045481151561079d57fe5b066005811015156107aa57fe5b01819055506004600081548092919060010191905055505b505050565b6005816005811015156107d657fe5b016000915090505481565b600060149054906101000a900460ff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108a257508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156108ad57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505090505050565b600080600080600080600360008881526020019081526020016000209050610926816113c9565b151561093157600080fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a90046fffffffffffffffffffffffffffffffff168260010160109054906101000a90046fffffffffffffffffffffffffffffffff168360020160009054906101000a900467ffffffffffffffff168460020160089054906101000a900467ffffffffffffffff16836fffffffffffffffffffffffffffffffff169350826fffffffffffffffffffffffffffffffff1692508167ffffffffffffffff1691508067ffffffffffffffff169050955095509550955095505091939590929450565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a8557600080fd5b600060149054906101000a900460ff16151515610aa157600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a16001905090565b60008060149054906101000a900460ff161515610b0b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6657600080fd5b600360008381526020019081526020016000209050610b84816113c9565b1515610b8f57600080fd5b610bbd828260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166113f7565b5050565b60045481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001905090565b600080600360008481526020019081526020016000209150610c16826113c9565b1515610c2157600080fd5b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c8257600080fd5b610c8c83826113f7565b505050565b600080600360008481526020019081526020016000209050610cb2816113c9565b1515610cbd57600080fd5b610cc681611445565b915050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809150600090505b6005811015610d2c57600581600581101515610d1957fe5b0154820191508080600101915050610d01565b600582811515610d3857fe5b049250505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d9b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610e1257806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1515610f0d57600080fd5b6102c65a03f11515610f1e57600080fd5b5050505050565b603c816060015167ffffffffffffffff1610151515610f4357600080fd5b806003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507fa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba78282602001516fffffffffffffffffffffffffffffffff1683604001516fffffffffffffffffffffffffffffffff16846060015167ffffffffffffffff166040518085815260200184815260200183815260200182815260200194505050505060405180910390a15050565b6000806000806000806000600360008a81526020019081526020016000209550611133866113c9565b151561113e57600080fd5b61114786611445565b945084881015151561115857600080fd5b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16935061118889611538565b600092506000915060008511156111ea576111a2856115f4565b925082850391508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156111e957600080fd5b5b84880390503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561122f57600080fd5b7f58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd88983853388604051808681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390a184965050505050505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156113b157600080fd5b6102c65a03f115156113c257600080fd5b5050505050565b6000808260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16119050919050565b61140082611538565b61140a81836112ed565b7f2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df826040518082815260200191505060405180910390a15050565b600080600090508260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1642111561149e578260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16420390505b6115308360010160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168460010160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168560020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff168461160f565b915050919050565b60036000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556001820160106101000a8154906fffffffffffffffffffffffffffffffff02191690556002820160006101000a81549067ffffffffffffffff02191690556002820160086101000a81549067ffffffffffffffff0219169055505050565b6000612710600254830281151561160757fe5b049050919050565b600080600080858510151561162657869350611644565b87870392508585840281151561163857fe5b05915081880190508093505b505050949350505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff16815250905600a165627a7a72305820ed5fc1d21d0da7c0be72cb123068ee3cb30f292dcaa883c0db3fc81c232e2a310029",
  "deployedBytecode": "0x6060604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327ebe40a146101015780633f4ba83a1461015e578063454a2ab31461018b578063484eccb4146101a35780635c975abb146101da5780635fd8c7101461020757806378bd79351461021c57806383b5ff8b1461029b5780638456cb59146102c4578063878eb368146102f15780638a98a9cc146103145780638da5cb5b1461033d5780638e5064ad1461039257806396b5a755146103bf578063c55d0f56146103e2578063dd1b7a0f14610419578063eac9d94c1461046e578063f2fde38b14610497575b600080fd5b341561010c57600080fd5b61015c600480803590602001909190803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104d0565b005b341561016957600080fd5b610171610620565b604051808215151515815260200191505060405180910390f35b6101a160048080359060200190919050506106e5565b005b34156101ae57600080fd5b6101c460048080359060200190919050506107c7565b6040518082815260200191505060405180910390f35b34156101e557600080fd5b6101ed6107e1565b604051808215151515815260200191505060405180910390f35b341561021257600080fd5b61021a6107f4565b005b341561022757600080fd5b61023d60048080359060200190919050506108ff565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34156102a657600080fd5b6102ae610a22565b6040518082815260200191505060405180910390f35b34156102cf57600080fd5b6102d7610a28565b604051808215151515815260200191505060405180910390f35b34156102fc57600080fd5b6103126004808035906020019091905050610aef565b005b341561031f57600080fd5b610327610bc1565b6040518082815260200191505060405180910390f35b341561034857600080fd5b610350610bc7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561039d57600080fd5b6103a5610bec565b604051808215151515815260200191505060405180910390f35b34156103ca57600080fd5b6103e06004808035906020019091905050610bf5565b005b34156103ed57600080fd5b6104036004808035906020019091905050610c91565b6040518082815260200191505060405180910390f35b341561042457600080fd5b61042c610cce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561047957600080fd5b610481610cf4565b6040518082815260200191505060405180910390f35b34156104a257600080fd5b6104ce600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d40565b005b6104d861164f565b846fffffffffffffffffffffffffffffffff16851415156104f857600080fd5b836fffffffffffffffffffffffffffffffff168414151561051857600080fd5b8267ffffffffffffffff168314151561053057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058c57600080fd5b6105968287610e15565b60a0604051908101604052808373ffffffffffffffffffffffffffffffffffffffff168152602001866fffffffffffffffffffffffffffffffff168152602001856fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1681526020014267ffffffffffffffff1681525090506106188682610f25565b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067d57600080fd5b600060149054906101000a900460ff16151561069857600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a16001905090565b6000806003600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915061072b833461110a565b905061073733846112ed565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107c2578060058060045481151561079d57fe5b066005811015156107aa57fe5b01819055506004600081548092919060010191905055505b505050565b6005816005811015156107d657fe5b016000915090505481565b600060149054906101000a900460ff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108a257508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156108ad57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505090505050565b600080600080600080600360008881526020019081526020016000209050610926816113c9565b151561093157600080fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a90046fffffffffffffffffffffffffffffffff168260010160109054906101000a90046fffffffffffffffffffffffffffffffff168360020160009054906101000a900467ffffffffffffffff168460020160089054906101000a900467ffffffffffffffff16836fffffffffffffffffffffffffffffffff169350826fffffffffffffffffffffffffffffffff1692508167ffffffffffffffff1691508067ffffffffffffffff169050955095509550955095505091939590929450565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a8557600080fd5b600060149054906101000a900460ff16151515610aa157600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a16001905090565b60008060149054906101000a900460ff161515610b0b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6657600080fd5b600360008381526020019081526020016000209050610b84816113c9565b1515610b8f57600080fd5b610bbd828260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166113f7565b5050565b60045481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001905090565b600080600360008481526020019081526020016000209150610c16826113c9565b1515610c2157600080fd5b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c8257600080fd5b610c8c83826113f7565b505050565b600080600360008481526020019081526020016000209050610cb2816113c9565b1515610cbd57600080fd5b610cc681611445565b915050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809150600090505b6005811015610d2c57600581600581101515610d1957fe5b0154820191508080600101915050610d01565b600582811515610d3857fe5b049250505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d9b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610e1257806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1515610f0d57600080fd5b6102c65a03f11515610f1e57600080fd5b5050505050565b603c816060015167ffffffffffffffff1610151515610f4357600080fd5b806003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055509050507fa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba78282602001516fffffffffffffffffffffffffffffffff1683604001516fffffffffffffffffffffffffffffffff16846060015167ffffffffffffffff166040518085815260200184815260200183815260200182815260200194505050505060405180910390a15050565b6000806000806000806000600360008a81526020019081526020016000209550611133866113c9565b151561113e57600080fd5b61114786611445565b945084881015151561115857600080fd5b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16935061118889611538565b600092506000915060008511156111ea576111a2856115f4565b925082850391508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156111e957600080fd5b5b84880390503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561122f57600080fd5b7f58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd88983853388604051808681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390a184965050505050505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156113b157600080fd5b6102c65a03f115156113c257600080fd5b5050505050565b6000808260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16119050919050565b61140082611538565b61140a81836112ed565b7f2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df826040518082815260200191505060405180910390a15050565b600080600090508260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1642111561149e578260020160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16420390505b6115308360010160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168460010160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168560020160009054906101000a900467ffffffffffffffff1667ffffffffffffffff168461160f565b915050919050565b60036000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556001820160106101000a8154906fffffffffffffffffffffffffffffffff02191690556002820160006101000a81549067ffffffffffffffff02191690556002820160086101000a81549067ffffffffffffffff0219169055505050565b6000612710600254830281151561160757fe5b049050919050565b600080600080858510151561162657869350611644565b87870392508585840281151561163857fe5b05915081880190508093505b505050949350505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff16815250905600a165627a7a72305820ed5fc1d21d0da7c0be72cb123068ee3cb30f292dcaa883c0db3fc81c232e2a310029",
  "sourceMap": "59:2163:4:-;;;295:4:2;274:25;;;;;;;;;;;;;;;;;;;;266:99:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;347:8;357:4;1020:24:5;205:10:18;197:5;;:18;;;;;;;;;;;;;;;;;;975:5:5;967:4;:13;;959:22;;;;;;;;1003:4;992:8;:15;;;;1054:11;1020:46;;1085:17;:35;;;514:10;507:18;;1085:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1077:71;;;;;;;;1181:17;1159:19;;:39;;;;;;;;;;;;;;;;;;885:321;;;266:99:4;;59:2163;;;;;;",
  "deployedSourceMap": "59:2163:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;373:879;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;887:114:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1384:511:4;;;;;;;;;;;;;;;;;;192:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;274:25:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1477:361:5;;;;;;;;;;;;;;4850:545;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;795:23:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:112:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4459:276:5;;;;;;;;;;;;;;;;;;;;;;;;;;157:28:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;121:20:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2135:82:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3899:301:5;;;;;;;;;;;;;;;;;;;;;;;;;;5524:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:33:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:220:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;319:126:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;373:879:4;1006:22;;:::i;:::-;752:14;736:32;;718:14;:50;710:59;;;;;;;;820:12;804:30;;788:12;:46;780:55;;;;;;;;882:9;867:26;;854:9;:39;846:48;;;;;;;;937:19;;;;;;;;;;;915:42;;:10;:42;;;907:51;;;;;;;;969:26;977:7;986:8;969:7;:26::i;:::-;1031:172;;;;;;;;;1053:7;1031:172;;;;;;1083:14;1031:172;;;;;;1121:12;1031:172;;;;;;1156:9;1031:172;;;;;;1188:3;1031:172;;;;;1006:197;;1214:30;1226:8;1236:7;1214:11;:30::i;:::-;373:879;;;;;;:::o;887:114:2:-;934:4;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;583:6:2;;;;;;;;;;;575:15;;;;;;;;956:5;947:6;;:14;;;;;;;;;;;;;;;;;;968:9;;;;;;;;;;991:4;984:11;;887:114;:::o;1384:511:4:-;1506:14;1567:13;1523:16;:26;1540:8;1523:26;;;;;;;;;;;:33;;;;;;;;;;;;1506:50;;1583:25;1588:8;1598:9;1583:4;:25::i;:::-;1567:41;;1619:31;1629:10;1641:8;1619:9;:31::i;:::-;1725:19;;;;;;;;;;;1707:38;;:6;:38;;;1703:185;;;1841:5;1801:18;1836:1;1820:13;;:17;;;;;;;;1801:37;;;;;;;;;;:45;;;;1861:13;;:15;;;;;;;;;;;;;1703:185;1384:511;;;:::o;192:36::-;;;;;;;;;;;;;;;;;;;;:::o;274:25:2:-;;;;;;;;;;;;;:::o;1477:361:5:-;1524:18;1790:8;1553:19;;;;;;;;;;;1524:49;;1622:5;;;;;;;;;;;1608:19;;:10;:19;;;:60;;;;1658:10;1644:24;;:10;:24;;;1608:60;1586:93;;;;;;;;1801:10;:15;;:29;1817:4;:12;;;1801:29;;;;;;;;;;;;;;;;;;;;;;;1790:40;;1477:361;;:::o;4850:545::-;4953:14;4978:21;5010:19;5040:16;5067:17;5103:23;5129:16;:26;5146:8;5129:26;;;;;;;;;;;5103:52;;5174:21;5187:7;5174:12;:21::i;:::-;5166:30;;;;;;;;5229:7;:14;;;;;;;;;;;;5258:7;:21;;;;;;;;;;;;5294:7;:19;;;;;;;;;;;;5328:7;:16;;;;;;;;;;;;5359:7;:17;;;;;;;;;;;;5207:180;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4850:545;;;;;;;;:::o;795:23:1:-;;;;:::o;688:112:2:-;736:4;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;433:6:2;;;;;;;;;;;432:7;424:16;;;;;;;;758:4;749:6;;:13;;;;;;;;;;;;;;;;;;769:7;;;;;;;;;;790:4;783:11;;688:112;:::o;4459:276:5:-;4583:23;583:6:2;;;;;;;;;;;575:15;;;;;;;;287:5:18;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;4609:16:5;:26;4626:8;4609:26;;;;;;;;;;;4583:52;;4654:21;4667:7;4654:12;:21::i;:::-;4646:30;;;;;;;;4687:40;4702:8;4712:7;:14;;;;;;;;;;;;4687;:40::i;:::-;4459:276;;:::o;157:28:4:-;;;;:::o;121:20:18:-;;;;;;;;;;;;;:::o;2135:82:4:-;2181:4;2205;2198:11;;2135:82;:::o;3899:301:5:-;3974:23;4078:14;4000:16;:26;4017:8;4000:26;;;;;;;;;;;3974:52;;4045:21;4058:7;4045:12;:21::i;:::-;4037:30;;;;;;;;4095:7;:14;;;;;;;;;;;;4078:31;;4142:6;4128:20;;:10;:20;;;4120:29;;;;;;;;4160:32;4175:8;4185:6;4160:14;:32::i;:::-;3899:301;;;:::o;5524:259::-;5617:7;5642:23;5668:16;:26;5685:8;5668:26;;;;;;;;;;;5642:52;;5713:21;5726:7;5713:12;:21::i;:::-;5705:30;;;;;;;;5753:22;5767:7;5753:13;:22::i;:::-;5746:29;;5524:259;;;;:::o;626:33:1:-;;;;;;;;;;;;;:::o;1903:220:4:-;1958:7;1978:11;2009:9;1992:1;1978:15;;2021:1;2009:13;;2004:87;2028:1;2024;:5;2004:87;;;2058:18;2077:1;2058:21;;;;;;;;;;;2051:28;;;;2031:3;;;;;;;2004:87;;;2114:1;2108:3;:7;;;;;;;;2101:14;;1903:220;;;:::o;319:126:18:-;287:5;;;;;;;;;;;273:19;;:10;:19;;;265:28;;;;;;;;403:1;383:22;;:8;:22;;;;379:61;;;424:8;416:5;;:16;;;;;;;;;;;;;;;;;;379:61;319:126;:::o;1804:179:1:-;1919:19;;;;;;;;;;;:32;;;1952:6;1960:4;1966:8;1919:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1804:179;;:::o;2621:502::-;2854:9;2833:8;:17;;;:30;;;;2825:39;;;;;;;;2906:8;2877:16;:26;2894:8;2877:26;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2927:188;2964:8;2996;:22;;;2988:31;;3042:8;:20;;;3034:29;;3086:8;:17;;;3078:26;;2927:188;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2621:502;;:::o;3480:2787::-;3568:7;3643:23;4094:13;4279:14;4496:21;4532:22;5842:17;3669:16;:26;3686:8;3669:26;;;;;;;;;;;3643:52;;3982:21;3995:7;3982:12;:21::i;:::-;3974:30;;;;;;;;4110:22;4124:7;4110:13;:22::i;:::-;4094:38;;4165:5;4151:10;:19;;4143:28;;;;;;;;4296:7;:14;;;;;;;;;;;;4279:31;;4459:24;4474:8;4459:14;:24::i;:::-;4520:1;4496:25;;4557:1;4532:26;;4643:1;4635:5;:9;4631:918;;;4860:18;4872:5;4860:11;:18::i;:::-;4844:34;;4918:13;4910:5;:21;4893:38;;5506:6;:15;;:31;5522:14;5506:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4631:918;5875:5;5862:10;:18;5842:38;;6085:10;:19;;:30;6105:9;6085:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6156:78;6174:8;6184:14;6200:13;6215:10;6227:6;6156:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6254:5;6247:12;;3480:2787;;;;;;;;;;:::o;2221:177::-;2341:19;;;;;;;;;;;:28;;;2370:9;2381:8;2341:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2221:177;;:::o;6598:127::-;6669:4;6715:1;6694:8;:18;;;;;;;;;;;;:22;;;6686:31;;6598:127;;;:::o;3181:187::-;3260:24;3275:8;3260:14;:24::i;:::-;3295:28;3305:7;3314:8;3295:9;:28::i;:::-;3334:26;3351:8;3334:26;;;;;;;;;;;;;;;;;;3181:187;;:::o;7026:645::-;7125:7;7150:21;7174:1;7150:25;;7394:8;:18;;;;;;;;;;;;7388:24;;:3;:24;7384:97;;;7451:8;:18;;;;;;;;;;;;7445:24;;:3;:24;7429:40;;7384:97;7500:163;7535:8;:22;;;;;;;;;;;;7500:163;;7572:8;:20;;;;;;;;;;;;7500:163;;7607:8;:17;;;;;;;;;;;;7500:163;;7639:13;7500:20;:163::i;:::-;7493:170;;7026:645;;;;:::o;6389:103::-;6458:16;:26;6475:8;6458:26;;;;;;;;;;;;6451:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6389:103;:::o;9671:489::-;9731:7;10147:5;10136:8;;10127:6;:17;:25;;;;;;;;10120:32;;9671:489;;;:::o;7925:1648::-;8137:7;8844:23;9164:25;9444:19;8511:9;8493:14;:27;;8489:1077;;;8672:12;8665:19;;;;8489:1077;8900:14;8877:12;8870:45;8844:71;;9243:9;9218:14;9192:16;:41;:61;;;;;;;;9164:89;;9491:18;9473:14;9466:43;9444:65;;9541:12;9526:28;;7925:1648;;;;;;;;;;:::o;59:2163:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\r\n\r\nimport \"./AuctionTime.sol\";\r\n\r\ncontract AuctionSell is AuctionTime {\r\n\r\n    // Tracks last 5 sale price of gen0 kitty sales\r\n    uint256 public gen0SaleCount;\r\n    uint256[5] public lastGen0SalePrices;\r\n\r\n    // Delegate constructor\r\n    function AuctionSell(address _nftAddr, uint256 _cut) public\r\n        AuctionTime(_nftAddr, _cut) {}\r\n\r\n    function createAuction(\r\n        uint256 _tokenId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        address _seller\r\n    )\r\n        external\r\n    {\r\n        // Sanity check that no inputs overflow how many bits we've allocated\r\n        // to store them in the auction struct.\r\n        require(_startingPrice == uint256(uint128(_startingPrice)));\r\n        require(_endingPrice == uint256(uint128(_endingPrice)));\r\n        require(_duration == uint256(uint64(_duration)));\r\n\r\n        require(msg.sender == address(nonFungibleContract));\r\n        _escrow(_seller, _tokenId);\r\n        Auction memory auction = Auction(\r\n            _seller,\r\n            uint128(_startingPrice),\r\n            uint128(_endingPrice),\r\n            uint64(_duration),\r\n            uint64(now)\r\n        );\r\n        _addAuction(_tokenId, auction);\r\n    }\r\n\r\n    /// @dev Updates lastSalePrice if seller is the nft contract\r\n    /// Otherwise, works the same as default bid method.\r\n    function bid(uint256 _tokenId)\r\n        external\r\n        payable\r\n    {\r\n        // _bid verifies token ID size\r\n        address seller = tokenIdToAuction[_tokenId].seller;\r\n        uint256 price = _bid(_tokenId, msg.value);\r\n        _transfer(msg.sender, _tokenId);\r\n\r\n        // If not a gen0 auction, exit\r\n        if (seller == address(nonFungibleContract)) {\r\n            // Track gen0 sale prices\r\n            lastGen0SalePrices[gen0SaleCount % 5] = price;\r\n            gen0SaleCount++;\r\n        }\r\n    }\r\n\r\n    function averageGen0SalePrice() external view returns (uint256) {\r\n        uint256 sum = 0;\r\n        for (uint256 i = 0; i < 5; i++) {\r\n            sum += lastGen0SalePrices[i];\r\n        }\r\n        return sum / 5;\r\n    }\r\n    \r\n    function isAuctionSell() public pure returns (bool) {\r\n        return true;\r\n    }\r\n\r\n}",
  "sourcePath": "C:\\DEV\\git\\crypton_contracts\\contracts\\AuctionSell.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/C/DEV/git/crypton_contracts/contracts/AuctionSell.sol",
      "exportedSymbols": {
        "AuctionSell": [
          1171
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 983,
        "name": "PragmaDirective",
        "src": "0:24:4"
      },
      {
        "attributes": {
          "SourceUnit": 1481,
          "absolutePath": "/C/DEV/git/crypton_contracts/contracts/AuctionTime.sol",
          "file": "./AuctionTime.sol",
          "scope": 1172,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 984,
        "name": "ImportDirective",
        "src": "28:27:4"
      },
      {
        "attributes": {
          "contractDependencies": [
            773,
            841,
            1480,
            5244
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1171,
            1480,
            773,
            841,
            5244
          ],
          "name": "AuctionSell",
          "scope": 1172
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AuctionTime",
                  "referencedDeclaration": 1480,
                  "type": "contract AuctionTime"
                },
                "id": 985,
                "name": "UserDefinedTypeName",
                "src": "83:11:4"
              }
            ],
            "id": 986,
            "name": "InheritanceSpecifier",
            "src": "83:11:4"
          },
          {
            "attributes": {
              "constant": false,
              "name": "gen0SaleCount",
              "scope": 1171,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 987,
                "name": "ElementaryTypeName",
                "src": "157:7:4"
              }
            ],
            "id": 988,
            "name": "VariableDeclaration",
            "src": "157:28:4"
          },
          {
            "attributes": {
              "constant": false,
              "name": "lastGen0SalePrices",
              "scope": 1171,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256[5] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "uint256[5] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 989,
                    "name": "ElementaryTypeName",
                    "src": "192:7:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "35",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 5",
                      "value": "5"
                    },
                    "id": 990,
                    "name": "Literal",
                    "src": "200:1:4"
                  }
                ],
                "id": 991,
                "name": "ArrayTypeName",
                "src": "192:10:4"
              }
            ],
            "id": 992,
            "name": "VariableDeclaration",
            "src": "192:36:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "AuctionSell",
              "payable": false,
              "scope": 1171,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_nftAddr",
                      "scope": 1004,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 993,
                        "name": "ElementaryTypeName",
                        "src": "287:7:4"
                      }
                    ],
                    "id": 994,
                    "name": "VariableDeclaration",
                    "src": "287:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_cut",
                      "scope": 1004,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 995,
                        "name": "ElementaryTypeName",
                        "src": "305:7:4"
                      }
                    ],
                    "id": 996,
                    "name": "VariableDeclaration",
                    "src": "305:12:4"
                  }
                ],
                "id": 997,
                "name": "ParameterList",
                "src": "286:32:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1002,
                "name": "ParameterList",
                "src": "363:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1480,
                      "type": "type(contract AuctionTime)",
                      "value": "AuctionTime"
                    },
                    "id": 998,
                    "name": "Identifier",
                    "src": "335:11:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 994,
                      "type": "address",
                      "value": "_nftAddr"
                    },
                    "id": 999,
                    "name": "Identifier",
                    "src": "347:8:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 996,
                      "type": "uint256",
                      "value": "_cut"
                    },
                    "id": 1000,
                    "name": "Identifier",
                    "src": "357:4:4"
                  }
                ],
                "id": 1001,
                "name": "ModifierInvocation",
                "src": "335:27:4"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 1003,
                "name": "Block",
                "src": "363:2:4"
              }
            ],
            "id": 1004,
            "name": "FunctionDefinition",
            "src": "266:99:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createAuction",
              "payable": false,
              "scope": 1171,
              "stateMutability": "nonpayable",
              "superFunction": 1332,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 1085,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1005,
                        "name": "ElementaryTypeName",
                        "src": "406:7:4"
                      }
                    ],
                    "id": 1006,
                    "name": "VariableDeclaration",
                    "src": "406:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_startingPrice",
                      "scope": 1085,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1007,
                        "name": "ElementaryTypeName",
                        "src": "433:7:4"
                      }
                    ],
                    "id": 1008,
                    "name": "VariableDeclaration",
                    "src": "433:22:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_endingPrice",
                      "scope": 1085,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1009,
                        "name": "ElementaryTypeName",
                        "src": "466:7:4"
                      }
                    ],
                    "id": 1010,
                    "name": "VariableDeclaration",
                    "src": "466:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_duration",
                      "scope": 1085,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1011,
                        "name": "ElementaryTypeName",
                        "src": "497:7:4"
                      }
                    ],
                    "id": 1012,
                    "name": "VariableDeclaration",
                    "src": "497:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_seller",
                      "scope": 1085,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1013,
                        "name": "ElementaryTypeName",
                        "src": "525:7:4"
                      }
                    ],
                    "id": 1014,
                    "name": "VariableDeclaration",
                    "src": "525:15:4"
                  }
                ],
                "id": 1015,
                "name": "ParameterList",
                "src": "395:152:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1016,
                "name": "ParameterList",
                "src": "571:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1017,
                            "name": "Identifier",
                            "src": "710:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1008,
                                  "type": "uint256",
                                  "value": "_startingPrice"
                                },
                                "id": 1018,
                                "name": "Identifier",
                                "src": "718:14:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 1019,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "736:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 1020,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "744:7:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1008,
                                          "type": "uint256",
                                          "value": "_startingPrice"
                                        },
                                        "id": 1021,
                                        "name": "Identifier",
                                        "src": "752:14:4"
                                      }
                                    ],
                                    "id": 1022,
                                    "name": "FunctionCall",
                                    "src": "744:23:4"
                                  }
                                ],
                                "id": 1023,
                                "name": "FunctionCall",
                                "src": "736:32:4"
                              }
                            ],
                            "id": 1024,
                            "name": "BinaryOperation",
                            "src": "718:50:4"
                          }
                        ],
                        "id": 1025,
                        "name": "FunctionCall",
                        "src": "710:59:4"
                      }
                    ],
                    "id": 1026,
                    "name": "ExpressionStatement",
                    "src": "710:59:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1027,
                            "name": "Identifier",
                            "src": "780:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1010,
                                  "type": "uint256",
                                  "value": "_endingPrice"
                                },
                                "id": 1028,
                                "name": "Identifier",
                                "src": "788:12:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 1029,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "804:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 1030,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "812:7:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1010,
                                          "type": "uint256",
                                          "value": "_endingPrice"
                                        },
                                        "id": 1031,
                                        "name": "Identifier",
                                        "src": "820:12:4"
                                      }
                                    ],
                                    "id": 1032,
                                    "name": "FunctionCall",
                                    "src": "812:21:4"
                                  }
                                ],
                                "id": 1033,
                                "name": "FunctionCall",
                                "src": "804:30:4"
                              }
                            ],
                            "id": 1034,
                            "name": "BinaryOperation",
                            "src": "788:46:4"
                          }
                        ],
                        "id": 1035,
                        "name": "FunctionCall",
                        "src": "780:55:4"
                      }
                    ],
                    "id": 1036,
                    "name": "ExpressionStatement",
                    "src": "780:55:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1037,
                            "name": "Identifier",
                            "src": "846:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1012,
                                  "type": "uint256",
                                  "value": "_duration"
                                },
                                "id": 1038,
                                "name": "Identifier",
                                "src": "854:9:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint64",
                                          "typeString": "uint64"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 1039,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "867:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint64",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint64)",
                                          "value": "uint64"
                                        },
                                        "id": 1040,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "875:6:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1012,
                                          "type": "uint256",
                                          "value": "_duration"
                                        },
                                        "id": 1041,
                                        "name": "Identifier",
                                        "src": "882:9:4"
                                      }
                                    ],
                                    "id": 1042,
                                    "name": "FunctionCall",
                                    "src": "875:17:4"
                                  }
                                ],
                                "id": 1043,
                                "name": "FunctionCall",
                                "src": "867:26:4"
                              }
                            ],
                            "id": 1044,
                            "name": "BinaryOperation",
                            "src": "854:39:4"
                          }
                        ],
                        "id": 1045,
                        "name": "FunctionCall",
                        "src": "846:48:4"
                      }
                    ],
                    "id": 1046,
                    "name": "ExpressionStatement",
                    "src": "846:48:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1047,
                            "name": "Identifier",
                            "src": "907:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5336,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1048,
                                    "name": "Identifier",
                                    "src": "915:3:4"
                                  }
                                ],
                                "id": 1049,
                                "name": "MemberAccess",
                                "src": "915:10:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_ERC721_$5324",
                                          "typeString": "contract ERC721"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 1050,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "929:7:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 402,
                                      "type": "contract ERC721",
                                      "value": "nonFungibleContract"
                                    },
                                    "id": 1051,
                                    "name": "Identifier",
                                    "src": "937:19:4"
                                  }
                                ],
                                "id": 1052,
                                "name": "FunctionCall",
                                "src": "929:28:4"
                              }
                            ],
                            "id": 1053,
                            "name": "BinaryOperation",
                            "src": "915:42:4"
                          }
                        ],
                        "id": 1054,
                        "name": "FunctionCall",
                        "src": "907:51:4"
                      }
                    ],
                    "id": 1055,
                    "name": "ExpressionStatement",
                    "src": "907:51:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 468,
                              "type": "function (address,uint256)",
                              "value": "_escrow"
                            },
                            "id": 1056,
                            "name": "Identifier",
                            "src": "969:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1014,
                              "type": "address",
                              "value": "_seller"
                            },
                            "id": 1057,
                            "name": "Identifier",
                            "src": "977:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1006,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 1058,
                            "name": "Identifier",
                            "src": "986:8:4"
                          }
                        ],
                        "id": 1059,
                        "name": "FunctionCall",
                        "src": "969:26:4"
                      }
                    ],
                    "id": 1060,
                    "name": "ExpressionStatement",
                    "src": "969:26:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1062
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "auction",
                          "scope": 1085,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct AuctionBase.Auction memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Auction",
                              "referencedDeclaration": 400,
                              "type": "struct AuctionBase.Auction storage pointer"
                            },
                            "id": 1061,
                            "name": "UserDefinedTypeName",
                            "src": "1006:7:4"
                          }
                        ],
                        "id": 1062,
                        "name": "VariableDeclaration",
                        "src": "1006:22:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct AuctionBase.Auction memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                },
                                {
                                  "typeIdentifier": "t_uint64",
                                  "typeString": "uint64"
                                },
                                {
                                  "typeIdentifier": "t_uint64",
                                  "typeString": "uint64"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 400,
                              "type": "type(struct AuctionBase.Auction storage pointer)",
                              "value": "Auction"
                            },
                            "id": 1063,
                            "name": "Identifier",
                            "src": "1031:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1014,
                              "type": "address",
                              "value": "_seller"
                            },
                            "id": 1064,
                            "name": "Identifier",
                            "src": "1053:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint128",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 1065,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1075:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1008,
                                  "type": "uint256",
                                  "value": "_startingPrice"
                                },
                                "id": 1066,
                                "name": "Identifier",
                                "src": "1083:14:4"
                              }
                            ],
                            "id": 1067,
                            "name": "FunctionCall",
                            "src": "1075:23:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint128",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 1068,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1113:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1010,
                                  "type": "uint256",
                                  "value": "_endingPrice"
                                },
                                "id": 1069,
                                "name": "Identifier",
                                "src": "1121:12:4"
                              }
                            ],
                            "id": 1070,
                            "name": "FunctionCall",
                            "src": "1113:21:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint64",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint64)",
                                  "value": "uint64"
                                },
                                "id": 1071,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1149:6:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1012,
                                  "type": "uint256",
                                  "value": "_duration"
                                },
                                "id": 1072,
                                "name": "Identifier",
                                "src": "1156:9:4"
                              }
                            ],
                            "id": 1073,
                            "name": "FunctionCall",
                            "src": "1149:17:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint64",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint64)",
                                  "value": "uint64"
                                },
                                "id": 1074,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1181:6:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5338,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 1075,
                                "name": "Identifier",
                                "src": "1188:3:4"
                              }
                            ],
                            "id": 1076,
                            "name": "FunctionCall",
                            "src": "1181:11:4"
                          }
                        ],
                        "id": 1077,
                        "name": "FunctionCall",
                        "src": "1031:172:4"
                      }
                    ],
                    "id": 1078,
                    "name": "VariableDeclarationStatement",
                    "src": "1006:197:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_struct$_Auction_$400_memory_ptr",
                                  "typeString": "struct AuctionBase.Auction memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 522,
                              "type": "function (uint256,struct AuctionBase.Auction memory)",
                              "value": "_addAuction"
                            },
                            "id": 1079,
                            "name": "Identifier",
                            "src": "1214:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1006,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 1080,
                            "name": "Identifier",
                            "src": "1226:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1062,
                              "type": "struct AuctionBase.Auction memory",
                              "value": "auction"
                            },
                            "id": 1081,
                            "name": "Identifier",
                            "src": "1236:7:4"
                          }
                        ],
                        "id": 1082,
                        "name": "FunctionCall",
                        "src": "1214:30:4"
                      }
                    ],
                    "id": 1083,
                    "name": "ExpressionStatement",
                    "src": "1214:30:4"
                  }
                ],
                "id": 1084,
                "name": "Block",
                "src": "571:681:4"
              }
            ],
            "id": 1085,
            "name": "FunctionDefinition",
            "src": "373:879:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "bid",
              "payable": true,
              "scope": 1171,
              "stateMutability": "payable",
              "superFunction": 1352,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 1130,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1086,
                        "name": "ElementaryTypeName",
                        "src": "1397:7:4"
                      }
                    ],
                    "id": 1087,
                    "name": "VariableDeclaration",
                    "src": "1397:16:4"
                  }
                ],
                "id": 1088,
                "name": "ParameterList",
                "src": "1396:18:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1089,
                "name": "ParameterList",
                "src": "1455:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1091
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "seller",
                          "scope": 1130,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 1090,
                            "name": "ElementaryTypeName",
                            "src": "1506:7:4"
                          }
                        ],
                        "id": 1091,
                        "name": "VariableDeclaration",
                        "src": "1506:14:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "seller",
                          "referencedDeclaration": 391,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct AuctionBase.Auction storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 408,
                                  "type": "mapping(uint256 => struct AuctionBase.Auction storage ref)",
                                  "value": "tokenIdToAuction"
                                },
                                "id": 1092,
                                "name": "Identifier",
                                "src": "1523:16:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1087,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 1093,
                                "name": "Identifier",
                                "src": "1540:8:4"
                              }
                            ],
                            "id": 1094,
                            "name": "IndexAccess",
                            "src": "1523:26:4"
                          }
                        ],
                        "id": 1095,
                        "name": "MemberAccess",
                        "src": "1523:33:4"
                      }
                    ],
                    "id": 1096,
                    "name": "VariableDeclarationStatement",
                    "src": "1506:50:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1098
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "price",
                          "scope": 1130,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 1097,
                            "name": "ElementaryTypeName",
                            "src": "1567:7:4"
                          }
                        ],
                        "id": 1098,
                        "name": "VariableDeclaration",
                        "src": "1567:13:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 642,
                              "type": "function (uint256,uint256) returns (uint256)",
                              "value": "_bid"
                            },
                            "id": 1099,
                            "name": "Identifier",
                            "src": "1583:4:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1087,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 1100,
                            "name": "Identifier",
                            "src": "1588:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1101,
                                "name": "Identifier",
                                "src": "1598:3:4"
                              }
                            ],
                            "id": 1102,
                            "name": "MemberAccess",
                            "src": "1598:9:4"
                          }
                        ],
                        "id": 1103,
                        "name": "FunctionCall",
                        "src": "1583:25:4"
                      }
                    ],
                    "id": 1104,
                    "name": "VariableDeclarationStatement",
                    "src": "1567:41:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 483,
                              "type": "function (address,uint256)",
                              "value": "_transfer"
                            },
                            "id": 1105,
                            "name": "Identifier",
                            "src": "1619:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1106,
                                "name": "Identifier",
                                "src": "1629:3:4"
                              }
                            ],
                            "id": 1107,
                            "name": "MemberAccess",
                            "src": "1629:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1087,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 1108,
                            "name": "Identifier",
                            "src": "1641:8:4"
                          }
                        ],
                        "id": 1109,
                        "name": "FunctionCall",
                        "src": "1619:31:4"
                      }
                    ],
                    "id": 1110,
                    "name": "ExpressionStatement",
                    "src": "1619:31:4"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1091,
                              "type": "address",
                              "value": "seller"
                            },
                            "id": 1111,
                            "name": "Identifier",
                            "src": "1707:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC721_$5324",
                                      "typeString": "contract ERC721"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 1112,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1717:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 402,
                                  "type": "contract ERC721",
                                  "value": "nonFungibleContract"
                                },
                                "id": 1113,
                                "name": "Identifier",
                                "src": "1725:19:4"
                              }
                            ],
                            "id": 1114,
                            "name": "FunctionCall",
                            "src": "1717:28:4"
                          }
                        ],
                        "id": 1115,
                        "name": "BinaryOperation",
                        "src": "1707:38:4"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 992,
                                          "type": "uint256[5] storage ref",
                                          "value": "lastGen0SalePrices"
                                        },
                                        "id": 1116,
                                        "name": "Identifier",
                                        "src": "1801:18:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "%",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 988,
                                              "type": "uint256",
                                              "value": "gen0SaleCount"
                                            },
                                            "id": 1117,
                                            "name": "Identifier",
                                            "src": "1820:13:4"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "35",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 5",
                                              "value": "5"
                                            },
                                            "id": 1118,
                                            "name": "Literal",
                                            "src": "1836:1:4"
                                          }
                                        ],
                                        "id": 1119,
                                        "name": "BinaryOperation",
                                        "src": "1820:17:4"
                                      }
                                    ],
                                    "id": 1120,
                                    "name": "IndexAccess",
                                    "src": "1801:37:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1098,
                                      "type": "uint256",
                                      "value": "price"
                                    },
                                    "id": 1121,
                                    "name": "Identifier",
                                    "src": "1841:5:4"
                                  }
                                ],
                                "id": 1122,
                                "name": "Assignment",
                                "src": "1801:45:4"
                              }
                            ],
                            "id": 1123,
                            "name": "ExpressionStatement",
                            "src": "1801:45:4"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 988,
                                      "type": "uint256",
                                      "value": "gen0SaleCount"
                                    },
                                    "id": 1124,
                                    "name": "Identifier",
                                    "src": "1861:13:4"
                                  }
                                ],
                                "id": 1125,
                                "name": "UnaryOperation",
                                "src": "1861:15:4"
                              }
                            ],
                            "id": 1126,
                            "name": "ExpressionStatement",
                            "src": "1861:15:4"
                          }
                        ],
                        "id": 1127,
                        "name": "Block",
                        "src": "1747:141:4"
                      }
                    ],
                    "id": 1128,
                    "name": "IfStatement",
                    "src": "1703:185:4"
                  }
                ],
                "id": 1129,
                "name": "Block",
                "src": "1455:440:4"
              }
            ],
            "id": 1130,
            "name": "FunctionDefinition",
            "src": "1384:511:4"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "averageGen0SalePrice",
              "payable": false,
              "scope": 1171,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1131,
                "name": "ParameterList",
                "src": "1932:2:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1162,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1132,
                        "name": "ElementaryTypeName",
                        "src": "1958:7:4"
                      }
                    ],
                    "id": 1133,
                    "name": "VariableDeclaration",
                    "src": "1958:7:4"
                  }
                ],
                "id": 1134,
                "name": "ParameterList",
                "src": "1957:9:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1136
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "sum",
                          "scope": 1162,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 1135,
                            "name": "ElementaryTypeName",
                            "src": "1978:7:4"
                          }
                        ],
                        "id": 1136,
                        "name": "VariableDeclaration",
                        "src": "1978:11:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 1137,
                        "name": "Literal",
                        "src": "1992:1:4"
                      }
                    ],
                    "id": 1138,
                    "name": "VariableDeclarationStatement",
                    "src": "1978:15:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            1140
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 1162,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint256",
                                  "type": "uint256"
                                },
                                "id": 1139,
                                "name": "ElementaryTypeName",
                                "src": "2009:7:4"
                              }
                            ],
                            "id": 1140,
                            "name": "VariableDeclaration",
                            "src": "2009:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1141,
                            "name": "Literal",
                            "src": "2021:1:4"
                          }
                        ],
                        "id": 1142,
                        "name": "VariableDeclarationStatement",
                        "src": "2009:13:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1140,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 1143,
                            "name": "Identifier",
                            "src": "2024:1:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "35",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 5",
                              "value": "5"
                            },
                            "id": 1144,
                            "name": "Literal",
                            "src": "2028:1:4"
                          }
                        ],
                        "id": 1145,
                        "name": "BinaryOperation",
                        "src": "2024:5:4"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1140,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 1146,
                                "name": "Identifier",
                                "src": "2031:1:4"
                              }
                            ],
                            "id": 1147,
                            "name": "UnaryOperation",
                            "src": "2031:3:4"
                          }
                        ],
                        "id": 1148,
                        "name": "ExpressionStatement",
                        "src": "2031:3:4"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1136,
                                      "type": "uint256",
                                      "value": "sum"
                                    },
                                    "id": 1149,
                                    "name": "Identifier",
                                    "src": "2051:3:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 992,
                                          "type": "uint256[5] storage ref",
                                          "value": "lastGen0SalePrices"
                                        },
                                        "id": 1150,
                                        "name": "Identifier",
                                        "src": "2058:18:4"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1140,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 1151,
                                        "name": "Identifier",
                                        "src": "2077:1:4"
                                      }
                                    ],
                                    "id": 1152,
                                    "name": "IndexAccess",
                                    "src": "2058:21:4"
                                  }
                                ],
                                "id": 1153,
                                "name": "Assignment",
                                "src": "2051:28:4"
                              }
                            ],
                            "id": 1154,
                            "name": "ExpressionStatement",
                            "src": "2051:28:4"
                          }
                        ],
                        "id": 1155,
                        "name": "Block",
                        "src": "2036:55:4"
                      }
                    ],
                    "id": 1156,
                    "name": "ForStatement",
                    "src": "2004:87:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1134
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1136,
                              "type": "uint256",
                              "value": "sum"
                            },
                            "id": 1157,
                            "name": "Identifier",
                            "src": "2108:3:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "35",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 5",
                              "value": "5"
                            },
                            "id": 1158,
                            "name": "Literal",
                            "src": "2114:1:4"
                          }
                        ],
                        "id": 1159,
                        "name": "BinaryOperation",
                        "src": "2108:7:4"
                      }
                    ],
                    "id": 1160,
                    "name": "Return",
                    "src": "2101:14:4"
                  }
                ],
                "id": 1161,
                "name": "Block",
                "src": "1967:156:4"
              }
            ],
            "id": 1162,
            "name": "FunctionDefinition",
            "src": "1903:220:4"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuctionSell",
              "payable": false,
              "scope": 1171,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1163,
                "name": "ParameterList",
                "src": "2157:2:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1170,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1164,
                        "name": "ElementaryTypeName",
                        "src": "2181:4:4"
                      }
                    ],
                    "id": 1165,
                    "name": "VariableDeclaration",
                    "src": "2181:4:4"
                  }
                ],
                "id": 1166,
                "name": "ParameterList",
                "src": "2180:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1166
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 1167,
                        "name": "Literal",
                        "src": "2205:4:4"
                      }
                    ],
                    "id": 1168,
                    "name": "Return",
                    "src": "2198:11:4"
                  }
                ],
                "id": 1169,
                "name": "Block",
                "src": "2187:30:4"
              }
            ],
            "id": 1170,
            "name": "FunctionDefinition",
            "src": "2135:82:4"
          }
        ],
        "id": 1171,
        "name": "ContractDefinition",
        "src": "59:2163:4"
      }
    ],
    "id": 1172,
    "name": "SourceUnit",
    "src": "0:2222:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5778": {
      "events": {
        "0xa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba7": {
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
        "0x58acf5142cf3c1142a47df82b24df03444dab0e72336122ece2bfc3186c89cd8": {
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
        "0x2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df": {
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
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x30753e4a8aad7f8597332e813735def5dd395028"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T07:22:20.859Z"
},
	"EntityCore" :{
  "contractName": "EntityCore",
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
  ],
  "bytecode": "0x60606040526000600360146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600560146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550611c206005601c6101000a81548163ffffffff021916908363ffffffff160217905550600f6006556000600760006101000a81548160ff0219169083151502179055506000600760016101000a81548160ff0219169083151502179055506101c060405190810160405280603c63ffffffff1663ffffffff168152602001607863ffffffff1663ffffffff16815260200161012c63ffffffff1663ffffffff16815260200161025863ffffffff1663ffffffff16815260200161070863ffffffff1663ffffffff168152602001610e1063ffffffff1663ffffffff168152602001611c2063ffffffff1663ffffffff16815260200161384063ffffffff1663ffffffff16815260200161708063ffffffff1663ffffffff16815260200161e10063ffffffff1663ffffffff1681526020016201518063ffffffff1663ffffffff1681526020016202a30063ffffffff1663ffffffff1681526020016205460063ffffffff1663ffffffff16815260200162093a8063ffffffff1663ffffffff16815250600890600e62000217929190620008b5565b5034156200022457600080fd5b6000600760006101000a81548160ff0219169083151502179055506000600760016101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200036260008060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000620003696401000000000262004d6a176401000000009004565b5062000b0d565b600080620003766200095f565b60008863ffffffff16891415156200038d57600080fd5b8763ffffffff1688141515620003a257600080fd5b8661ffff1687141515620003b557600080fd5b600287811515620003c257fe5b049250600d8361ffff161115620003d857600d92505b610100604051908101604052808781526020014267ffffffffffffffff168152602001600067ffffffffffffffff1681526020018a63ffffffff1681526020018963ffffffff168152602001600063ffffffff1681526020018461ffff1681526020018861ffff1681525091506001600a80548060010182816200045d9190620009d3565b916000526020600020906002020160008590919091506000820151816000015560208201518160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060408201518160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160010160106101000a81548163ffffffff021916908363ffffffff16021790555060808201518160010160146101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160010160186101000a81548163ffffffff021916908363ffffffff16021790555060c082015181600101601c6101000a81548161ffff021916908361ffff16021790555060e082015181600101601e6101000a81548161ffff021916908361ffff16021790555050500390508063ffffffff1681141515620005b057600080fd5b7f0a5311bd2a6608f08a180df2ee7c5946819a649b204b554bb8e39825b2c50ad58582846060015163ffffffff16856080015163ffffffff168660000151604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a16200066d600086836200067c640100000000026200447b176401000000009004565b80935050505095945050505050565b600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600b600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156200081157600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600e600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600d600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef838383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050565b82600e6007016008900481019282156200094c5791602002820160005b838211156200091857835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302620008d2565b80156200094a5782816101000a81549063ffffffff021916905560040160208160030104928301926001030262000918565b505b5090506200095b919062000a08565b5090565b6101006040519081016040528060008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600061ffff168152602001600061ffff1681525090565b81548183558181151162000a035760020281600202836000526020600020918201910162000a02919062000a3e565b5b505050565b62000a3b91905b8082111562000a3757600081816101000a81549063ffffffff02191690555060010162000a0f565b5090565b90565b62000b0a91905b8082111562000b06576000808201600090556001820160006101000a81549067ffffffffffffffff02191690556001820160086101000a81549067ffffffffffffffff02191690556001820160106101000a81549063ffffffff02191690556001820160146101000a81549063ffffffff02191690556001820160186101000a81549063ffffffff021916905560018201601c6101000a81549061ffff021916905560018201601e6101000a81549061ffff02191690555060020162000a45565b5090565b90565b6154238062000b1d6000396000f300606060405260043610610288576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461033e5780630519ce791461039857806306fdde03146103ed578063095ea7b31461047b5780630a0f8168146104bd5780630a5c0814146105125780630e583df01461054b57806314a4d1b81461057457806318160ddd146105c9578063186601ca146105f25780631940a9361461061f57806319c2f2011461065a57806321447f8d1461068357806323b872dd146106bc5780632ca751e01461071d5780632e13d50d146107325780632f70a95c1461076b57806349289267146107945780634ba081cf146107c05780634be7fb00146108235780634d83cccc1461089a5780634fb6270e146108bb57806359d3ce47146108f45780635a0f4d54146109095780635fd8c710146109475780636352211e1461095c57806365a34be3146109bf5780636af04a57146109f857806370a0823114610a4d5780637158798814610a9a5780637a7d493714610ad35780637f5c3d7f14610afc5780638462151c14610b3e57806388c2a0bf14610bcc5780638fe9ca1e14610c0357806391876e5714610c4557806394a53d4114610c5a57806395d89b4114610c875780639c478c7b14610d155780639d6fac6f14610d78578063a064c05714610dbb578063a2dd9dd314610df9578063a9059cbb14610e3d578063b047fb5014610e7f578063b3a2784214610ed4578063bd1d041f14610f52578063c2a8834014610fa7578063c3bea9af14610fbc578063cf22d90f14610fdf578063d21baab814611037578063d3e6f49f14611070578063d67545eb146110ab578063daf849e314611100578063e2cc028d14611139575b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103315750601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561033c57600080fd5b005b341561034957600080fd5b61037e60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909190505061119c565b604051808215151515815260200191505060405180910390f35b34156103a357600080fd5b6103ab6114ad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103f857600080fd5b6104006114d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610440578082015181840152602081019050610425565b50505050905090810190601f16801561046d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561048657600080fd5b6104bb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061150c565b005b34156104c857600080fd5b6104d0611600565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561051d57600080fd5b610549600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611625565b005b341561055657600080fd5b61055e6116ca565b6040518082815260200191505060405180910390f35b341561057f57600080fd5b6105876116d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105d457600080fd5b6105dc6116fb565b6040518082815260200191505060405180910390f35b34156105fd57600080fd5b61060561170b565b604051808215151515815260200191505060405180910390f35b341561062a57600080fd5b610640600480803590602001909190505061171e565b604051808215151515815260200191505060405180910390f35b341561066557600080fd5b61066d611770565b6040518082815260200191505060405180910390f35b341561068e57600080fd5b6106ba600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611777565b005b34156106c757600080fd5b61071b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506118d1565b005b341561072857600080fd5b6107306119b4565b005b341561073d57600080fd5b610769600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611a48565b005b341561077657600080fd5b61077e611ba1565b6040518082815260200191505060405180910390f35b341561079f57600080fd5b6107be6004808035906020019091908035906020019091905050611bac565b005b34156107cb57600080fd5b6107e16004808035906020019091905050611edb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561082e57600080fd5b610898600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f0e565b005b6108b96004808035906020019091908035906020019091905050612124565b005b34156108c657600080fd5b6108f2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612304565b005b34156108ff57600080fd5b6109076124b6565b005b341561091457600080fd5b61094560048080359060200190919080359060200190919080359060200190919080359060200190919050506126ae565b005b341561095257600080fd5b61095a612815565b005b341561096757600080fd5b61097d60048080359060200190919050506128e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156109ca57600080fd5b6109f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612961565b005b3415610a0357600080fd5b610a0b612b12565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610a5857600080fd5b610a84600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612b38565b6040518082815260200191505060405180910390f35b3415610aa557600080fd5b610ad1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612b81565b005b3415610ade57600080fd5b610ae6612c9f565b6040518082815260200191505060405180910390f35b3415610b0757600080fd5b610b3c600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612ca5565b005b3415610b4957600080fd5b610b75600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612d76565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610bb8578082015181840152602081019050610b9d565b505050509050019250505060405180910390f35b3415610bd757600080fd5b610bed6004808035906020019091905050612ead565b6040518082815260200191505060405180910390f35b3415610c0e57600080fd5b610c43600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050613241565b005b3415610c5057600080fd5b610c586132c7565b005b3415610c6557600080fd5b610c6d613506565b604051808215151515815260200191505060405180910390f35b3415610c9257600080fd5b610c9a613519565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cda578082015181840152602081019050610cbf565b50505050905090810190601f168015610d075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2057600080fd5b610d366004808035906020019091905050613552565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610d8357600080fd5b610d996004808035906020019091905050613585565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3415610dc657600080fd5b610df760048080359060200190919080359060200190919080359060200190919080359060200190919050506135b4565b005b3415610e0457600080fd5b610e23600480803590602001909190803590602001909190505061371a565b604051808215151515815260200191505060405180910390f35b3415610e4857600080fd5b610e7d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506137a2565b005b3415610e8a57600080fd5b610e9261386f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610edf57600080fd5b610ef56004808035906020019091905050613895565b604051808b1515151581526020018a1515151581526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019a505050505050505050505060405180910390f35b3415610f5d57600080fd5b610f656139f6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610fb257600080fd5b610fba613a1c565b005b3415610fc757600080fd5b610fdd6004808035906020019091905050613aca565b005b3415610fea57600080fd5b611035600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050613c6a565b005b341561104257600080fd5b61106e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050613e7a565b005b341561107b57600080fd5b611091600480803590602001909190505061402c565b604051808215151515815260200191505060405180910390f35b34156110b657600080fd5b6110be61419b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561110b57600080fd5b611137600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506141c1565b005b341561114457600080fd5b61115a600480803590602001909190505061431a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060405180807f737570706f727473496e74657266616365286279746573342900000000000000815250601901905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114a6575060405180807f746f6b656e4d657461646174612875696e743235362c737472696e6729000000815250601d019050604051809103902060405180807f746f6b656e734f664f776e6572286164647265737329000000000000000000008152506016019050604051809103902060405180807f7472616e7366657246726f6d28616464726573732c616464726573732c75696e81526020017f74323536290000000000000000000000000000000000000000000000000000008152506025019050604051809103902060405180807f7472616e7366657228616464726573732c75696e7432353629000000000000008152506019019050604051809103902060405180807f617070726f766528616464726573732c75696e743235362900000000000000008152506018019050604051809103902060405180807f6f776e65724f662875696e7432353629000000000000000000000000000000008152506010019050604051809103902060405180807f62616c616e63654f6628616464726573732900000000000000000000000000008152506012019050604051809103902060405180807f746f74616c537570706c79282900000000000000000000000000000000000000815250600d019050604051809103902060405180807f73796d626f6c28290000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f6e616d6528290000000000000000000000000000000000000000000000000000815250600601905060405180910390201818181818181818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600781526020017f43727970746f6e0000000000000000000000000000000000000000000000000081525081565b600760009054906101000a900460ff16806115335750600760019054906101000a900460ff165b151561153e57600080fd5b611548338261434d565b151561155357600080fd5b61155d81836143b9565b7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561168257600080fd5b81905080601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b662386f26fc1000081565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600a8054905003905090565b600760009054906101000a900460ff1681565b6000808211151561172e57600080fd5b6000600a8381548110151561173f57fe5b906000526020600020906002020160010160189054906101000a900463ffffffff1663ffffffff1614159050919050565b6201518081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117d357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561180f57600080fd5b600360149054906101000a900467ffffffffffffffff1667ffffffffffffffff164311151561183d57600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff168115156118a457fe5b0401600360146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b600760009054906101000a900460ff16806118f85750600760019054906101000a900460ff165b151561190357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561193f57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561197a57600080fd5b611984338261440f565b151561198f57600080fd5b611999838261434d565b15156119a457600080fd5b6119af83838361447b565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a0f57600080fd5b600760009054906101000a900460ff16151515611a2b57600080fd5b6001600760016101000a81548160ff021916908315150217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611aa357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611adf57600080fd5b600460149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643111515611b0d57600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff16811515611b7457fe5b0401600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b66038d7ea4c6800081565b600080600760009054906101000a900460ff161515611bca57600080fd5b611bd4338561434d565b1515611bdf57600080fd5b611be983856146b3565b1515611bf457600080fd5b600a84815481101515611c0357fe5b90600052602060002090600202019150611d49826101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b1515611d5457600080fd5b600a83815481101515611d6357fe5b90600052602060002090600202019050611ea9816101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b1515611eb457600080fd5b611ec082858386614800565b1515611ecb57600080fd5b611ed58484614a15565b50505050565b600e6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015611fd85750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b80156120525750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561205d57600080fd5b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600760009054906101000a900460ff16151561214157600080fd5b61214b338361434d565b151561215657600080fd5b61215f8261402c565b151561216a57600080fd5b6121748284614bcd565b151561217f57600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c55d0f56846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561221857600080fd5b6102c65a03f1151561222957600080fd5b50505060405180519050905080341015151561224457600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663454a2ab334856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303818588803b15156122d457600080fd5b6125ee5a03f115156122e557600080fd5b505050506122ff8263ffffffff168463ffffffff16614a15565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561236057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561239c57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123f857600080fd5b600460149054906101000a900467ffffffffffffffff1667ffffffffffffffff164310151561242657600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561251157600080fd5b600760009054906101000a900460ff1615151561252d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561258b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156125e957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561264757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156126a457600080fd5b6126ac614c26565b565b600760009054906101000a900460ff1615156126c957600080fd5b6126d3338561434d565b15156126de57600080fd5b6126e78461171e565b1515156126f357600080fd5b61271f84600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a85858585336040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b15156127fb57600080fd5b6102c65a03f1151561280c57600080fd5b50505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561287357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16319050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050505050565b6000600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561295c57600080fd5b919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156129bd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156129f957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612a5557600080fd5b600360149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643101515612a8357600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612bdc57600080fd5b600760009054906101000a900460ff16151515612bf857600080fd5b80601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f450db8da6efbe9c22f2347f7c2021231df1fc58d3ae9a2fa75d39fa44619930581604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60065481565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612d0357600080fd5b819050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612d6157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b612d7060008060008685614d6a565b50505050565b612d7e615271565b6000612d88615271565b6000806000612d9687612b38565b94506000851415612dc8576000604051805910612db05750595b90808252806020026020018201604052509550612ea3565b84604051805910612dd65750595b90808252806020026020018201604052509350612df16116fb565b925060009150600190505b8281111515612e9f578673ffffffffffffffffffffffffffffffffffffffff16600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612e9257808483815181101515612e7b57fe5b906020019060200201818152505081806001019250505b8080600101915050612dfc565b8395505b5050505050919050565b600080600080600080600080600760009054906101000a900460ff161515612ed457600080fd5b600a89815481101515612ee357fe5b9060005260206000209060020201965060008760010160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1614151515612f2557600080fd5b61305b876101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff168152505061505d565b151561306657600080fd5b8660010160189054906101000a900463ffffffff1663ffffffff169550600a8681548110151561309257fe5b9060005260206000209060020201945086600101601e9054906101000a900461ffff1693508361ffff1685600101601e9054906101000a900461ffff1661ffff1611156130ef5784600101601e9054906101000a900461ffff1693505b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d868f4c0886000015487600001546000604051602001526040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b151561319857600080fd5b6102c65a03f115156131a957600080fd5b505050604051805190509250600b60008a815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150613219898860010160189054906101000a900463ffffffff1663ffffffff166001870161ffff168686614d6a565b90508660010160186101000a81549063ffffffff021916905580975050505050505050919050565b600760009054906101000a900460ff16151561325c57600080fd5b613266338261434d565b151561327157600080fd5b81600e600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061336f57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806133c75750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156133d257600080fd5b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635fd8c7106040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561345757600080fd5b6102c65a03f1151561346857600080fd5b505050601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635fd8c7106040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15156134f057600080fd5b6102c65a03f1151561350157600080fd5b505050565b600760019054906101000a900460ff1681565b6040805190810160405280600381526020017f43544e000000000000000000000000000000000000000000000000000000000081525081565b600d6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600881600e8110151561359457fe5b60089182820401919006600402915054906101000a900463ffffffff1681565b600760009054906101000a900460ff1615156135cf57600080fd5b6135d9338561434d565b15156135e457600080fd5b6135ed8461402c565b15156135f857600080fd5b61362484601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a85858585336040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b151561370057600080fd5b6102c65a03f1151561371157600080fd5b50505050505050565b6000806000808511151561372d57600080fd5b60008411151561373c57600080fd5b600a8581548110151561374b57fe5b90600052602060002090600202019150600a8481548110151561376a57fe5b9060005260206000209060020201905061378682868387614800565b8015613798575061379784866146b3565b5b9250505092915050565b600760009054906101000a900460ff16806137c95750600760019054906101000a900460ff165b15156137d457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561381057600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561384b57600080fd5b613855338261434d565b151561386057600080fd5b61386b33838361447b565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000600a8c8154811015156138b557fe5b9060005260206000209060020201905060008160010160189054906101000a900463ffffffff1663ffffffff1614159a50438160010160089054906101000a900467ffffffffffffffff1667ffffffffffffffff161115995080600101601c9054906101000a900461ffff1661ffff1698508060010160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1697508060010160189054906101000a900463ffffffff1663ffffffff1696508060010160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1695508060010160109054906101000a900463ffffffff1663ffffffff1694508060010160149054906101000a900463ffffffff1663ffffffff16935080600101601e9054906101000a900461ffff1661ffff16925080600001549150509193959799509193959799565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613a7757600080fd5b600760009054906101000a900460ff161515613a9257600080fd5b6000600760006101000a81548160ff0219169083151502179055506000600760016101000a81548160ff021916908315150217905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b2857600080fd5b613b3760008060008530614d6a565b9050613b6581600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a82613bac615098565b66038d7ea4c6800062015180306040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b1515613c5257600080fd5b6102c65a03f11515613c6357600080fd5b5050505050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613cc857600080fd5b8391508173ffffffffffffffffffffffffffffffffffffffff16638e5064ad6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515613d3757600080fd5b6102c65a03f11515613d4857600080fd5b505050604051805190501515613d5d57600080fd5b81600f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508290508073ffffffffffffffffffffffffffffffffffffffff1663dab45b096000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515613e0d57600080fd5b6102c65a03f11515613e1e57600080fd5b505050604051805190501515613e3357600080fd5b80601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613ed657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515613f1257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515613f6e57600080fd5b600560149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643101515613f9c57600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b60008060008311151561403e57600080fd5b600a8381548110151561404d57fe5b90600052602060002090600202019050614193816101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b915050919050565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561421c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561425857600080fd5b600560149054906101000a900467ffffffffffffffff1667ffffffffffffffff164311151561428657600080fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff168115156142ed57fe5b0401600560146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008273ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b80600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff16600d600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600b600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151561460f57600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600e600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600d600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef838383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050565b6000806000600b600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806147bc57508173ffffffffffffffffffffffffffffffffffffffff16600e600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b9250505092915050565b6000808260a0015163ffffffff161480156147f957504367ffffffffffffffff16826040015167ffffffffffffffff1611155b9050919050565b6000818414156148135760009050614a0d565b818560010160109054906101000a900463ffffffff1663ffffffff1614806148545750818560010160149054906101000a900463ffffffff1663ffffffff16145b156148625760009050614a0d565b838360010160109054906101000a900463ffffffff1663ffffffff1614806148a35750818360010160149054906101000a900463ffffffff1663ffffffff16145b156148b15760009050614a0d565b60008360010160109054906101000a900463ffffffff1663ffffffff1614806148f4575060008560010160109054906101000a900463ffffffff1663ffffffff16145b156149025760019050614a0d565b8460010160109054906101000a900463ffffffff1663ffffffff168360010160109054906101000a900463ffffffff1663ffffffff16148061497757508460010160149054906101000a900463ffffffff1663ffffffff168360010160109054906101000a900463ffffffff1663ffffffff16145b156149855760009050614a0d565b8460010160109054906101000a900463ffffffff1663ffffffff168360010160149054906101000a900463ffffffff1663ffffffff1614806149fa57508460010160149054906101000a900463ffffffff1663ffffffff168360010160149054906101000a900463ffffffff1663ffffffff16145b15614a085760009050614a0d565b600190505b949350505050565b600080600a83815481101515614a2757fe5b90600052602060002090600202019150600a84815481101515614a4657fe5b90600052602060002090600202019050828160010160186101000a81548163ffffffff021916908363ffffffff160217905550614a828261519b565b614a8b8161519b565b600e600085815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600e600084815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685858460010160089054906101000a900467ffffffffffffffff16604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018267ffffffffffffffff16815260200194505050505060405180910390a150505050565b6000806000600a85815481101515614be157fe5b90600052602060002090600202019150600a84815481101515614c0057fe5b90600052602060002090600202019050614c1c82868387614800565b9250505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480614cce57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80614d265750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515614d3157600080fd5b600760009054906101000a900460ff16151515614d4d57600080fd5b6001600760006101000a81548160ff021916908315150217905550565b600080614d75615285565b60008863ffffffff1689141515614d8b57600080fd5b8763ffffffff1688141515614d9f57600080fd5b8661ffff1687141515614db157600080fd5b600287811515614dbd57fe5b049250600d8361ffff161115614dd257600d92505b610100604051908101604052808781526020014267ffffffffffffffff168152602001600067ffffffffffffffff1681526020018a63ffffffff1681526020018963ffffffff168152602001600063ffffffff1681526020018461ffff1681526020018861ffff1681525091506001600a8054806001018281614e5591906152f9565b916000526020600020906002020160008590919091506000820151816000015560208201518160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060408201518160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160010160106101000a81548163ffffffff021916908363ffffffff16021790555060808201518160010160146101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160010160186101000a81548163ffffffff021916908363ffffffff16021790555060c082015181600101601c6101000a81548161ffff021916908361ffff16021790555060e082015181600101601e6101000a81548161ffff021916908361ffff16021790555050500390508063ffffffff1681141515614fa757600080fd5b7f0a5311bd2a6608f08a180df2ee7c5946819a649b204b554bb8e39825b2c50ad58582846060015163ffffffff16856080015163ffffffff168660000151604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a161504e6000868361447b565b80935050505095945050505050565b6000808260a0015163ffffffff161415801561509157504367ffffffffffffffff16826040015167ffffffffffffffff1611155b9050919050565b6000806000600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eac9d94c6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561512b57600080fd5b6102c65a03f1151561513c57600080fd5b505050604051805190509150816fffffffffffffffffffffffffffffffff168214151561516857600080fd5b60028281151561517457fe5b0482019050662386f26fc1000081101561519357662386f26fc1000090505b809250505090565b43600654600883600101601c9054906101000a900461ffff1661ffff16600e811015156151c457fe5b600891828204019190066004029054906101000a900463ffffffff1663ffffffff168115156151ef57fe5b04018160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600d81600101601c9054906101000a900461ffff1661ffff16101561526e57600181600101601c8282829054906101000a900461ffff160192506101000a81548161ffff021916908361ffff1602179055505b50565b602060405190810160405280600081525090565b6101006040519081016040528060008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600061ffff168152602001600061ffff1681525090565b81548183558181151161532657600202816002028360005260206000209182019101615325919061532b565b5b505050565b6153f491905b808211156153f0576000808201600090556001820160006101000a81549067ffffffffffffffff02191690556001820160086101000a81549067ffffffffffffffff02191690556001820160106101000a81549063ffffffff02191690556001820160146101000a81549063ffffffff02191690556001820160186101000a81549063ffffffff021916905560018201601c6101000a81549061ffff021916905560018201601e6101000a81549061ffff021916905550600201615331565b5090565b905600a165627a7a723058202daeab34253c9f99dcb19dcd98f44333f9780821ddbe02a6246ffa5476a41a120029",
  "deployedBytecode": "0x606060405260043610610288576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461033e5780630519ce791461039857806306fdde03146103ed578063095ea7b31461047b5780630a0f8168146104bd5780630a5c0814146105125780630e583df01461054b57806314a4d1b81461057457806318160ddd146105c9578063186601ca146105f25780631940a9361461061f57806319c2f2011461065a57806321447f8d1461068357806323b872dd146106bc5780632ca751e01461071d5780632e13d50d146107325780632f70a95c1461076b57806349289267146107945780634ba081cf146107c05780634be7fb00146108235780634d83cccc1461089a5780634fb6270e146108bb57806359d3ce47146108f45780635a0f4d54146109095780635fd8c710146109475780636352211e1461095c57806365a34be3146109bf5780636af04a57146109f857806370a0823114610a4d5780637158798814610a9a5780637a7d493714610ad35780637f5c3d7f14610afc5780638462151c14610b3e57806388c2a0bf14610bcc5780638fe9ca1e14610c0357806391876e5714610c4557806394a53d4114610c5a57806395d89b4114610c875780639c478c7b14610d155780639d6fac6f14610d78578063a064c05714610dbb578063a2dd9dd314610df9578063a9059cbb14610e3d578063b047fb5014610e7f578063b3a2784214610ed4578063bd1d041f14610f52578063c2a8834014610fa7578063c3bea9af14610fbc578063cf22d90f14610fdf578063d21baab814611037578063d3e6f49f14611070578063d67545eb146110ab578063daf849e314611100578063e2cc028d14611139575b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103315750601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561033c57600080fd5b005b341561034957600080fd5b61037e60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909190505061119c565b604051808215151515815260200191505060405180910390f35b34156103a357600080fd5b6103ab6114ad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103f857600080fd5b6104006114d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610440578082015181840152602081019050610425565b50505050905090810190601f16801561046d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561048657600080fd5b6104bb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061150c565b005b34156104c857600080fd5b6104d0611600565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561051d57600080fd5b610549600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611625565b005b341561055657600080fd5b61055e6116ca565b6040518082815260200191505060405180910390f35b341561057f57600080fd5b6105876116d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105d457600080fd5b6105dc6116fb565b6040518082815260200191505060405180910390f35b34156105fd57600080fd5b61060561170b565b604051808215151515815260200191505060405180910390f35b341561062a57600080fd5b610640600480803590602001909190505061171e565b604051808215151515815260200191505060405180910390f35b341561066557600080fd5b61066d611770565b6040518082815260200191505060405180910390f35b341561068e57600080fd5b6106ba600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611777565b005b34156106c757600080fd5b61071b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506118d1565b005b341561072857600080fd5b6107306119b4565b005b341561073d57600080fd5b610769600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611a48565b005b341561077657600080fd5b61077e611ba1565b6040518082815260200191505060405180910390f35b341561079f57600080fd5b6107be6004808035906020019091908035906020019091905050611bac565b005b34156107cb57600080fd5b6107e16004808035906020019091905050611edb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561082e57600080fd5b610898600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f0e565b005b6108b96004808035906020019091908035906020019091905050612124565b005b34156108c657600080fd5b6108f2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612304565b005b34156108ff57600080fd5b6109076124b6565b005b341561091457600080fd5b61094560048080359060200190919080359060200190919080359060200190919080359060200190919050506126ae565b005b341561095257600080fd5b61095a612815565b005b341561096757600080fd5b61097d60048080359060200190919050506128e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156109ca57600080fd5b6109f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612961565b005b3415610a0357600080fd5b610a0b612b12565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610a5857600080fd5b610a84600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612b38565b6040518082815260200191505060405180910390f35b3415610aa557600080fd5b610ad1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612b81565b005b3415610ade57600080fd5b610ae6612c9f565b6040518082815260200191505060405180910390f35b3415610b0757600080fd5b610b3c600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612ca5565b005b3415610b4957600080fd5b610b75600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612d76565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610bb8578082015181840152602081019050610b9d565b505050509050019250505060405180910390f35b3415610bd757600080fd5b610bed6004808035906020019091905050612ead565b6040518082815260200191505060405180910390f35b3415610c0e57600080fd5b610c43600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050613241565b005b3415610c5057600080fd5b610c586132c7565b005b3415610c6557600080fd5b610c6d613506565b604051808215151515815260200191505060405180910390f35b3415610c9257600080fd5b610c9a613519565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cda578082015181840152602081019050610cbf565b50505050905090810190601f168015610d075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2057600080fd5b610d366004808035906020019091905050613552565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610d8357600080fd5b610d996004808035906020019091905050613585565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3415610dc657600080fd5b610df760048080359060200190919080359060200190919080359060200190919080359060200190919050506135b4565b005b3415610e0457600080fd5b610e23600480803590602001909190803590602001909190505061371a565b604051808215151515815260200191505060405180910390f35b3415610e4857600080fd5b610e7d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506137a2565b005b3415610e8a57600080fd5b610e9261386f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610edf57600080fd5b610ef56004808035906020019091905050613895565b604051808b1515151581526020018a1515151581526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019a505050505050505050505060405180910390f35b3415610f5d57600080fd5b610f656139f6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610fb257600080fd5b610fba613a1c565b005b3415610fc757600080fd5b610fdd6004808035906020019091905050613aca565b005b3415610fea57600080fd5b611035600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050613c6a565b005b341561104257600080fd5b61106e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050613e7a565b005b341561107b57600080fd5b611091600480803590602001909190505061402c565b604051808215151515815260200191505060405180910390f35b34156110b657600080fd5b6110be61419b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561110b57600080fd5b611137600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506141c1565b005b341561114457600080fd5b61115a600480803590602001909190505061431a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060405180807f737570706f727473496e74657266616365286279746573342900000000000000815250601901905060405180910390207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114a6575060405180807f746f6b656e4d657461646174612875696e743235362c737472696e6729000000815250601d019050604051809103902060405180807f746f6b656e734f664f776e6572286164647265737329000000000000000000008152506016019050604051809103902060405180807f7472616e7366657246726f6d28616464726573732c616464726573732c75696e81526020017f74323536290000000000000000000000000000000000000000000000000000008152506025019050604051809103902060405180807f7472616e7366657228616464726573732c75696e7432353629000000000000008152506019019050604051809103902060405180807f617070726f766528616464726573732c75696e743235362900000000000000008152506018019050604051809103902060405180807f6f776e65724f662875696e7432353629000000000000000000000000000000008152506010019050604051809103902060405180807f62616c616e63654f6628616464726573732900000000000000000000000000008152506012019050604051809103902060405180807f746f74616c537570706c79282900000000000000000000000000000000000000815250600d019050604051809103902060405180807f73796d626f6c28290000000000000000000000000000000000000000000000008152506008019050604051809103902060405180807f6e616d6528290000000000000000000000000000000000000000000000000000815250600601905060405180910390201818181818181818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600781526020017f43727970746f6e0000000000000000000000000000000000000000000000000081525081565b600760009054906101000a900460ff16806115335750600760019054906101000a900460ff165b151561153e57600080fd5b611548338261434d565b151561155357600080fd5b61155d81836143b9565b7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561168257600080fd5b81905080601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b662386f26fc1000081565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600a8054905003905090565b600760009054906101000a900460ff1681565b6000808211151561172e57600080fd5b6000600a8381548110151561173f57fe5b906000526020600020906002020160010160189054906101000a900463ffffffff1663ffffffff1614159050919050565b6201518081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117d357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561180f57600080fd5b600360149054906101000a900467ffffffffffffffff1667ffffffffffffffff164311151561183d57600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff168115156118a457fe5b0401600360146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b600760009054906101000a900460ff16806118f85750600760019054906101000a900460ff165b151561190357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561193f57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561197a57600080fd5b611984338261440f565b151561198f57600080fd5b611999838261434d565b15156119a457600080fd5b6119af83838361447b565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a0f57600080fd5b600760009054906101000a900460ff16151515611a2b57600080fd5b6001600760016101000a81548160ff021916908315150217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611aa357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611adf57600080fd5b600460149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643111515611b0d57600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff16811515611b7457fe5b0401600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b66038d7ea4c6800081565b600080600760009054906101000a900460ff161515611bca57600080fd5b611bd4338561434d565b1515611bdf57600080fd5b611be983856146b3565b1515611bf457600080fd5b600a84815481101515611c0357fe5b90600052602060002090600202019150611d49826101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b1515611d5457600080fd5b600a83815481101515611d6357fe5b90600052602060002090600202019050611ea9816101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b1515611eb457600080fd5b611ec082858386614800565b1515611ecb57600080fd5b611ed58484614a15565b50505050565b600e6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015611fd85750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b80156120525750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561205d57600080fd5b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600760009054906101000a900460ff16151561214157600080fd5b61214b338361434d565b151561215657600080fd5b61215f8261402c565b151561216a57600080fd5b6121748284614bcd565b151561217f57600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c55d0f56846000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561221857600080fd5b6102c65a03f1151561222957600080fd5b50505060405180519050905080341015151561224457600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663454a2ab334856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506000604051808303818588803b15156122d457600080fd5b6125ee5a03f115156122e557600080fd5b505050506122ff8263ffffffff168463ffffffff16614a15565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561236057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561239c57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156123f857600080fd5b600460149054906101000a900467ffffffffffffffff1667ffffffffffffffff164310151561242657600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561251157600080fd5b600760009054906101000a900460ff1615151561252d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561258b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156125e957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561264757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156126a457600080fd5b6126ac614c26565b565b600760009054906101000a900460ff1615156126c957600080fd5b6126d3338561434d565b15156126de57600080fd5b6126e78461171e565b1515156126f357600080fd5b61271f84600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a85858585336040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b15156127fb57600080fd5b6102c65a03f1151561280c57600080fd5b50505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561287357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16319050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050505050565b6000600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561295c57600080fd5b919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156129bd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156129f957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612a5557600080fd5b600360149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643101515612a8357600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612bdc57600080fd5b600760009054906101000a900460ff16151515612bf857600080fd5b80601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f450db8da6efbe9c22f2347f7c2021231df1fc58d3ae9a2fa75d39fa44619930581604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60065481565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612d0357600080fd5b819050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612d6157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b612d7060008060008685614d6a565b50505050565b612d7e615271565b6000612d88615271565b6000806000612d9687612b38565b94506000851415612dc8576000604051805910612db05750595b90808252806020026020018201604052509550612ea3565b84604051805910612dd65750595b90808252806020026020018201604052509350612df16116fb565b925060009150600190505b8281111515612e9f578673ffffffffffffffffffffffffffffffffffffffff16600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612e9257808483815181101515612e7b57fe5b906020019060200201818152505081806001019250505b8080600101915050612dfc565b8395505b5050505050919050565b600080600080600080600080600760009054906101000a900460ff161515612ed457600080fd5b600a89815481101515612ee357fe5b9060005260206000209060020201965060008760010160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1614151515612f2557600080fd5b61305b876101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff168152505061505d565b151561306657600080fd5b8660010160189054906101000a900463ffffffff1663ffffffff169550600a8681548110151561309257fe5b9060005260206000209060020201945086600101601e9054906101000a900461ffff1693508361ffff1685600101601e9054906101000a900461ffff1661ffff1611156130ef5784600101601e9054906101000a900461ffff1693505b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d868f4c0886000015487600001546000604051602001526040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b151561319857600080fd5b6102c65a03f115156131a957600080fd5b505050604051805190509250600b60008a815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150613219898860010160189054906101000a900463ffffffff1663ffffffff166001870161ffff168686614d6a565b90508660010160186101000a81549063ffffffff021916905580975050505050505050919050565b600760009054906101000a900460ff16151561325c57600080fd5b613266338261434d565b151561327157600080fd5b81600e600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061336f57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806133c75750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156133d257600080fd5b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635fd8c7106040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561345757600080fd5b6102c65a03f1151561346857600080fd5b505050601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635fd8c7106040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15156134f057600080fd5b6102c65a03f1151561350157600080fd5b505050565b600760019054906101000a900460ff1681565b6040805190810160405280600381526020017f43544e000000000000000000000000000000000000000000000000000000000081525081565b600d6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600881600e8110151561359457fe5b60089182820401919006600402915054906101000a900463ffffffff1681565b600760009054906101000a900460ff1615156135cf57600080fd5b6135d9338561434d565b15156135e457600080fd5b6135ed8461402c565b15156135f857600080fd5b61362484601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a85858585336040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b151561370057600080fd5b6102c65a03f1151561371157600080fd5b50505050505050565b6000806000808511151561372d57600080fd5b60008411151561373c57600080fd5b600a8581548110151561374b57fe5b90600052602060002090600202019150600a8481548110151561376a57fe5b9060005260206000209060020201905061378682868387614800565b8015613798575061379784866146b3565b5b9250505092915050565b600760009054906101000a900460ff16806137c95750600760019054906101000a900460ff165b15156137d457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561381057600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561384b57600080fd5b613855338261434d565b151561386057600080fd5b61386b33838361447b565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000600a8c8154811015156138b557fe5b9060005260206000209060020201905060008160010160189054906101000a900463ffffffff1663ffffffff1614159a50438160010160089054906101000a900467ffffffffffffffff1667ffffffffffffffff161115995080600101601c9054906101000a900461ffff1661ffff1698508060010160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1697508060010160189054906101000a900463ffffffff1663ffffffff1696508060010160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1695508060010160109054906101000a900463ffffffff1663ffffffff1694508060010160149054906101000a900463ffffffff1663ffffffff16935080600101601e9054906101000a900461ffff1661ffff16925080600001549150509193959799509193959799565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613a7757600080fd5b600760009054906101000a900460ff161515613a9257600080fd5b6000600760006101000a81548160ff0219169083151502179055506000600760016101000a81548160ff021916908315150217905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613b2857600080fd5b613b3760008060008530614d6a565b9050613b6581600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166143b9565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327ebe40a82613bac615098565b66038d7ea4c6800062015180306040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050600060405180830381600087803b1515613c5257600080fd5b6102c65a03f11515613c6357600080fd5b5050505050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613cc857600080fd5b8391508173ffffffffffffffffffffffffffffffffffffffff16638e5064ad6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515613d3757600080fd5b6102c65a03f11515613d4857600080fd5b505050604051805190501515613d5d57600080fd5b81600f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508290508073ffffffffffffffffffffffffffffffffffffffff1663dab45b096000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1515613e0d57600080fd5b6102c65a03f11515613e1e57600080fd5b505050604051805190501515613e3357600080fd5b80601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613ed657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515613f1257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515613f6e57600080fd5b600560149054906101000a900467ffffffffffffffff1667ffffffffffffffff1643101515613f9c57600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b60008060008311151561403e57600080fd5b600a8381548110151561404d57fe5b90600052602060002090600202019050614193816101006040519081016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160149054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016001820160189054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201601c9054906101000a900461ffff1661ffff1661ffff16815260200160018201601e9054906101000a900461ffff1661ffff1661ffff16815250506147c6565b915050919050565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561421c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561425857600080fd5b600560149054906101000a900467ffffffffffffffff1667ffffffffffffffff164311151561428657600080fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436006546005601c9054906101000a900463ffffffff1663ffffffff168115156142ed57fe5b0401600560146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008273ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b80600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff16600d600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600b600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151561460f57600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600e600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600d600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef838383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050565b6000806000600b600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806147bc57508173ffffffffffffffffffffffffffffffffffffffff16600e600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b9250505092915050565b6000808260a0015163ffffffff161480156147f957504367ffffffffffffffff16826040015167ffffffffffffffff1611155b9050919050565b6000818414156148135760009050614a0d565b818560010160109054906101000a900463ffffffff1663ffffffff1614806148545750818560010160149054906101000a900463ffffffff1663ffffffff16145b156148625760009050614a0d565b838360010160109054906101000a900463ffffffff1663ffffffff1614806148a35750818360010160149054906101000a900463ffffffff1663ffffffff16145b156148b15760009050614a0d565b60008360010160109054906101000a900463ffffffff1663ffffffff1614806148f4575060008560010160109054906101000a900463ffffffff1663ffffffff16145b156149025760019050614a0d565b8460010160109054906101000a900463ffffffff1663ffffffff168360010160109054906101000a900463ffffffff1663ffffffff16148061497757508460010160149054906101000a900463ffffffff1663ffffffff168360010160109054906101000a900463ffffffff1663ffffffff16145b156149855760009050614a0d565b8460010160109054906101000a900463ffffffff1663ffffffff168360010160149054906101000a900463ffffffff1663ffffffff1614806149fa57508460010160149054906101000a900463ffffffff1663ffffffff168360010160149054906101000a900463ffffffff1663ffffffff16145b15614a085760009050614a0d565b600190505b949350505050565b600080600a83815481101515614a2757fe5b90600052602060002090600202019150600a84815481101515614a4657fe5b90600052602060002090600202019050828160010160186101000a81548163ffffffff021916908363ffffffff160217905550614a828261519b565b614a8b8161519b565b600e600085815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600e600084815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80600b600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685858460010160089054906101000a900467ffffffffffffffff16604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018267ffffffffffffffff16815260200194505050505060405180910390a150505050565b6000806000600a85815481101515614be157fe5b90600052602060002090600202019150600a84815481101515614c0057fe5b90600052602060002090600202019050614c1c82868387614800565b9250505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480614cce57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80614d265750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515614d3157600080fd5b600760009054906101000a900460ff16151515614d4d57600080fd5b6001600760006101000a81548160ff021916908315150217905550565b600080614d75615285565b60008863ffffffff1689141515614d8b57600080fd5b8763ffffffff1688141515614d9f57600080fd5b8661ffff1687141515614db157600080fd5b600287811515614dbd57fe5b049250600d8361ffff161115614dd257600d92505b610100604051908101604052808781526020014267ffffffffffffffff168152602001600067ffffffffffffffff1681526020018a63ffffffff1681526020018963ffffffff168152602001600063ffffffff1681526020018461ffff1681526020018861ffff1681525091506001600a8054806001018281614e5591906152f9565b916000526020600020906002020160008590919091506000820151816000015560208201518160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060408201518160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160010160106101000a81548163ffffffff021916908363ffffffff16021790555060808201518160010160146101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160010160186101000a81548163ffffffff021916908363ffffffff16021790555060c082015181600101601c6101000a81548161ffff021916908361ffff16021790555060e082015181600101601e6101000a81548161ffff021916908361ffff16021790555050500390508063ffffffff1681141515614fa757600080fd5b7f0a5311bd2a6608f08a180df2ee7c5946819a649b204b554bb8e39825b2c50ad58582846060015163ffffffff16856080015163ffffffff168660000151604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a161504e6000868361447b565b80935050505095945050505050565b6000808260a0015163ffffffff161415801561509157504367ffffffffffffffff16826040015167ffffffffffffffff1611155b9050919050565b6000806000600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eac9d94c6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561512b57600080fd5b6102c65a03f1151561513c57600080fd5b505050604051805190509150816fffffffffffffffffffffffffffffffff168214151561516857600080fd5b60028281151561517457fe5b0482019050662386f26fc1000081101561519357662386f26fc1000090505b809250505090565b43600654600883600101601c9054906101000a900461ffff1661ffff16600e811015156151c457fe5b600891828204019190066004029054906101000a900463ffffffff1663ffffffff168115156151ef57fe5b04018160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600d81600101601c9054906101000a900461ffff1661ffff16101561526e57600181600101601c8282829054906101000a900461ffff160192506101000a81548161ffff021916908361ffff1602179055505b50565b602060405190810160405280600081525090565b6101006040519081016040528060008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600063ffffffff168152602001600061ffff168152602001600061ffff1681525090565b81548183558181151161532657600202816002028360005260206000209182019101615325919061532b565b5b505050565b6153f491905b808211156153f0576000808201600090556001820160006101000a81549067ffffffffffffffff02191690556001820160086101000a81549067ffffffffffffffff02191690556001820160106101000a81549063ffffffff02191690556001820160146101000a81549063ffffffff02191690556001820160186101000a81549063ffffffff021916905560018201601c6101000a81549061ffff021916905560018201601e6101000a81549061ffff021916905550600201615331565b5090565b905600a165627a7a723058202daeab34253c9f99dcb19dcd98f44333f9780821ddbe02a6246ffa5476a41a120029",
  "sourceMap": "59:4057:15:-;;;1418:1:0;1394:25;;;;;;;;;;;;;;;;;;;;1532:1;1508:25;;;;;;;;;;;;;;;;;;;;1642:1;1618:25;;;;;;;;;;;;;;;;;;;;1690:7;1652:46;;;;;;;;;;;;;;;;;;;;1818:2;1785:35;;1857:5;1833:29;;;;;;;;;;;;;;;;;;;;1914:5;1892:27;;;;;;;;;;;;;;;;;;;;961:395:13;;;;;;;;;1008:9;961:395;;;;;;;;1035:9;961:395;;;;;;;;1062:9;961:395;;;;;;;;1089:10;961:395;;;;;;;;1117:10;961:395;;;;;;;;1145:7;961:395;;;;;;;;1170:7;961:395;;;;;;;;1195:7;961:395;;;;;;;;1220:7;961:395;;;;;;;;1245:8;961:395;;;;;;;;1271:6;961:395;;;;;;;;1295:6;961:395;;;;;;;;1319:6;961:395;;;;;;;;1343:6;961:395;;;;;;;;;;;;;;;:::i;:::-;;425:564:15;;;;;;;;504:5;492:9;;:17;;;;;;;;;;;;;;;;;;530:5;520:7;;:15;;;;;;;;;;;;;;;;;;620:10;607;;:23;;;;;;;;;;;;;;;;;;720:10;707;;:23;;;;;;;;;;;;;;;;;;820:10;807;;:23;;;;;;;;;;;;;;;;;;934:47;948:1;951;954;965:2;978:1;934:13;;;;;:47;;;:::i;:::-;;59:4057;;3271:1808:13;3464:4;3987:20;4120:21;;:::i;:::-;4464:15;3843:10;3828:27;;3814:10;:41;3806:50;;;;;;;;3902:9;3887:26;;3874:9;:39;3866:48;;;;;;;;3962:11;3947:28;;3932:11;:43;3924:52;;;;;;;;4031:1;4017:11;:15;;;;;;;;3987:46;;4063:2;4047:13;:18;;;4043:67;;;4097:2;4081:18;;4043:67;4144:310;;;;;;;;;4170:4;4144:310;;;;4206:3;4144:310;;;;;;4242:1;4144:310;;;;;;4275:10;4144:310;;;;;;4317:9;4144:310;;;;;;4355:1;4144:310;;;;;;4385:13;4144:310;;;;;;4431:11;4144:310;;;;;4120:334;;4507:1;4482:8;:22;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;4496:7;4482:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:26;4464:44;;4691:7;4676:24;;4665:7;:35;4657:44;;;;;;;;4744:160;4763:6;4783:7;4812;:17;;;4804:26;;4852:7;:16;;;4844:25;;4883:7;:11;;;4744:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5018:29;5028:1;5031:6;5039:7;5018:9;;;;;:29;;;:::i;:::-;5065:7;5058:14;;3271:1808;;;;;;;;;;:::o;2448:783::-;2633:19;:24;2653:3;2633:24;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;2730:3;2699:18;:28;2718:8;2699:28;;;;;;;;;;;;:34;;;;;;;;;;;;;;;;;;2850:1;2833:19;;:5;:19;;;;2829:320;;;2868:19;:26;2888:5;2868:26;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;2990:22;:32;3013:8;2990:32;;;;;;;;;;;;2983:39;;;;;;;;;;;3107:21;:31;3129:8;3107:31;;;;;;;;;;;;3100:38;;;;;;;;;;;2829:320;3194:30;3203:5;3210:3;3215:8;3194:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2448:783;;;:::o;59:4057:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "59:4057:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1794:19;;;;;;;;;;;1772:42;;:10;:42;;;:101;;;;1853:19;;;;;;;;;;;1831:42;;:10;:42;;;1772:101;1750:134;;;;;;;;59:4057;1256:200:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1252:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;233:39:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3342:399:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1220:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1258:233:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;368:55:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1210:39:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5165:95:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1833:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4056:259:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;495:54:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2927:281:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;4217:816:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5093:84:0;;;;;;;;;;;;;;3557:281;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:58:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7328:2030:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2078:58:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1035:267:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2939:765:12;;;;;;;;;;;;;;;;;;;;;;;;;;3879:267:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;3322:336:15;;;;;;;;;;;;;;765:1032:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3748:363:15;;;;;;;;;;;;;;5399:201:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3249:267:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:33:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1920:124:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1310:206:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;1785:35:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;968:364:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6064:730:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;9366:1565:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3304:209;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3908:159:12;;;;;;;;;;;;;;1892:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;279:37:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1759:57:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;961:395;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1963:841:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5892:439:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:858:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1284:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2031:926:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2371:38:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4883:111:0;;;;;;;;;;;;;;1441:471:11;;;;;;;;;;;;;;;;;;;;;;;;;;106:536:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4509:267:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;3816:232:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2217:38:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:281:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1409:54:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1256:200:16;1327:4;385:38;;;;;;;;;;;;;;;;;;;1358:41;;;:12;:41;;;;1357:90;;;;959:42;;;;;;;;;;;;;;;;;;;904:35;;;;;;;;;;;;;;;;;;;834:50;;;;;;;;;;;;;;;;;;;;;;;;776:38;;;;;;;;;;;;;;;;;;;719:37;;;;;;;;;;;;;;;;;;;670:29;;;;;;;;;;;;;;;;;;;619:31;;;;;;;;;;;;;;;;;;;573:26;;;;;;;;;;;;;;;;;;;532:21;;;;;;;;;;;;;;;;;;;493:19;;;;;;;;;;;;;;;;;;;486:68;:114;:165;:214;:271;:329;:399;:454;:516;1405:41;;;:12;:41;;;;1357:90;1349:99;;1256:200;;;:::o;1252:25:0:-;;;;;;;;;;;;;:::o;233:39:16:-;;;;;;;;;;;;;;;;;;;;:::o;3342:399::-;2758:9:0;;;;;;;;;;;:20;;;;2771:7;;;;;;;;;;;2758:20;2750:29;;;;;;;;3519:27:16;3525:10;3537:8;3519:5;:27::i;:::-;3511:36;;;;;;;;3629:23;3638:8;3648:3;3629:8;:23::i;:::-;3698:35;3707:10;3719:3;3724:8;3698:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3342:399;;:::o;1220:25:0:-;;;;;;;;;;;;;:::o;1258:233:14:-;1331:34;2088:10:0;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;1385:8:14;1331:63;;1466:17;1448:15;;:35;;;;;;;;;;;;;;;;;;1258:233;;:::o;368:55:11:-;414:9;368:55;:::o;1210:39:14:-;;;;;;;;;;;;;:::o;5165:95:16:-;5209:4;5251:1;5233:8;:15;;;;:19;5226:26;;5165:95;:::o;1833:29:0:-;;;;;;;;;;;;;:::o;4056:259:14:-;4143:4;4185:1;4173:9;:13;4165:22;;;;;;;;4306:1;4270:8;4279:9;4270:19;;;;;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;:37;;;;4263:44;;4056:259;;;:::o;495:54:11:-;543:6;495:54;:::o;2927:281:0:-;2384:10;;;;;;;;;;;2370:24;;:10;:24;;;2362:33;;;;;;;;3022:1;3003:21;;:7;:21;;;;2995:30;;;;;;;;3059:14;;;;;;;;;;;3044:29;;:12;:29;3036:38;;;;;;;;3103:7;3087:13;;:23;;;;;;;;;;;;;;;;;;3187:12;3168:15;;3146:21;;;;;;;;;;;:37;;;;;;;;;;3145:54;3121:14;;:79;;;;;;;;;;;;;;;;;;2927:281;:::o;4217:816:16:-;2758:9:0;;;;;;;;;;;:20;;;;2771:7;;;;;;;;;;;2758:20;2750:29;;;;;;;;4477:1:16;4462:17;;:3;:17;;;;4454:26;;;;;;;;4739:4;4724:20;;:3;:20;;;;4716:29;;;;;;;;4815:34;4828:10;4840:8;4815:12;:34::i;:::-;4807:43;;;;;;;;4869:22;4875:5;4882:8;4869:5;:22::i;:::-;4861:31;;;;;;;;4994;5004:5;5011:3;5016:8;4994:9;:31::i;:::-;4217:816;;;:::o;5093:84:0:-;2088:10;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;2856:9;;;;;;;;;;;2855:10;2847:19;;;;;;;;5165:4;5155:7;;:14;;;;;;;;;;;;;;;;;;5093:84::o;3557:281::-;2088:10;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;3652:1;3633:21;;:7;:21;;;;3625:30;;;;;;;;3689:14;;;;;;;;;;;3674:29;;:12;:29;3666:38;;;;;;;;3733:7;3717:13;;:23;;;;;;;;;;;;;;;;;;3817:12;3798:15;;3776:21;;;;;;;;;;;:37;;;;;;;;;;3775:54;3751:14;;:79;;;;;;;;;;;;;;;;;;3557:281;:::o;430:58:11:-;480:8;430:58;:::o;7328:2030:14:-;8645:22;8883:21;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;7594:29:14;7600:10;7612;7594:5;:29::i;:::-;7586:38;;;;;;;;8537:41;8556:9;8567:10;8537:18;:41::i;:::-;8529:50;;;;;;;;8670:8;8679:10;8670:20;;;;;;;;;;;;;;;;;;;;8645:45;;8794:24;8810:7;8794:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:15;:24::i;:::-;8786:33;;;;;;;;8907:8;8916:9;8907:19;;;;;;;;;;;;;;;;;;;;8883:43;;9028:23;9044:6;9028:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:15;:23::i;:::-;9020:32;;;;;;;;9131:121;9164:7;9186:10;9211:6;9232:9;9131:18;:121::i;:::-;9123:130;;;;;;;;9318:32;9328:10;9340:9;9318;:32::i;:::-;7328:2030;;;;:::o;2078:58:13:-;;;;;;;;;;;;;;;;;;;;;;:::o;1035:267:15:-;1141:10;;;;;;;;;;;1127:24;;:10;:24;;;:52;;;;;1169:10;;;;;;;;;;;1155:24;;:10;;;;;;;;;;;:24;;;1127:52;:80;;;;;1197:10;;;;;;;;;;;1183:24;;:10;;;;;;;;;;;:24;;;1127:80;1119:89;;;;;;;;1234:4;1221:10;;:17;;;;;;;;;;;;;;;;;;1262:4;1249:10;;:17;;;;;;;;;;;;;;;;;;1290:4;1277:10;;:17;;;;;;;;;;;;;;;;;;1035:267;;;:::o;2939:765:12:-;3364:20;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;3157:29:12;3163:10;3175;3157:5;:29::i;:::-;3149:38;;;;;;;;3206:26;3221:10;3206:14;:26::i;:::-;3198:35;;;;;;;;3252:45;3275:10;3287:9;3252:22;:45::i;:::-;3244:54;;;;;;;;3387:19;;;;;;;;;;;:35;;;3423:9;3387:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3364:69;;3465:12;3452:9;:25;;3444:54;;;;;;;;3567:19;;;;;;;;;;;:23;;;3597:9;3627;3567:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3648:48;3665:10;3648:48;;3685:9;3648:48;;:9;:48::i;:::-;2939:765;;;:::o;3879:267:0:-;2236:10;;;;;;;;;;;2222:24;;:10;:24;;;2214:33;;;;;;;;3974:1;3955:21;;:7;:21;;;;3947:30;;;;;;;;4013:7;3996:24;;:13;;;;;;;;;;;:24;;;3988:33;;;;;;;;4055:14;;;;;;;;;;;4040:29;;:12;:29;4032:38;;;;;;;;4096:13;;;;;;;;;;;4083:10;;:26;;;;;;;;;;;;;;;;;;4137:1;4120:14;;:18;;;;;;;;;;;;;;;;;;3879:267;:::o;3322:336:15:-;2088:10:0;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;2856:9;;;;;;;;;;;2855:10;2847:19;;;;;;;;3421:1:15;3390:33;;:19;;;;;;;;;;;:33;;;;3382:42;;;;;;;;3474:1;3443:33;;:19;;;;;;;;;;;:33;;;;3435:42;;;;;;;;3523:1;3496:29;;:15;;;;;;;;;;;:29;;;;3488:38;;;;;;;;3575:1;3545:32;;:18;;;;;;;;;;;:32;;;3537:41;;;;;;;;3634:16;:14;:16::i;:::-;3322:336::o;765:1032:12:-;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;1156:28:12;1162:10;1174:9;1156:5;:28::i;:::-;1148:37;;;;;;;;1401:21;1412:9;1401:10;:21::i;:::-;1400:22;1392:31;;;;;;;;1434:40;1443:9;1454:19;;;;;;;;;;;1434:8;:40::i;:::-;1616:19;;;;;;;;;;;:33;;;1664:9;1688:14;1717:12;1744:9;1768:10;1616:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;765:1032;;;;:::o;3748:363:15:-;3803:15;2236:10:0;;;;;;;;;;;2222:24;;:10;:24;;;2214:33;;;;;;;;3821:4:15;:12;;;3803:30;;4047:10;;;;;;;;;;;:15;;:43;4063:7;4047:43;;;;;;;;;;;;;;;;;;;;;;;;3748:363;:::o;5399:201:16:-;5484:13;5523:18;:28;5542:8;5523:28;;;;;;;;;;;;;;;;;;;;;5515:36;;5589:1;5572:19;;:5;:19;;;;5564:28;;;;;;;;5399:201;;;:::o;3249:267:0:-;2236:10;;;;;;;;;;;2222:24;;:10;:24;;;2214:33;;;;;;;;3344:1;3325:21;;:7;:21;;;;3317:30;;;;;;;;3383:7;3366:24;;:13;;;;;;;;;;;:24;;;3358:33;;;;;;;;3425:14;;;;;;;;;;;3410:29;;:12;:29;3402:38;;;;;;;;3466:13;;;;;;;;;;;3453:10;;:26;;;;;;;;;;;;;;;;;;3507:1;3490:14;;:18;;;;;;;;;;;;;;;;;;3249:267;:::o;310:33:15:-;;;;;;;;;;;;;:::o;1920:124:16:-;1976:13;2009:19;:27;2029:6;2009:27;;;;;;;;;;;;;;;;2002:34;;1920:124;;;:::o;1310:206:15:-;2088:10:0;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;2856:9;;;;;;;;;;;2855:10;2847:19;;;;;;;;1460:10:15;1439:18;;:31;;;;;;;;;;;;;;;;;;1481:27;1497:10;1481:27;;;;;;;;;;;;;;;;;;;;;;1310:206;:::o;1785:35:0:-;;;;:::o;968:364:11:-;1057:18;2384:10:0;;;;;;;;;;;2370:24;;:10;:24;;;2362:33;;;;;;;;1078:6:11;1057:27;;1121:1;1099:24;;:10;:24;;;1095:81;;;1154:10;;;;;;;;;;;1141:23;;1095:81;1282:42;1296:1;1299;1302;1305:6;1313:10;1282:13;:42::i;:::-;;968:364;;;:::o;6064:730:16:-;6125:21;;:::i;:::-;6159:18;6340:23;;:::i;:::-;6406:21;6458:19;6498:11;6180:17;6190:6;6180:9;:17::i;:::-;6159:38;;6228:1;6214:10;:15;6210:577;;;6305:1;6291:16;;;;;;;;;;;;;;;;;;;;;;;;6284:23;;;;6210:577;6380:10;6366:25;;;;;;;;;;;;;;;;;;;;;;;;6340:51;;6430:13;:11;:13::i;:::-;6406:37;;6480:1;6458:23;;6537:1;6531:7;;6526:220;6547:13;6540:3;:20;;6526:220;;;6619:6;6592:33;;:18;:23;6611:3;6592:23;;;;;;;;;;;;;;;;;;;;;:33;;;6588:143;;;6672:3;6650:6;6657:11;6650:19;;;;;;;;;;;;;;;;;:25;;;;;6698:13;;;;;;;6588:143;6562:5;;;;;;;6526:220;;;6769:6;6762:13;;6064:730;;;;;;;;;:::o;9366:1565:14:-;9461:7;9541:22;9871:16;9921:21;10046:16;10221;10302:13;10359:15;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;9566:8:14;9575:10;9566:20;;;;;;;;;;;;;;;;;;;;9541:45;;9678:1;9657:7;:17;;;;;;;;;;;;:22;;;;9649:31;;;;;;;;9776:28;9796:7;9776:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:19;:28::i;:::-;9768:37;;;;;;;;9890:7;:20;;;;;;;;;;;;9871:39;;;;9945:8;9954;9945:18;;;;;;;;;;;;;;;;;;;;9921:42;;10065:7;:18;;;;;;;;;;;;10046:37;;10118:9;10098:29;;:6;:17;;;;;;;;;;;;:29;;;10094:91;;;10156:6;:17;;;;;;;;;;;;10144:29;;10094:91;10240:15;;;;;;;;;;;:24;;;10265:7;:11;;;10278:6;:10;;;10240:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10221:68;;10318:18;:30;10337:10;10318:30;;;;;;;;;;;;;;;;;;;;;10302:46;;10377:79;10391:10;10403:7;:20;;;;;;;;;;;;10377:79;;10437:1;10425:9;:13;10377:79;;10440:8;10450:5;10377:13;:79::i;:::-;10359:97;;10622:7;:20;;;10615:27;;;;;;;;;;;10916:7;10909:14;;9366:1565;;;;;;;;;;:::o;3304:209::-;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;3424:28:14;3430:10;3442:9;3424:5;:28::i;:::-;3416:37;;;;;;;;3500:5;3464:22;:33;3487:9;3464:33;;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;3304:209;;:::o;3908:159:12:-;2492:10:0;;;;;;;;;;;2478:24;;:10;:24;;;:65;;;;2533:10;;;;;;;;;;;2519:24;;:10;:24;;;2478:65;:106;;;;2574:10;;;;;;;;;;;2560:24;;:10;:24;;;2478:106;2456:139;;;;;;;;3974:19:12;;;;;;;;;;;:35;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4022:19;;;;;;;;;;;:35;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3908:159::o;1892:27:0:-;;;;;;;;;;;;;:::o;279:37:16:-;;;;;;;;;;;;;;;;;;;;:::o;1759:57:13:-;;;;;;;;;;;;;;;;;;;;;;:::o;961:395::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1963:841:12:-;2669:9:0;;;;;;;;;;;2661:18;;;;;;;;2354:28:12;2360:10;2372:9;2354:5;:28::i;:::-;2346:37;;;;;;;;2402:25;2417:9;2402:14;:25::i;:::-;2394:34;;;;;;;;2439:40;2448:9;2459:19;;;;;;;;;;;2439:8;:40::i;:::-;2623:19;;;;;;;;;;;:33;;;2671:9;2695:14;2724:12;2751:9;2775:10;2623:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1963:841;;;;:::o;5892:439:14:-;6001:4;6090:22;6146:21;6044:1;6031:10;:14;6023:23;;;;;;;;6077:1;6065:9;:13;6057:22;;;;;;;;6115:8;6124:10;6115:20;;;;;;;;;;;;;;;;;;;;6090:45;;6170:8;6179:9;6170:19;;;;;;;;;;;;;;;;;;;;6146:43;;6207:58;6226:7;6235:10;6247:6;6255:9;6207:18;:58::i;:::-;:116;;;;;6282:41;6301:9;6312:10;6282:18;:41::i;:::-;6207:116;6200:123;;5892:439;;;;;;:::o;2052:858:16:-;2758:9:0;;;;;;;;;;;:20;;;;2771:7;;;;;;;;;;;2758:20;2750:29;;;;;;;;2261:1:16;2246:17;;:3;:17;;;;2238:26;;;;;;;;2523:4;2508:20;;:3;:20;;;;2500:29;;;;;;;;2747:27;2753:10;2765:8;2747:5;:27::i;:::-;2739:36;;;;;;;;2866;2876:10;2888:3;2893:8;2866:9;:36::i;:::-;2052:858;;:::o;1284:25:0:-;;;;;;;;;;;;;:::o;2031:926:15:-;2123:15;2149:12;2172:21;2204:20;2235;2266:17;2294;2322:16;2349:18;2378:11;2408:16;2427:8;2436:3;2427:13;;;;;;;;;;;;;;;;;;;;2408:32;;2543:1;2525;:14;;;;;;;;;;;;:19;;;;2511:34;;2589:12;2567:1;:18;;;;;;;;;;;;:34;;;;2556:46;;2637:1;:15;;;;;;;;;;;;2629:24;;2613:40;;2687:1;:18;;;;;;;;;;;;2679:27;;2664:42;;2740:1;:14;;;;;;;;;;;;2732:23;;2717:38;;2786:1;:11;;;;;;;;;;;;2778:20;;2766:32;;2829:1;:11;;;;;;;;;;;;2821:20;;2809:32;;2871:1;:10;;;;;;;;;;;;2863:19;;2852:30;;2914:1;:12;;;;;;;;;;;;2906:21;;2893:34;;2944:1;:5;;;2938:11;;2031:926;;;;;;;;;;;;:::o;2371:38:13:-;;;;;;;;;;;;;:::o;4883:111:0:-;2088:10;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;2669:9;;;;;;;;;;;2661:18;;;;;;;;4955:5;4943:9;;:17;;;;;;;;;;;;;;;;;;4981:5;4971:7;;:15;;;;;;;;;;;;;;;;;;4883:111::o;1441:471:11:-;1572:16;2384:10:0;;;;;;;;;;;2370:24;;:10;:24;;;2362:33;;;;;;;;1591:45:11;1605:1;1608;1611;1614:6;1630:4;1591:13;:45::i;:::-;1572:64;;1647:39;1656:8;1666:19;;;;;;;;;;;1647:8;:39::i;:::-;1697:19;;;;;;;;;;;:33;;;1745:8;1768:23;:21;:23::i;:::-;480:8;543:6;1888:4;1697:207;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1441:471;;:::o;106:536:12:-;193:33;424;2088:10:0;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;241:5:12;193:54;;268:21;:35;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;260:46;;;;;;;;382:21;360:19;;:43;;;;;;;;;;;;;;;;;;472:5;424:54;;499:21;:35;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;491:46;;;;;;;;613:21;591:19;;:43;;;;;;;;;;;;;;;;;;106:536;;;;:::o;4509:267:0:-;2384:10;;;;;;;;;;;2370:24;;:10;:24;;;2362:33;;;;;;;;4604:1;4585:21;;:7;:21;;;;4577:30;;;;;;;;4643:7;4626:24;;:13;;;;;;;;;;;:24;;;4618:33;;;;;;;;4685:14;;;;;;;;;;;4670:29;;:12;:29;4662:38;;;;;;;;4726:13;;;;;;;;;;;4713:10;;:26;;;;;;;;;;;;;;;;;;4767:1;4750:14;;:18;;;;;;;;;;;;;;;;;;4509:267;:::o;3816:232:14:-;3907:4;3962:18;3949:1;3937:9;:13;3929:22;;;;;;;;3983:8;3992:9;3983:19;;;;;;;;;;;;;;;;;;;;3962:40;;4020:20;4036:3;4020:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:15;:20::i;:::-;4013:27;;3816:232;;;;:::o;2217:38:13:-;;;;;;;;;;;;;:::o;4187:281:0:-;2088:10;;;;;;;;;;;2074:24;;:10;:24;;;2066:33;;;;;;;;4282:1;4263:21;;:7;:21;;;;4255:30;;;;;;;;4319:14;;;;;;;;;;;4304:29;;:12;:29;4296:38;;;;;;;;4363:7;4347:13;;:23;;;;;;;;;;;;;;;;;;4447:12;4428:15;;4406:21;;;;;;;;;;;:37;;;;;;;;;;4405:54;4381:14;;:79;;;;;;;;;;;;;;;;;;4187:281;:::o;1409:54:13:-;;;;;;;;;;;;;;;;;;;;;;:::o;1464:148:16:-;1539:4;1595:9;1563:41;;:18;:28;1582:8;1563:28;;;;;;;;;;;;;;;;;;;;;:41;;;1556:48;;1464:148;;;;:::o;1786:126::-;1895:9;1861:21;:31;1883:8;1861:31;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;1786:126;;:::o;1620:158::-;1702:4;1761:9;1726:44;;:21;:31;1748:8;1726:31;;;;;;;;;;;;;;;;;;;;;:44;;;1719:51;;1620:158;;;;:::o;2448:783:13:-;2633:19;:24;2653:3;2633:24;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;2730:3;2699:18;:28;2718:8;2699:28;;;;;;;;;;;;:34;;;;;;;;;;;;;;;;;;2850:1;2833:19;;:5;:19;;;;2829:320;;;2868:19;:26;2888:5;2868:26;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;2990:22;:32;3013:8;2990:32;;;;;;;;;;;;2983:39;;;;;;;;;;;3107:21;:31;3129:8;3107:31;;;;;;;;;;;;3100:38;;;;;;;;;;;2829:320;3194:30;3203:5;3210:3;3215:8;3194:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2448:783;;;:::o;1910:467:14:-;2000:4;2017:20;2081:19;2040:18;:30;2059:10;2040:30;;;;;;;;;;;;;;;;;;;;;2017:53;;2103:18;:29;2122:9;2103:29;;;;;;;;;;;;;;;;;;;;;2081:51;;2304:11;2288:27;;:12;:27;;;:80;;;;2356:12;2319:49;;:22;:33;2342:9;2319:33;;;;;;;;;;;;;;;;;;;;;:49;;;2288:80;2280:89;;1910:467;;;;;;:::o;1499:403::-;1560:4;1841:1;1820:4;:17;;;:22;;;1819:75;;;;;1880:12;1848:45;;:4;:21;;;:45;;;;1819:75;1812:82;;1499:403;;;:::o;4323:1227::-;4530:4;4615:9;4601:10;:23;4597:68;;;4648:5;4641:12;;;;4597:68;4755:9;4733:8;:18;;;;;;;;;;;;:31;;;:65;;;;4789:9;4768:8;:17;;;;;;;;;;;;:30;;;4733:65;4729:110;;;4822:5;4815:12;;;;4729:110;4874:10;4853:7;:17;;;;;;;;;;;;:31;;;:64;;;;4908:9;4888:7;:16;;;;;;;;;;;;:29;;;4853:64;4849:109;;;4941:5;4934:12;;;;4849:109;5119:1;5098:7;:17;;;;;;;;;;;;:22;;;:49;;;;5146:1;5124:8;:18;;;;;;;;;;;;:23;;;5098:49;5094:93;;;5171:4;5164:11;;;;5094:93;5284:8;:18;;;;;;;;;;;;5263:39;;:7;:17;;;;;;;;;;;;:39;;;:81;;;;5327:8;:17;;;;;;;;;;;;5306:38;;:7;:17;;;;;;;;;;;;:38;;;5263:81;5259:126;;;5368:5;5361:12;;;;5259:126;5419:8;:18;;;;;;;;;;;;5399:38;;:7;:16;;;;;;;;;;;;:38;;;:79;;;;5461:8;:17;;;;;;;;;;;;5441:37;;:7;:16;;;;;;;;;;;;:37;;;5399:79;5395:124;;;5502:5;5495:12;;;;5395:124;5538:4;5531:11;;4323:1227;;;;;;;:::o;6339:981::-;6475:21;6529:22;6499:8;6508:9;6499:19;;;;;;;;;;;;;;;;;;;;6475:43;;6554:8;6563:10;6554:20;;;;;;;;;;;;;;;;;;;;6529:45;;6692:9;6662:7;:20;;;:40;;;;;;;;;;;;;;;;;;6766:24;6783:6;6766:16;:24::i;:::-;6801:25;6818:7;6801:16;:25::i;:::-;6983:22;:34;7006:10;6983:34;;;;;;;;;;;;6976:41;;;;;;;;;;;7035:22;:33;7058:9;7035:33;;;;;;;;;;;;7028:40;;;;;;;;;;;7223:89;7232:18;:30;7251:10;7232:30;;;;;;;;;;;;;;;;;;;;;7264:10;7276:9;7287:7;:24;;;;;;;;;;;;7223:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6339:981;;;;:::o;5558:326::-;5679:4;5701:22;5757:21;5726:8;5735:10;5726:20;;;;;;;;;;;;;;;;;;;;5701:45;;5781:8;5790:9;5781:19;;;;;;;;;;;;;;;;;;;;5757:43;;5818:58;5837:7;5846:10;5858:6;5866:9;5818:18;:58::i;:::-;5811:65;;5558:326;;;;;;:::o;4784:87:0:-;2492:10;;;;;;;;;;;2478:24;;:10;:24;;;:65;;;;2533:10;;;;;;;;;;;2519:24;;:10;:24;;;2478:65;:106;;;;2574:10;;;;;;;;;;;2560:24;;:10;:24;;;2478:106;2456:139;;;;;;;;2856:9;;;;;;;;;;;2855:10;2847:19;;;;;;;;4859:4;4847:9;;:16;;;;;;;;;;;;;;;;;;4784:87::o;3271:1808:13:-;3464:4;3987:20;4120:21;;:::i;:::-;4464:15;3843:10;3828:27;;3814:10;:41;3806:50;;;;;;;;3902:9;3887:26;;3874:9;:39;3866:48;;;;;;;;3962:11;3947:28;;3932:11;:43;3924:52;;;;;;;;4031:1;4017:11;:15;;;;;;;;3987:46;;4063:2;4047:13;:18;;;4043:67;;;4097:2;4081:18;;4043:67;4144:310;;;;;;;;;4170:4;4144:310;;;;4206:3;4144:310;;;;;;4242:1;4144:310;;;;;;4275:10;4144:310;;;;;;4317:9;4144:310;;;;;;4355:1;4144:310;;;;;;4385:13;4144:310;;;;;;4431:11;4144:310;;;;;4120:334;;4507:1;4482:8;:22;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;4496:7;4482:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:26;4464:44;;4691:7;4676:24;;4665:7;:35;4657:44;;;;;;;;4744:160;4763:6;4783:7;4812;:17;;;4804:26;;4852:7;:16;;;4844:25;;4883:7;:11;;;4744:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5018:29;5028:1;5031:6;5039:7;5018:9;:29::i;:::-;5065:7;5058:14;;3271:1808;;;;;;;;;;:::o;3625:183:14:-;3693:4;3743:1;3718:8;:21;;;:26;;;;3717:83;;;;;3786:12;3750:49;;:8;:25;;;:49;;;;3717:83;3710:90;;3625:183;;;:::o;2037:521:11:-;2093:7;2113:16;2311:17;2132:19;;;;;;;;;;;:40;;;:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2113:61;;2287:8;2271:26;;2259:8;:38;2251:47;;;;;;;;2354:1;2343:8;:12;;;;;;;;2331:8;:25;2311:45;;414:9;2431;:31;2427:95;;;414:9;2479:31;;2427:95;2541:9;2534:16;;2037:521;;;:::o;2385:911:14:-;2768:12;2749:15;;2716:9;2726:7;:21;;;;;;;;;;;;2716:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:48;;;;;;;;;;2715:65;2681:7;:24;;;:100;;;;;;;;;;;;;;;;;;3232:2;3208:7;:21;;;;;;;;;;;;:26;;;3204:85;;;3276:1;3251:7;:21;;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3204:85;2385:911;:::o;59:4057:15:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\r\n\r\nimport \"./EntityAdmin.sol\";\r\n\r\ncontract EntityCore is EntityAdmin {\r\n\r\n    /// @dev Emited when contract is upgraded - See README.md for updgrade plan\r\n    event ContractUpgrade(address newContract);\r\n\r\n    // Set in case the core contract is broken and an upgrade is required\r\n    address public newContractAddress;\r\n\r\n    /// @notice Creates the main CryptoKitties smart contract instance.\r\n    function EntityCore() public {\r\n        // Starts paused.\r\n        activated = false;\r\n        minimal = false;\r\n\r\n        // the creator of the contract is the initial CEO\r\n        ceoAddress = msg.sender;\r\n\r\n        // the creator of the contract is also the initial COO\r\n        cooAddress = msg.sender;\r\n\r\n        // the creator of the contract is also the initial CFO\r\n        cfoAddress = msg.sender;\r\n\r\n        // start with the mythical kitten 0 - so we don't have generation-0 parent issues\r\n        _createEntity(0, 0, 0, uint256(-1), address(0));\r\n    }\r\n\r\n    // @firsttime only address setup\r\n    function setCoAddresses(address _ceo, address _coo, address _cfo) public {\r\n        require(msg.sender == ceoAddress && ceoAddress == cooAddress && ceoAddress == cfoAddress);\r\n\r\n        ceoAddress = _ceo;\r\n        cooAddress = _coo;\r\n        cfoAddress = _cfo;\r\n    }\r\n\r\n    function setNewAddress(address _v2Address) external onlyCEO isDeactivated {\r\n        // See README.md for updgrade plan\r\n        newContractAddress = _v2Address;\r\n        ContractUpgrade(_v2Address);\r\n    }\r\n\r\n    /// @notice No tipping!\r\n    /// @dev Reject all Ether from being sent here, unless it's from one of the\r\n    ///  two auction contracts. (Hopefully, we can prevent user accidents.)\r\n    function() external payable {\r\n        require(\r\n            msg.sender == address(auctionSellContract) ||\r\n            msg.sender == address(auctionSeedContract)\r\n        );\r\n    }\r\n\r\n    /// @notice Returns all the relevant information about a specific kitty.\r\n    /// @param _id The ID of the kitty of interest.\r\n    function getEntity(uint256 _id)\r\n        external\r\n        view\r\n        returns (\r\n        bool isBreeding,\r\n        bool isReady,\r\n        uint256 cooldownIndex,\r\n        uint256 nextActionAt,\r\n        uint256 matingWithId,\r\n        uint256 birthTime,\r\n        uint256 breederId,\r\n        uint256 seederId,\r\n        uint256 generation,\r\n        uint256 dna\r\n    ) {\r\n        Entity storage e = entities[_id];\r\n\r\n        // if this variable is 0 then it's not gestating\r\n        isBreeding = (e.matingWithId != 0);\r\n        isReady = (e.cooldownEndBlock <= block.number);\r\n        cooldownIndex = uint256(e.cooldownIndex);\r\n        nextActionAt = uint256(e.cooldownEndBlock);\r\n        matingWithId = uint256(e.matingWithId);\r\n        birthTime = uint256(e.birthTime);\r\n        breederId = uint256(e.breederId);\r\n        seederId = uint256(e.seederId);\r\n        generation = uint256(e.generation);\r\n        dna = e.dna;\r\n    }\r\n\r\n    /// @dev Override unpause so it requires all external contract addresses\r\n    ///  to be set before contract can be unpaused. Also, we can't have\r\n    ///  newContractAddress set either, because then the contract was upgraded.\r\n    /// @notice This is public rather than external so we can call super.unpause\r\n    ///  without using an expensive CALL.\r\n    function Activate() public onlyCEO isDeactivated {\r\n        require(auctionSellContract != address(0));\r\n        require(auctionSeedContract != address(0));\r\n        require(dnaCoreContract != address(0));\r\n        require(newContractAddress == address(0));\r\n\r\n        // Actually unpause the contract.\r\n        super.Activate();\r\n    }\r\n    \r\n    // @dev Allows the CFO to capture the balance available to the contract.\r\n    function withdrawBalance() external onlyCFO {\r\n        uint256 balance = this.balance;\r\n        // Subtract all the currently pregnant kittens we have, plus 1 of margin.\r\n        //uint256 subtractFees = (pregnantEntities + 1) * autoBirthFee;\r\n\r\n        //if (balance > subtractFees) {\r\n            cfoAddress.send(balance /*- subtractFees*/);\r\n        //}\r\n    }\r\n\r\n}",
  "sourcePath": "C:\\DEV\\git\\crypton_contracts\\contracts\\EntityCore.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/C/DEV/git/crypton_contracts/contracts/EntityCore.sol",
      "exportedSymbols": {
        "EntityCore": [
          4751
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 4461,
        "name": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "attributes": {
          "SourceUnit": 3355,
          "absolutePath": "/C/DEV/git/crypton_contracts/contracts/EntityAdmin.sol",
          "file": "./EntityAdmin.sol",
          "scope": 4752,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4462,
        "name": "ImportDirective",
        "src": "28:27:15"
      },
      {
        "attributes": {
          "contractDependencies": [
            386,
            3354,
            3572,
            3862,
            4459,
            5143,
            5324
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4751,
            3354,
            3572,
            4459,
            5143,
            5324,
            3862,
            386
          ],
          "name": "EntityCore",
          "scope": 4752
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "EntityAdmin",
                  "referencedDeclaration": 3354,
                  "type": "contract EntityAdmin"
                },
                "id": 4463,
                "name": "UserDefinedTypeName",
                "src": "82:11:15"
              }
            ],
            "id": 4464,
            "name": "InheritanceSpecifier",
            "src": "82:11:15"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ContractUpgrade"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "newContract",
                      "scope": 4468,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4465,
                        "name": "ElementaryTypeName",
                        "src": "206:7:15"
                      }
                    ],
                    "id": 4466,
                    "name": "VariableDeclaration",
                    "src": "206:19:15"
                  }
                ],
                "id": 4467,
                "name": "ParameterList",
                "src": "205:21:15"
              }
            ],
            "id": 4468,
            "name": "EventDefinition",
            "src": "184:43:15"
          },
          {
            "attributes": {
              "constant": false,
              "name": "newContractAddress",
              "scope": 4751,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 4469,
                "name": "ElementaryTypeName",
                "src": "310:7:15"
              }
            ],
            "id": 4470,
            "name": "VariableDeclaration",
            "src": "310:33:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "EntityCore",
              "payable": false,
              "scope": 4751,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4471,
                "name": "ParameterList",
                "src": "444:2:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4472,
                "name": "ParameterList",
                "src": "454:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 33,
                              "type": "bool",
                              "value": "activated"
                            },
                            "id": 4473,
                            "name": "Identifier",
                            "src": "492:9:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 4474,
                            "name": "Literal",
                            "src": "504:5:15"
                          }
                        ],
                        "id": 4475,
                        "name": "Assignment",
                        "src": "492:17:15"
                      }
                    ],
                    "id": 4476,
                    "name": "ExpressionStatement",
                    "src": "492:17:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 36,
                              "type": "bool",
                              "value": "minimal"
                            },
                            "id": 4477,
                            "name": "Identifier",
                            "src": "520:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 4478,
                            "name": "Literal",
                            "src": "530:5:15"
                          }
                        ],
                        "id": 4479,
                        "name": "Assignment",
                        "src": "520:15:15"
                      }
                    ],
                    "id": 4480,
                    "name": "ExpressionStatement",
                    "src": "520:15:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3,
                              "type": "address",
                              "value": "ceoAddress"
                            },
                            "id": 4481,
                            "name": "Identifier",
                            "src": "607:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 4482,
                                "name": "Identifier",
                                "src": "620:3:15"
                              }
                            ],
                            "id": 4483,
                            "name": "MemberAccess",
                            "src": "620:10:15"
                          }
                        ],
                        "id": 4484,
                        "name": "Assignment",
                        "src": "607:23:15"
                      }
                    ],
                    "id": 4485,
                    "name": "ExpressionStatement",
                    "src": "607:23:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7,
                              "type": "address",
                              "value": "cooAddress"
                            },
                            "id": 4486,
                            "name": "Identifier",
                            "src": "707:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 4487,
                                "name": "Identifier",
                                "src": "720:3:15"
                              }
                            ],
                            "id": 4488,
                            "name": "MemberAccess",
                            "src": "720:10:15"
                          }
                        ],
                        "id": 4489,
                        "name": "Assignment",
                        "src": "707:23:15"
                      }
                    ],
                    "id": 4490,
                    "name": "ExpressionStatement",
                    "src": "707:23:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5,
                              "type": "address",
                              "value": "cfoAddress"
                            },
                            "id": 4491,
                            "name": "Identifier",
                            "src": "807:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5336,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 4492,
                                "name": "Identifier",
                                "src": "820:3:15"
                              }
                            ],
                            "id": 4493,
                            "name": "MemberAccess",
                            "src": "820:10:15"
                          }
                        ],
                        "id": 4494,
                        "name": "Assignment",
                        "src": "807:23:15"
                      }
                    ],
                    "id": 4495,
                    "name": "ExpressionStatement",
                    "src": "807:23:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3861,
                              "type": "function (uint256,uint256,uint256,uint256,address) returns (uint256)",
                              "value": "_createEntity"
                            },
                            "id": 4496,
                            "name": "Identifier",
                            "src": "934:13:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 4497,
                            "name": "Literal",
                            "src": "948:1:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 4498,
                            "name": "Literal",
                            "src": "951:1:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 4499,
                            "name": "Literal",
                            "src": "954:1:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_-1_by_1",
                                      "typeString": "int_const -1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4500,
                                "name": "ElementaryTypeNameExpression",
                                "src": "957:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "operator": "-",
                                  "prefix": true,
                                  "type": "int_const -1"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "31",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 1",
                                      "value": "1"
                                    },
                                    "id": 4501,
                                    "name": "Literal",
                                    "src": "966:1:15"
                                  }
                                ],
                                "id": 4502,
                                "name": "UnaryOperation",
                                "src": "965:2:15"
                              }
                            ],
                            "id": 4503,
                            "name": "FunctionCall",
                            "src": "957:11:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 4504,
                                "name": "ElementaryTypeNameExpression",
                                "src": "970:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 4505,
                                "name": "Literal",
                                "src": "978:1:15"
                              }
                            ],
                            "id": 4506,
                            "name": "FunctionCall",
                            "src": "970:10:15"
                          }
                        ],
                        "id": 4507,
                        "name": "FunctionCall",
                        "src": "934:47:15"
                      }
                    ],
                    "id": 4508,
                    "name": "ExpressionStatement",
                    "src": "934:47:15"
                  }
                ],
                "id": 4509,
                "name": "Block",
                "src": "454:535:15"
              }
            ],
            "id": 4510,
            "name": "FunctionDefinition",
            "src": "425:564:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setCoAddresses",
              "payable": false,
              "scope": 4751,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_ceo",
                      "scope": 4547,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4511,
                        "name": "ElementaryTypeName",
                        "src": "1059:7:15"
                      }
                    ],
                    "id": 4512,
                    "name": "VariableDeclaration",
                    "src": "1059:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_coo",
                      "scope": 4547,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4513,
                        "name": "ElementaryTypeName",
                        "src": "1073:7:15"
                      }
                    ],
                    "id": 4514,
                    "name": "VariableDeclaration",
                    "src": "1073:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_cfo",
                      "scope": 4547,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4515,
                        "name": "ElementaryTypeName",
                        "src": "1087:7:15"
                      }
                    ],
                    "id": 4516,
                    "name": "VariableDeclaration",
                    "src": "1087:12:15"
                  }
                ],
                "id": 4517,
                "name": "ParameterList",
                "src": "1058:42:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4518,
                "name": "ParameterList",
                "src": "1108:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4519,
                            "name": "Identifier",
                            "src": "1119:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&&",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "&&",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5336,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 4520,
                                            "name": "Identifier",
                                            "src": "1127:3:15"
                                          }
                                        ],
                                        "id": 4521,
                                        "name": "MemberAccess",
                                        "src": "1127:10:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3,
                                          "type": "address",
                                          "value": "ceoAddress"
                                        },
                                        "id": 4522,
                                        "name": "Identifier",
                                        "src": "1141:10:15"
                                      }
                                    ],
                                    "id": 4523,
                                    "name": "BinaryOperation",
                                    "src": "1127:24:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3,
                                          "type": "address",
                                          "value": "ceoAddress"
                                        },
                                        "id": 4524,
                                        "name": "Identifier",
                                        "src": "1155:10:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7,
                                          "type": "address",
                                          "value": "cooAddress"
                                        },
                                        "id": 4525,
                                        "name": "Identifier",
                                        "src": "1169:10:15"
                                      }
                                    ],
                                    "id": 4526,
                                    "name": "BinaryOperation",
                                    "src": "1155:24:15"
                                  }
                                ],
                                "id": 4527,
                                "name": "BinaryOperation",
                                "src": "1127:52:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3,
                                      "type": "address",
                                      "value": "ceoAddress"
                                    },
                                    "id": 4528,
                                    "name": "Identifier",
                                    "src": "1183:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5,
                                      "type": "address",
                                      "value": "cfoAddress"
                                    },
                                    "id": 4529,
                                    "name": "Identifier",
                                    "src": "1197:10:15"
                                  }
                                ],
                                "id": 4530,
                                "name": "BinaryOperation",
                                "src": "1183:24:15"
                              }
                            ],
                            "id": 4531,
                            "name": "BinaryOperation",
                            "src": "1127:80:15"
                          }
                        ],
                        "id": 4532,
                        "name": "FunctionCall",
                        "src": "1119:89:15"
                      }
                    ],
                    "id": 4533,
                    "name": "ExpressionStatement",
                    "src": "1119:89:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3,
                              "type": "address",
                              "value": "ceoAddress"
                            },
                            "id": 4534,
                            "name": "Identifier",
                            "src": "1221:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4512,
                              "type": "address",
                              "value": "_ceo"
                            },
                            "id": 4535,
                            "name": "Identifier",
                            "src": "1234:4:15"
                          }
                        ],
                        "id": 4536,
                        "name": "Assignment",
                        "src": "1221:17:15"
                      }
                    ],
                    "id": 4537,
                    "name": "ExpressionStatement",
                    "src": "1221:17:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7,
                              "type": "address",
                              "value": "cooAddress"
                            },
                            "id": 4538,
                            "name": "Identifier",
                            "src": "1249:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4514,
                              "type": "address",
                              "value": "_coo"
                            },
                            "id": 4539,
                            "name": "Identifier",
                            "src": "1262:4:15"
                          }
                        ],
                        "id": 4540,
                        "name": "Assignment",
                        "src": "1249:17:15"
                      }
                    ],
                    "id": 4541,
                    "name": "ExpressionStatement",
                    "src": "1249:17:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5,
                              "type": "address",
                              "value": "cfoAddress"
                            },
                            "id": 4542,
                            "name": "Identifier",
                            "src": "1277:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4516,
                              "type": "address",
                              "value": "_cfo"
                            },
                            "id": 4543,
                            "name": "Identifier",
                            "src": "1290:4:15"
                          }
                        ],
                        "id": 4544,
                        "name": "Assignment",
                        "src": "1277:17:15"
                      }
                    ],
                    "id": 4545,
                    "name": "ExpressionStatement",
                    "src": "1277:17:15"
                  }
                ],
                "id": 4546,
                "name": "Block",
                "src": "1108:194:15"
              }
            ],
            "id": 4547,
            "name": "FunctionDefinition",
            "src": "1035:267:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setNewAddress",
              "payable": false,
              "scope": 4751,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_v2Address",
                      "scope": 4565,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4548,
                        "name": "ElementaryTypeName",
                        "src": "1333:7:15"
                      }
                    ],
                    "id": 4549,
                    "name": "VariableDeclaration",
                    "src": "1333:18:15"
                  }
                ],
                "id": 4550,
                "name": "ParameterList",
                "src": "1332:20:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4555,
                "name": "ParameterList",
                "src": "1384:0:15"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 47,
                      "type": "modifier ()",
                      "value": "onlyCEO"
                    },
                    "id": 4551,
                    "name": "Identifier",
                    "src": "1362:7:15"
                  }
                ],
                "id": 4552,
                "name": "ModifierInvocation",
                "src": "1362:7:15"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 117,
                      "type": "modifier ()",
                      "value": "isDeactivated"
                    },
                    "id": 4553,
                    "name": "Identifier",
                    "src": "1370:13:15"
                  }
                ],
                "id": 4554,
                "name": "ModifierInvocation",
                "src": "1370:13:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4470,
                              "type": "address",
                              "value": "newContractAddress"
                            },
                            "id": 4556,
                            "name": "Identifier",
                            "src": "1439:18:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4549,
                              "type": "address",
                              "value": "_v2Address"
                            },
                            "id": 4557,
                            "name": "Identifier",
                            "src": "1460:10:15"
                          }
                        ],
                        "id": 4558,
                        "name": "Assignment",
                        "src": "1439:31:15"
                      }
                    ],
                    "id": 4559,
                    "name": "ExpressionStatement",
                    "src": "1439:31:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4468,
                              "type": "function (address)",
                              "value": "ContractUpgrade"
                            },
                            "id": 4560,
                            "name": "Identifier",
                            "src": "1481:15:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4549,
                              "type": "address",
                              "value": "_v2Address"
                            },
                            "id": 4561,
                            "name": "Identifier",
                            "src": "1497:10:15"
                          }
                        ],
                        "id": 4562,
                        "name": "FunctionCall",
                        "src": "1481:27:15"
                      }
                    ],
                    "id": 4563,
                    "name": "ExpressionStatement",
                    "src": "1481:27:15"
                  }
                ],
                "id": 4564,
                "name": "Block",
                "src": "1384:132:15"
              }
            ],
            "id": 4565,
            "name": "FunctionDefinition",
            "src": "1310:206:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "",
              "payable": true,
              "scope": 4751,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4566,
                "name": "ParameterList",
                "src": "1719:2:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4567,
                "name": "ParameterList",
                "src": "1739:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4568,
                            "name": "Identifier",
                            "src": "1750:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5336,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 4569,
                                        "name": "Identifier",
                                        "src": "1772:3:15"
                                      }
                                    ],
                                    "id": 4570,
                                    "name": "MemberAccess",
                                    "src": "1772:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_AuctionSell_$1171",
                                              "typeString": "contract AuctionSell"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 4571,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "1786:7:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3684,
                                          "type": "contract AuctionSell",
                                          "value": "auctionSellContract"
                                        },
                                        "id": 4572,
                                        "name": "Identifier",
                                        "src": "1794:19:15"
                                      }
                                    ],
                                    "id": 4573,
                                    "name": "FunctionCall",
                                    "src": "1786:28:15"
                                  }
                                ],
                                "id": 4574,
                                "name": "BinaryOperation",
                                "src": "1772:42:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5336,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 4575,
                                        "name": "Identifier",
                                        "src": "1831:3:15"
                                      }
                                    ],
                                    "id": 4576,
                                    "name": "MemberAccess",
                                    "src": "1831:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_AuctionSeed_$981",
                                              "typeString": "contract AuctionSeed"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 4577,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "1845:7:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3686,
                                          "type": "contract AuctionSeed",
                                          "value": "auctionSeedContract"
                                        },
                                        "id": 4578,
                                        "name": "Identifier",
                                        "src": "1853:19:15"
                                      }
                                    ],
                                    "id": 4579,
                                    "name": "FunctionCall",
                                    "src": "1845:28:15"
                                  }
                                ],
                                "id": 4580,
                                "name": "BinaryOperation",
                                "src": "1831:42:15"
                              }
                            ],
                            "id": 4581,
                            "name": "BinaryOperation",
                            "src": "1772:101:15"
                          }
                        ],
                        "id": 4582,
                        "name": "FunctionCall",
                        "src": "1750:134:15"
                      }
                    ],
                    "id": 4583,
                    "name": "ExpressionStatement",
                    "src": "1750:134:15"
                  }
                ],
                "id": 4584,
                "name": "Block",
                "src": "1739:153:15"
              }
            ],
            "id": 4585,
            "name": "FunctionDefinition",
            "src": "1711:181:15"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getEntity",
              "payable": false,
              "scope": 4751,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_id",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4586,
                        "name": "ElementaryTypeName",
                        "src": "2050:7:15"
                      }
                    ],
                    "id": 4587,
                    "name": "VariableDeclaration",
                    "src": "2050:11:15"
                  }
                ],
                "id": 4588,
                "name": "ParameterList",
                "src": "2049:13:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "isBreeding",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4589,
                        "name": "ElementaryTypeName",
                        "src": "2123:4:15"
                      }
                    ],
                    "id": 4590,
                    "name": "VariableDeclaration",
                    "src": "2123:15:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "isReady",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4591,
                        "name": "ElementaryTypeName",
                        "src": "2149:4:15"
                      }
                    ],
                    "id": 4592,
                    "name": "VariableDeclaration",
                    "src": "2149:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "cooldownIndex",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4593,
                        "name": "ElementaryTypeName",
                        "src": "2172:7:15"
                      }
                    ],
                    "id": 4594,
                    "name": "VariableDeclaration",
                    "src": "2172:21:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "nextActionAt",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4595,
                        "name": "ElementaryTypeName",
                        "src": "2204:7:15"
                      }
                    ],
                    "id": 4596,
                    "name": "VariableDeclaration",
                    "src": "2204:20:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "matingWithId",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4597,
                        "name": "ElementaryTypeName",
                        "src": "2235:7:15"
                      }
                    ],
                    "id": 4598,
                    "name": "VariableDeclaration",
                    "src": "2235:20:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "birthTime",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4599,
                        "name": "ElementaryTypeName",
                        "src": "2266:7:15"
                      }
                    ],
                    "id": 4600,
                    "name": "VariableDeclaration",
                    "src": "2266:17:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "breederId",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4601,
                        "name": "ElementaryTypeName",
                        "src": "2294:7:15"
                      }
                    ],
                    "id": 4602,
                    "name": "VariableDeclaration",
                    "src": "2294:17:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "seederId",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4603,
                        "name": "ElementaryTypeName",
                        "src": "2322:7:15"
                      }
                    ],
                    "id": 4604,
                    "name": "VariableDeclaration",
                    "src": "2322:16:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "generation",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4605,
                        "name": "ElementaryTypeName",
                        "src": "2349:7:15"
                      }
                    ],
                    "id": 4606,
                    "name": "VariableDeclaration",
                    "src": "2349:18:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "dna",
                      "scope": 4688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4607,
                        "name": "ElementaryTypeName",
                        "src": "2378:7:15"
                      }
                    ],
                    "id": 4608,
                    "name": "VariableDeclaration",
                    "src": "2378:11:15"
                  }
                ],
                "id": 4609,
                "name": "ParameterList",
                "src": "2112:284:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        4611
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "e",
                          "scope": 4688,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct EntityBase.Entity storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Entity",
                              "referencedDeclaration": 3616,
                              "type": "struct EntityBase.Entity storage pointer"
                            },
                            "id": 4610,
                            "name": "UserDefinedTypeName",
                            "src": "2408:6:15"
                          }
                        ],
                        "id": 4611,
                        "name": "VariableDeclaration",
                        "src": "2408:16:15"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct EntityBase.Entity storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3666,
                              "type": "struct EntityBase.Entity storage ref[] storage ref",
                              "value": "entities"
                            },
                            "id": 4612,
                            "name": "Identifier",
                            "src": "2427:8:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4587,
                              "type": "uint256",
                              "value": "_id"
                            },
                            "id": 4613,
                            "name": "Identifier",
                            "src": "2436:3:15"
                          }
                        ],
                        "id": 4614,
                        "name": "IndexAccess",
                        "src": "2427:13:15"
                      }
                    ],
                    "id": 4615,
                    "name": "VariableDeclarationStatement",
                    "src": "2408:32:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4590,
                              "type": "bool",
                              "value": "isBreeding"
                            },
                            "id": 4616,
                            "name": "Identifier",
                            "src": "2511:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint32",
                                    "typeString": "uint32"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "matingWithId",
                                      "referencedDeclaration": 3611,
                                      "type": "uint32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4611,
                                          "type": "struct EntityBase.Entity storage pointer",
                                          "value": "e"
                                        },
                                        "id": 4617,
                                        "name": "Identifier",
                                        "src": "2525:1:15"
                                      }
                                    ],
                                    "id": 4618,
                                    "name": "MemberAccess",
                                    "src": "2525:14:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 4619,
                                    "name": "Literal",
                                    "src": "2543:1:15"
                                  }
                                ],
                                "id": 4620,
                                "name": "BinaryOperation",
                                "src": "2525:19:15"
                              }
                            ],
                            "id": 4621,
                            "name": "TupleExpression",
                            "src": "2524:21:15"
                          }
                        ],
                        "id": 4622,
                        "name": "Assignment",
                        "src": "2511:34:15"
                      }
                    ],
                    "id": 4623,
                    "name": "ExpressionStatement",
                    "src": "2511:34:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4592,
                              "type": "bool",
                              "value": "isReady"
                            },
                            "id": 4624,
                            "name": "Identifier",
                            "src": "2556:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "cooldownEndBlock",
                                      "referencedDeclaration": 3605,
                                      "type": "uint64"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4611,
                                          "type": "struct EntityBase.Entity storage pointer",
                                          "value": "e"
                                        },
                                        "id": 4625,
                                        "name": "Identifier",
                                        "src": "2567:1:15"
                                      }
                                    ],
                                    "id": 4626,
                                    "name": "MemberAccess",
                                    "src": "2567:18:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "number",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5328,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 4627,
                                        "name": "Identifier",
                                        "src": "2589:5:15"
                                      }
                                    ],
                                    "id": 4628,
                                    "name": "MemberAccess",
                                    "src": "2589:12:15"
                                  }
                                ],
                                "id": 4629,
                                "name": "BinaryOperation",
                                "src": "2567:34:15"
                              }
                            ],
                            "id": 4630,
                            "name": "TupleExpression",
                            "src": "2566:36:15"
                          }
                        ],
                        "id": 4631,
                        "name": "Assignment",
                        "src": "2556:46:15"
                      }
                    ],
                    "id": 4632,
                    "name": "ExpressionStatement",
                    "src": "2556:46:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4594,
                              "type": "uint256",
                              "value": "cooldownIndex"
                            },
                            "id": 4633,
                            "name": "Identifier",
                            "src": "2613:13:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4634,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2629:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "cooldownIndex",
                                  "referencedDeclaration": 3613,
                                  "type": "uint16"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4635,
                                    "name": "Identifier",
                                    "src": "2637:1:15"
                                  }
                                ],
                                "id": 4636,
                                "name": "MemberAccess",
                                "src": "2637:15:15"
                              }
                            ],
                            "id": 4637,
                            "name": "FunctionCall",
                            "src": "2629:24:15"
                          }
                        ],
                        "id": 4638,
                        "name": "Assignment",
                        "src": "2613:40:15"
                      }
                    ],
                    "id": 4639,
                    "name": "ExpressionStatement",
                    "src": "2613:40:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4596,
                              "type": "uint256",
                              "value": "nextActionAt"
                            },
                            "id": 4640,
                            "name": "Identifier",
                            "src": "2664:12:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint64",
                                      "typeString": "uint64"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4641,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2679:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "cooldownEndBlock",
                                  "referencedDeclaration": 3605,
                                  "type": "uint64"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4642,
                                    "name": "Identifier",
                                    "src": "2687:1:15"
                                  }
                                ],
                                "id": 4643,
                                "name": "MemberAccess",
                                "src": "2687:18:15"
                              }
                            ],
                            "id": 4644,
                            "name": "FunctionCall",
                            "src": "2679:27:15"
                          }
                        ],
                        "id": 4645,
                        "name": "Assignment",
                        "src": "2664:42:15"
                      }
                    ],
                    "id": 4646,
                    "name": "ExpressionStatement",
                    "src": "2664:42:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4598,
                              "type": "uint256",
                              "value": "matingWithId"
                            },
                            "id": 4647,
                            "name": "Identifier",
                            "src": "2717:12:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4648,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2732:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "matingWithId",
                                  "referencedDeclaration": 3611,
                                  "type": "uint32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4649,
                                    "name": "Identifier",
                                    "src": "2740:1:15"
                                  }
                                ],
                                "id": 4650,
                                "name": "MemberAccess",
                                "src": "2740:14:15"
                              }
                            ],
                            "id": 4651,
                            "name": "FunctionCall",
                            "src": "2732:23:15"
                          }
                        ],
                        "id": 4652,
                        "name": "Assignment",
                        "src": "2717:38:15"
                      }
                    ],
                    "id": 4653,
                    "name": "ExpressionStatement",
                    "src": "2717:38:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4600,
                              "type": "uint256",
                              "value": "birthTime"
                            },
                            "id": 4654,
                            "name": "Identifier",
                            "src": "2766:9:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint64",
                                      "typeString": "uint64"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4655,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2778:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "birthTime",
                                  "referencedDeclaration": 3603,
                                  "type": "uint64"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4656,
                                    "name": "Identifier",
                                    "src": "2786:1:15"
                                  }
                                ],
                                "id": 4657,
                                "name": "MemberAccess",
                                "src": "2786:11:15"
                              }
                            ],
                            "id": 4658,
                            "name": "FunctionCall",
                            "src": "2778:20:15"
                          }
                        ],
                        "id": 4659,
                        "name": "Assignment",
                        "src": "2766:32:15"
                      }
                    ],
                    "id": 4660,
                    "name": "ExpressionStatement",
                    "src": "2766:32:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4602,
                              "type": "uint256",
                              "value": "breederId"
                            },
                            "id": 4661,
                            "name": "Identifier",
                            "src": "2809:9:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4662,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2821:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "breederId",
                                  "referencedDeclaration": 3607,
                                  "type": "uint32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4663,
                                    "name": "Identifier",
                                    "src": "2829:1:15"
                                  }
                                ],
                                "id": 4664,
                                "name": "MemberAccess",
                                "src": "2829:11:15"
                              }
                            ],
                            "id": 4665,
                            "name": "FunctionCall",
                            "src": "2821:20:15"
                          }
                        ],
                        "id": 4666,
                        "name": "Assignment",
                        "src": "2809:32:15"
                      }
                    ],
                    "id": 4667,
                    "name": "ExpressionStatement",
                    "src": "2809:32:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4604,
                              "type": "uint256",
                              "value": "seederId"
                            },
                            "id": 4668,
                            "name": "Identifier",
                            "src": "2852:8:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4669,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2863:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "seederId",
                                  "referencedDeclaration": 3609,
                                  "type": "uint32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4670,
                                    "name": "Identifier",
                                    "src": "2871:1:15"
                                  }
                                ],
                                "id": 4671,
                                "name": "MemberAccess",
                                "src": "2871:10:15"
                              }
                            ],
                            "id": 4672,
                            "name": "FunctionCall",
                            "src": "2863:19:15"
                          }
                        ],
                        "id": 4673,
                        "name": "Assignment",
                        "src": "2852:30:15"
                      }
                    ],
                    "id": 4674,
                    "name": "ExpressionStatement",
                    "src": "2852:30:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4606,
                              "type": "uint256",
                              "value": "generation"
                            },
                            "id": 4675,
                            "name": "Identifier",
                            "src": "2893:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint256"
                                },
                                "id": 4676,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2906:7:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "generation",
                                  "referencedDeclaration": 3615,
                                  "type": "uint16"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4611,
                                      "type": "struct EntityBase.Entity storage pointer",
                                      "value": "e"
                                    },
                                    "id": 4677,
                                    "name": "Identifier",
                                    "src": "2914:1:15"
                                  }
                                ],
                                "id": 4678,
                                "name": "MemberAccess",
                                "src": "2914:12:15"
                              }
                            ],
                            "id": 4679,
                            "name": "FunctionCall",
                            "src": "2906:21:15"
                          }
                        ],
                        "id": 4680,
                        "name": "Assignment",
                        "src": "2893:34:15"
                      }
                    ],
                    "id": 4681,
                    "name": "ExpressionStatement",
                    "src": "2893:34:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4608,
                              "type": "uint256",
                              "value": "dna"
                            },
                            "id": 4682,
                            "name": "Identifier",
                            "src": "2938:3:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "dna",
                              "referencedDeclaration": 3601,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4611,
                                  "type": "struct EntityBase.Entity storage pointer",
                                  "value": "e"
                                },
                                "id": 4683,
                                "name": "Identifier",
                                "src": "2944:1:15"
                              }
                            ],
                            "id": 4684,
                            "name": "MemberAccess",
                            "src": "2944:5:15"
                          }
                        ],
                        "id": 4685,
                        "name": "Assignment",
                        "src": "2938:11:15"
                      }
                    ],
                    "id": 4686,
                    "name": "ExpressionStatement",
                    "src": "2938:11:15"
                  }
                ],
                "id": 4687,
                "name": "Block",
                "src": "2397:560:15"
              }
            ],
            "id": 4688,
            "name": "FunctionDefinition",
            "src": "2031:926:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "Activate",
              "payable": false,
              "scope": 4751,
              "stateMutability": "nonpayable",
              "superFunction": 357,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4689,
                "name": "ParameterList",
                "src": "3339:2:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4694,
                "name": "ParameterList",
                "src": "3371:0:15"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 47,
                      "type": "modifier ()",
                      "value": "onlyCEO"
                    },
                    "id": 4690,
                    "name": "Identifier",
                    "src": "3349:7:15"
                  }
                ],
                "id": 4691,
                "name": "ModifierInvocation",
                "src": "3349:7:15"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 117,
                      "type": "modifier ()",
                      "value": "isDeactivated"
                    },
                    "id": 4692,
                    "name": "Identifier",
                    "src": "3357:13:15"
                  }
                ],
                "id": 4693,
                "name": "ModifierInvocation",
                "src": "3357:13:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4695,
                            "name": "Identifier",
                            "src": "3382:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3684,
                                  "type": "contract AuctionSell",
                                  "value": "auctionSellContract"
                                },
                                "id": 4696,
                                "name": "Identifier",
                                "src": "3390:19:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 4697,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3413:7:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 4698,
                                    "name": "Literal",
                                    "src": "3421:1:15"
                                  }
                                ],
                                "id": 4699,
                                "name": "FunctionCall",
                                "src": "3413:10:15"
                              }
                            ],
                            "id": 4700,
                            "name": "BinaryOperation",
                            "src": "3390:33:15"
                          }
                        ],
                        "id": 4701,
                        "name": "FunctionCall",
                        "src": "3382:42:15"
                      }
                    ],
                    "id": 4702,
                    "name": "ExpressionStatement",
                    "src": "3382:42:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4703,
                            "name": "Identifier",
                            "src": "3435:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3686,
                                  "type": "contract AuctionSeed",
                                  "value": "auctionSeedContract"
                                },
                                "id": 4704,
                                "name": "Identifier",
                                "src": "3443:19:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 4705,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3466:7:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 4706,
                                    "name": "Literal",
                                    "src": "3474:1:15"
                                  }
                                ],
                                "id": 4707,
                                "name": "FunctionCall",
                                "src": "3466:10:15"
                              }
                            ],
                            "id": 4708,
                            "name": "BinaryOperation",
                            "src": "3443:33:15"
                          }
                        ],
                        "id": 4709,
                        "name": "FunctionCall",
                        "src": "3435:42:15"
                      }
                    ],
                    "id": 4710,
                    "name": "ExpressionStatement",
                    "src": "3435:42:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4711,
                            "name": "Identifier",
                            "src": "3488:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3880,
                                  "type": "contract DnaCoreInterface",
                                  "value": "dnaCoreContract"
                                },
                                "id": 4712,
                                "name": "Identifier",
                                "src": "3496:15:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 4713,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3515:7:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 4714,
                                    "name": "Literal",
                                    "src": "3523:1:15"
                                  }
                                ],
                                "id": 4715,
                                "name": "FunctionCall",
                                "src": "3515:10:15"
                              }
                            ],
                            "id": 4716,
                            "name": "BinaryOperation",
                            "src": "3496:29:15"
                          }
                        ],
                        "id": 4717,
                        "name": "FunctionCall",
                        "src": "3488:38:15"
                      }
                    ],
                    "id": 4718,
                    "name": "ExpressionStatement",
                    "src": "3488:38:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5339,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4719,
                            "name": "Identifier",
                            "src": "3537:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4470,
                                  "type": "address",
                                  "value": "newContractAddress"
                                },
                                "id": 4720,
                                "name": "Identifier",
                                "src": "3545:18:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 4721,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3567:7:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 4722,
                                    "name": "Literal",
                                    "src": "3575:1:15"
                                  }
                                ],
                                "id": 4723,
                                "name": "FunctionCall",
                                "src": "3567:10:15"
                              }
                            ],
                            "id": 4724,
                            "name": "BinaryOperation",
                            "src": "3545:32:15"
                          }
                        ],
                        "id": 4725,
                        "name": "FunctionCall",
                        "src": "3537:41:15"
                      }
                    ],
                    "id": 4726,
                    "name": "ExpressionStatement",
                    "src": "3537:41:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "Activate",
                              "referencedDeclaration": 357,
                              "type": "function ()"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5386,
                                  "type": "contract super EntityCore",
                                  "value": "super"
                                },
                                "id": 4727,
                                "name": "Identifier",
                                "src": "3634:5:15"
                              }
                            ],
                            "id": 4729,
                            "name": "MemberAccess",
                            "src": "3634:14:15"
                          }
                        ],
                        "id": 4730,
                        "name": "FunctionCall",
                        "src": "3634:16:15"
                      }
                    ],
                    "id": 4731,
                    "name": "ExpressionStatement",
                    "src": "3634:16:15"
                  }
                ],
                "id": 4732,
                "name": "Block",
                "src": "3371:287:15"
              }
            ],
            "id": 4733,
            "name": "FunctionDefinition",
            "src": "3322:336:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "withdrawBalance",
              "payable": false,
              "scope": 4751,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4734,
                "name": "ParameterList",
                "src": "3772:2:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4737,
                "name": "ParameterList",
                "src": "3792:0:15"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 58,
                      "type": "modifier ()",
                      "value": "onlyCFO"
                    },
                    "id": 4735,
                    "name": "Identifier",
                    "src": "3784:7:15"
                  }
                ],
                "id": 4736,
                "name": "ModifierInvocation",
                "src": "3784:7:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        4739
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "balance",
                          "scope": 4750,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 4738,
                            "name": "ElementaryTypeName",
                            "src": "3803:7:15"
                          }
                        ],
                        "id": 4739,
                        "name": "VariableDeclaration",
                        "src": "3803:15:15"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "balance",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5385,
                              "type": "contract EntityCore",
                              "value": "this"
                            },
                            "id": 4740,
                            "name": "Identifier",
                            "src": "3821:4:15"
                          }
                        ],
                        "id": 4741,
                        "name": "MemberAccess",
                        "src": "3821:12:15"
                      }
                    ],
                    "id": 4742,
                    "name": "VariableDeclarationStatement",
                    "src": "3803:30:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "send",
                              "referencedDeclaration": null,
                              "type": "function (uint256) returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5,
                                  "type": "address",
                                  "value": "cfoAddress"
                                },
                                "id": 4743,
                                "name": "Identifier",
                                "src": "4047:10:15"
                              }
                            ],
                            "id": 4745,
                            "name": "MemberAccess",
                            "src": "4047:15:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4739,
                              "type": "uint256",
                              "value": "balance"
                            },
                            "id": 4746,
                            "name": "Identifier",
                            "src": "4063:7:15"
                          }
                        ],
                        "id": 4747,
                        "name": "FunctionCall",
                        "src": "4047:43:15"
                      }
                    ],
                    "id": 4748,
                    "name": "ExpressionStatement",
                    "src": "4047:43:15"
                  }
                ],
                "id": 4749,
                "name": "Block",
                "src": "3792:319:15"
              }
            ],
            "id": 4750,
            "name": "FunctionDefinition",
            "src": "3748:363:15"
          }
        ],
        "id": 4751,
        "name": "ContractDefinition",
        "src": "59:4057:15"
      }
    ],
    "id": 4752,
    "name": "SourceUnit",
    "src": "0:4116:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5778": {
      "events": {},
      "links": {},
      "address": "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T07:22:20.863Z"
}	
	};
	
	for(var cn in contracts){
	    if (window.web3 !== undefined) {
            contracts[cn].instance = window.web3.eth.contract(contract_defs[cn].abi).at(contracts[cn].address);
        } else {
	        // let web3 = new Web3(new Web3.providers.HttpProvider(""));
	        // contracts[cn].instance = web3.eth.contract(contract_defs[cn].abi).at(contracts[cn].address);
        }

	}
})();