let contracts;
let pageSize;
let deck;
let sammy;
let ownershipAddress;
let ownershipTokenIds;


(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();

    async function getEntityFromTokenId(tokenId) {
        const getEntity = new Promise((resolve, reject) => {
            contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
                if (error) reject(error);
                if (result) {
                    resolve({
                        "id": tokenId,
                        "tokenId": tokenId,
                        "isBreeding": result[0].toString(),
                        "isReady": result[1].toString(),
                        "cooldownIndex": result[2].toNumber(),
                        "nextActionAt": result[3].toNumber(),
                        "matingWithId": result[4].toNumber(),
                        "birthTime": result[5].toNumber(),
                        "breederId": result[6].toNumber(),
                        "seederId": result[7].toNumber(),
                        "generation": result[8].toNumber(),
                        "dna": result[9].toString(16),
                    });
                }
                resolve();
            });
        });
        const ownerOf = new Promise((resolve, reject) => {
            contracts.EntityCore.ownerOf(tokenId, {}, (error, result) => {
                if (error) console.log(error);
                if (result) {
                    resolve({
                        "owner": result
                    });
                }
                resolve();
            });
        });
        const entityAndOwner = await Promise.all([getEntity, ownerOf]);
        let entity = entityAndOwner[0];
        entity["owner"] = entityAndOwner[1]["owner"];
        return entity;
    }

    deck = {
        addData: function(data) {
            data.filter(token => token.id > 0).map(token => {
                const id = token.id;
                $("#cardEntity").append(`<div class="col-6 col-sm-3 col-lg-2"><div class="card"><img src="${token.thumb}" id="token${id}" class="btn" />` +
                    `<div class="card-img-overlay"><div class="card-text">${id}</div></div></div></div>`);
                $(`#token${id}`).click(event => {
                    $("#detailThumb img").attr("src", token.thumb);
                    $('#detailContent').modal('show');
                    getEntityFromTokenId(id).then(entity => {
                        Object.keys(entity).map((key) => {
                            $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
                        });
                    });
                });
            })

        },
        clearData: function() {
            $("#cardEntity").empty();
        }
    };


    sammy = $.sammy("#main", function() {
        const render = async function(context) {
            const topPagination = $('#topPagination');
            const bottomPagination = $('#bottomPagination');
            if (ownershipAddress !== context.address) {
                ownershipAddress = context.address;
                ownershipTokenIds = await new Promise((resolve, reject) => {
                    $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownertotokens/${context.address}.json`, (json) => {
                        json.reverse();
                        resolve(json);
                    });
                });
                [topPagination, bottomPagination].map(container => {
                    container.pagination({
                        dataSource: ownershipTokenIds,
                        pageSize: context.pageSize,
                        pageNumber: context.page,
                        triggerPagingOnInit: false,
                        afterPageOnClick: function() {
                            const page = container.pagination('getSelectedPageNum');
                            location.hash = `#/address/${context.address}/page/${page}`
                        },
                    });
                });
            } else {
                [topPagination, bottomPagination].map(container => {
                    container.pagination('go', context.page);
                });
            }
            const sliceFrom = (context.pageSize * (context.page - 1));
            const sliceTo = (context.pageSize * (context.page));
            const tableData = ownershipTokenIds.slice(sliceFrom,sliceTo).map(tokenId => {
                return {
                    id: Number(tokenId),
                    "tokenId": Number(tokenId),
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`,
                }
            });
            deck.addData(tableData);
            $("#ownerAddress").text(context.address);

        };

        this.around(async function(callback) {
            const context = this;
            context.render = render;
            context.pageSize = pageSize;
            deck.clearData();
            callback();
        });

        this.get('#/address/:address', function(context) {
            context.page = 1;
            context.address = this.params['address'].toLowerCase();
            context.render(context);
        });

        this.get('#/address/:address/page/:page', function(context) {
            context.page = Number(this.params['page']);
            context.address = this.params['address'].toLowerCase();
            context.render(context);
        });
    });


    $(() => {
        sammy.run('#/address/0xa2156F24711A631e92e65dC114CF172065dDd49b');

        $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json`, (json) => {
            web3.eth.getBlock(json.block, (error, result) => {
                const date = new Date(result.timestamp * 1000);
                $("#lastMod").text("Last Modified: ".concat(date.toUTCString()));
            });
        });


        $("#getOwner").click(async () => {
            const address = $("input[name=owner]").val();
            if (address === "") return;
            location.hash = `#/address/${address}`
        });


    });

})();