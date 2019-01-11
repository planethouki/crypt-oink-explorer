let contracts;
let pageSize;
let deck;
let totalSupply;
let sammy;


(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();
    totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });

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

    function showDetail(tokenId) {
        $("#detailThumb img").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
        $('#detailContent').modal('show');
        getEntityFromTokenId(id).then(entity => {
            Object.keys(entity).map((key) => {
                $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
            });
        });
    }

    deck = {
        addData: function(data) {
            data.filter(token => token.id > 0).map(token => {
                const id = token.id;
                $("#cardEntity").append(`<div class="col-6 col-sm-3 col-md-2"><div class="card"><img src="${token.thumb}" id="token${id}" />` +
                    `<div class="card-body"><div class="card-text">${id}</div></div></div></div>`);
                $(`#token${id}`).click(event => {
                    showDetail(id);
                });
            })
        },
        clearData: function() {
            $("#cardEntity").empty();
        }
    };


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            context.totalSupply = totalSupply;
            context.pageSize = pageSize;
            deck.clearData();
            callback();
        });

        this.get('#/page/:page', function(context) {
            const page = Number(this.params['page']);
            const from = context.totalSupply - (context.pageSize * (page - 1));
            const to = context.totalSupply - (context.pageSize * (page));
            let tableData = [];
            for (let i = from; to < i; i--) {
                tableData.push({
                    id: i,
                    "tokenId": i,
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${i}_512x586.png`,
                });
            }
            deck.addData(tableData);
        });
    });


    $(() => {
        sammy.run('#/page/1');

        const topPagination = $('#topPagination');
        const bottomPagination = $('#bottomPagination');

        [topPagination, bottomPagination].map(container => {
            container.pagination({
                dataSource: async function(done) {
                    const totalSupply = await new Promise((resolve, reject) => {
                        contracts.EntityCore.totalSupply({}, (error, result) => {
                            if (error) reject(error);
                            if (result) resolve(result.toNumber());
                        });
                    });
                    const totalPage = Math.floor((totalSupply - 1) / pageSize + 1);
                    const page = [];
                    for (let i = 1; i <= totalPage; i++) {
                        page.push(i);
                    }
                    done(page);
                },
                pageSize: 1,
                pageNumber: (function() {
                    const hash = location.hash;
                    return Number(hash.split("/")[2]);
                })(),
                triggerPagingOnInit: false,
                afterPageOnClick: function() {
                    const page = container.pagination('getSelectedPageNum');
                    location.hash = `#/page/${page}`
                },
            });
        });

        sammy.before(function() {
            const hash = location.hash;
            const page = Number(hash.split("/")[2]);
            [topPagination, bottomPagination].map(container => {
                container.pagination('go', page);
            });
        });

        $("#getEntity").click(async () => {
            const tokenId = $("input[name=tokenId]").val();
            if (tokenId === "") return;
            const totalSupply = await new Promise((resolve, reject) => {
                contracts.EntityCore.totalSupply({}, (error, result) => {
                    if (error) reject(error);
                    if (result) resolve(result.toNumber());
                });
            });
            if (totalSupply < tokenId) return;
            const page = Math.floor((totalSupply - tokenId) / pageSize + 1);
            if (page < 1) return;
            location.hash = `#/page/${page}`
        });

    });

})();
