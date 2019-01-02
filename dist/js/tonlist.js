let contracts;
let pageSize;
let table;
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

    table = new Tabulator("#dataEntity", {
        columns: [
            {title:"thumb", field:"thumb", formatter:"image", "cssClass":"col-thumb", headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
            {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", "cssClass":"col-gen"},
            {title:"owner", field:"owner", sorter:"string", "cssClass":"col-owner"},
        ],
        rowAdded: function(row){
            const id = row._row.data.id;
            getEntityFromTokenId(id).then(entity => {
                this.updateData([entity]);
            });
        },
        rowClick: function(event, row) {
            const tokenId = row._row.data.tokenId;
            $("#detailThumb img").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
            $('#detailContent').modal('show');
            getEntityFromTokenId(tokenId).then(entity => {
                Object.keys(entity).map((key) => {
                    $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
                });
            });
        },
    });

    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            // context.totalSupply = await new Promise((resolve, reject) => {
            //     contracts.EntityCore.totalSupply({}, (error, result) => {
            //         if (error) reject(error);
            //         if (result) resolve(result.toNumber());
            //     });
            // });
            context.totalSupply = totalSupply;
            table.clearData();
            callback();
        });

        this.get('#/', function(context) {
            const from = context.totalSupply;
            const to = context.totalSupply - pageSize;
            let tableData = [];
            for (let i = from; to < i; i--) {
                tableData.push({
                    id: i,
                    "tokenId": i,
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${i}_512x586.png`,
                });
            }
            table.addData(tableData);
        });

        this.get('#/page/:page', function(context) {
            const page = Number(this.params['page']);
            const from = context.totalSupply - (pageSize * (page - 1));
            const to = context.totalSupply - (pageSize * (page));
            let tableData = [];
            for (let i = from; to < i; i--) {
                tableData.push({
                    id: i,
                    "tokenId": i,
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${i}_512x586.png`,
                });
            }
            table.addData(tableData);
        });
    });


    $(() => {
        sammy.run('#/');

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

        $('#topPagination').pagination({
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
                if (hash === "#/") {
                    return 1;
                }
                const page = hash.split("/")[2];
                return Number(page);
            })(),
            triggerPagingOnInit: false,
            callback: function(data, pagination) {
                console.log("pagination callback");
                location.hash = `#/page/${pagination.pageNumber}`
            },
        });

        $('#bottomPagination').pagination({
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
                if (hash === "#/") {
                    return 1;
                }
                const page = hash.split("/")[2];
                return Number(page);
            })(),
            triggerPagingOnInit: false,
            callback: function(data, pagination) {
                console.log("pagination callback");
                location.hash = `#/page/${pagination.pageNumber}`
            },
        });
    });
})();
