let contracts;
let totalSupply;
let sammy;


(async () => {
    contracts = await getInstance();
    totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });

    async function getStateFromTokenId(tokenId) {
        const getEntity = new Promise((resolve, reject) => {
            contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const ownerOf = new Promise((resolve, reject) => {
            contracts.EntityCore.ownerOf(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const getAuctionSell = new Promise((resolve, reject) => {
            contracts.AuctionSell.getAuction(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const getCurrentSellPrice = new Promise((resolve, reject) => {
            contracts.AuctionSell.getCurrentPrice(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const getAuctionSeed = new Promise((resolve, reject) => {
            contracts.AuctionSeed.getAuction(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const getCurrentSeedPrice = new Promise((resolve, reject) => {
            contracts.AuctionSeed.getCurrentPrice(tokenId, {}, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
        });
        const entityAndOwner = await Promise.all([getEntity, ownerOf, getAuctionSell, getCurrentSellPrice, getAuctionSeed, getCurrentSeedPrice]);
        const resultEntity = entityAndOwner[0];
        const resultOwner = entityAndOwner[1];
        const resultAuctionSell = entityAndOwner[2];
        const resultSellPrice = entityAndOwner[3];
        const resultAuctionSeed = entityAndOwner[4];
        const resultSeedPrice = entityAndOwner[5];
        const state = {
            entity: {
                "owner": resultOwner,
                "tokenId": tokenId,
                "isBreeding": resultEntity[0].toString(),
                "isReady": resultEntity[1].toString(),
                "cooldownIndex": resultEntity[2].toNumber(),
                "nextActionAt": resultEntity[3].toNumber(),
                "matingWithId": resultEntity[4].toNumber(),
                "birthTime": resultEntity[5].toNumber(),
                "breederId": resultEntity[6].toNumber(),
                "seederId": resultEntity[7].toNumber(),
                "generation": resultEntity[8].toNumber(),
                "dna": resultEntity[9].toString(16),
            }
        };
        if (resultAuctionSell[0].toString() !== "0x") {
            state["shop"] = {
                "seller": resultAuctionSell[0].toString(),
                "startingPrice": resultAuctionSell[1].toString(),
                "endingPrice": resultAuctionSell[2].toString(),
                "duration": resultAuctionSell[3].toString(),
                "startedAt": resultAuctionSell[4].toString(),
                "currentPrice": resultSellPrice.toString(),
            }
        }
        if (resultAuctionSeed[0].toString() !== "0x") {
            state["seed"] = {
                "seller": resultAuctionSeed[0].toString(),
                "startingPrice": resultAuctionSeed[1].toString(),
                "endingPrice": resultAuctionSeed[2].toString(),
                "duration": resultAuctionSeed[3].toString(),
                "startedAt": resultAuctionSeed[4].toString(),
                "currentPrice": resultSeedPrice.toString(),
            }
        }
        return state;
    }


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            callback();
        });

        this.get('#/ton/:tokenid', function(context) {
            const tokenId = Number(this.params['tokenid']);
            const container = $("#detailEntity");
            container.empty();
            $("img#detailThumb").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
            getStateFromTokenId(tokenId).then(state => {
                Object.keys(state).map(type => {
                    container.append(`<div id="${type}"><h1 class="display-4">${type}</h1><div class="row"></div></div>`);
                    Object.keys(state[type]).map((key) => {
                        const value = state[type][key];
                        const colSize = value.toString().length < 30 ? "col-6" : "col-12";
                        const row = $(`#detailEntity #${type} .row`);
                        switch (key) {
                            case "tokenId":
                            case "matingWithId":
                            case "breederId":
                            case "seederId":
                                const tokenId = value;
                                if (tokenId !== 0) {
                                    row.append(`<div class="${colSize} card"><strong>${key}</strong><div><a href="ton.html#/ton/${tokenId}">${tokenId}</a></div></div>`);
                                } else {
                                    row.append(`<div class="${colSize} card"><strong>${key}</strong><div>${tokenId}</div></div>`);
                                }
                                break;
                            case "owner":
                            case "seller":
                                row.append(`<div class="${colSize} card"><strong>${key}</strong><div><a href="ownership.html#/ownership/${value}">${value}</a></div></div>`);
                                break;
                            default:
                                row.append(`<div class="${colSize} card"><strong>${key}</strong><div>${value}</div></div>`);
                        }
                    });
                    container.append('<div style="height:1rem;"></div>');
                });
            });
        });
    });


    $(() => {
        sammy.run(`#/ton/${totalSupply}`);

        $("#getEntity").click(async () => {
            const tokenId = $("input[name=tokenId]").val();
            if (tokenId === "" || tokenId <= 0) return;
            location.hash = `#/ton/${tokenId}`
        });
    });

})();
