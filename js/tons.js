let contracts;
let pageSize;
let table;
let deck;
let totalSupply;
let sammy;
let entity;


(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();
    totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });

    entity = {
        addData: function(data) {
            const context = this;
            data
                .filter(token => !context.hasOwnProperty(token.id))
                .map(function(token) {
                    const tokenId = token.id;
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
                    context[tokenId] = Promise.all([getEntity, ownerOf]).then(entityAndOwner => {
                        let entity = entityAndOwner[0];
                        entity["owner"] = entityAndOwner[1]["owner"];
                        return entity;
                    });
                });
        },
        getEntityFromTokenId: async function(tokenId) {
            return await this[tokenId];
        }
    };

    function showModal(tokenId) {
        $("#modalThumb").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
        $('#modalContent').modal('show');
        entity.getEntityFromTokenId(tokenId).then(entity => {
            Object.keys(entity).map((key) => {
                const container = $(`#modal-${key}`);
                switch (key) {
                    case "tokenId":
                    case "matingWithId":
                    case "breederId":
                    case "seederId":
                        const tokenId = entity[key];
                        if (tokenId !== 0) {
                            container.html(`<strong>${key}</strong><div><a href="ton.html#/ton/${tokenId}">${tokenId}</a></div>`);
                        } else {
                            container.html(`<strong>${key}</strong><div>${tokenId}</div>`);
                        }
                        break;
                    case "owner":
                        container.html(`<strong>${key}</strong><div><a href="ownership.html#/ownership/${entity[key]}">${entity[key]}</a></div>`);
                        break;
                    default:
                        container.html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
                }
            });
        });
    }

    table = new Tabulator("#dataEntity", {
        responsiveLayout: true,
        columns: [
            {title:"thumb", field:"thumb", formatter:"image", responsive:0, "cssClass":"col-thumb", headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", responsive:0, "cssClass":"col6rem"},
            {title:"gen", field:"generation", sorter:"number", responsive:0, headerTooltip:"generation", "cssClass":"col6rem"},
            {title:"breeder", field:"breederId", sorter:"number", responsive:2, "cssClass":"col6rem"},
            {title:"seeder", field:"seederId", sorter:"number", responsive:2, "cssClass":"col6rem"},
            {title:"owner", field:"owner", sorter:"string", responsive:1, "cssClass":"col30rem"},
        ],
        rowAdded: function(row){
            const tokenId = row._row.data.id;
            entity.getEntityFromTokenId(tokenId).then(entity => {
                this.updateData([entity]);
            });
        },
        rowClick: function(event, row) {
            showModal(row._row.data.tokenId);
        },
    });

    deck = {
        addData: function(data) {
            data.filter(token => token.id > 0).map(token => {
                const id = token.id;
                const thumb = token.thumb;
                $("#cardEntity").append(`<div class="col-6 col-sm-3 col-lg-2"><div class="card btn" id="card-token${id}"><img src="${thumb}" />` +
                    `<div class="card-body"><div class="card-text">${id}</div></div></div></div>`);
                $(`#card-token${id}`).click(event => {
                    showModal(id);
                });
            })
        },
        clearData: function() {
            $("#cardEntity").empty();
        }
    };


    sammy = Sammy("#main", function() {

        this.around(async function(callback) {
            const context = this;
            context.totalSupply = totalSupply;
            context.pageSize = pageSize;
            table.clearData();
            deck.clearData();
            callback();
        });

        this.get('#/tons/:type/:page', function(context) {
            const page = Number(this.params['page']);
            const from = context.totalSupply - (context.pageSize * (page - 1));
            const to = context.totalSupply - (context.pageSize * (page));
            let tableData = [];
            for (let i = from; to < i; i--) {
                if (i <= 0) continue;
                tableData.push({
                    id: i,
                    "tokenId": i,
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${i}_512x586.png`,
                });
            }
            entity.addData(tableData);
            deck.addData(tableData);
            table.addData(tableData);
        });
    });


    $(() => {

        function getPageNumberFromHash() {
            const hash = location.hash;
            return Number(hash.split("/")[3]);
        }
        function getTypeFromHash() {
            const hash = location.hash;
            return hash.split("/")[2];
        }

        const topPagination = $('#topPagination');
        const bottomPagination = $('#bottomPagination');

        [topPagination, bottomPagination].map(container => {
            container.pagination({
                dataSource: async function(done) {
                    const totalPage = Math.floor((totalSupply - 1) / pageSize + 1);
                    const page = [];
                    for (let i = 1; i <= totalPage; i++) {
                        page.push(i);
                    }
                    done(page);
                },
                pageSize: 1,
                pageNumber: getPageNumberFromHash(),
                triggerPagingOnInit: false,
                afterPageOnClick: function(event, page) {
                    location.hash = `#/tons/${getTypeFromHash()}/${page}`
                },
                afterNextOnClick: function(event, page) {
                    location.hash = `#/tons/${getTypeFromHash()}/${page}`
                },
                afterPreviousOnClick: function(event, page) {
                    location.hash = `#/tons/${getTypeFromHash()}/${page}`
                },
            });
        });

        function updatePaginationPage(page) {
            [topPagination, bottomPagination].map(container => {
                container.pagination('go', page);
            });
        }



        function updateListOrCard(type) {
            const buttonList = $("#btnList");
            const buttonCard = $("#btnCard");
            const list = $("#dataEntity");
            const card = $("#cardEntity");
            buttonList.attr("href", `#/tons/list/${getPageNumberFromHash()}`);
            buttonCard.attr("href", `#/tons/card/${getPageNumberFromHash()}`);
            switch (type) {
                case "list":
                    buttonList.addClass("active");
                    buttonCard.removeClass("active");
                    list.removeClass("d-none");
                    card.addClass("d-none");
                    break;
                case "card":
                    buttonList.removeClass("active");
                    buttonCard.addClass("active");
                    list.addClass("d-none");
                    card.removeClass("d-none");
                    break;
            }
        }


        sammy.before(function() {
            updatePaginationPage(getPageNumberFromHash());
            updateListOrCard(getTypeFromHash());
        });

        sammy.run('#/tons/list/1');


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
            location.hash = `#/tons/${getTypeFromHash()}/${page}`
        });
    });

})();
