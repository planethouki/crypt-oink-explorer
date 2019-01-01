let contracts;
let pageSize;
let table;
let totalSupply;
let sammy;

async function getEntityFromTokenId(tokenId) {
    const getEntity = new Promise((resolve, reject) => {
        contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
            if (error) reject(error);
            if (result) {
                resolve({
                    "id": tokenId,
                    "tokenId": tokenId,
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`,
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
        context.totalSupply = await new Promise((resolve, reject) => {
            contracts.EntityCore.totalSupply({}, (error, result) => {
                if (error) reject(error);
                if (result) resolve(result.toNumber());
            });
        });
        table.clearData();
        callback();
    });

    this.get('#/', function(context) {
        const from = context.totalSupply;
        const to = context.totalSupply - 20;
        let tableData = [];
        for (let i = from; to < i; i--) {
            tableData.push({id: i});
        }
        table.addData(tableData);
    });

    this.get('#/page/:page', function(context) {
        const page = Number(this.params['page']);
        const from = context.totalSupply - (20 * (page - 1));
        const to = context.totalSupply - (20 * (page));
        let tableData = [];
        for (let i = from; to < i; i--) {
            tableData.push({id: i});
        }
        table.addData(tableData);
    });
});

$(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();

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


    sammy.run('#/');

});