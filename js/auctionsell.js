function renderEntity(tokenId) {
    contracts.AuctionSell.getAuction(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result[0].toString() !== "0x") {
            $("#dataEntity").tabulator("addData",
                [
                    {
                        "id": tokenId,
                        "tokenId": tokenId,
                        "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`,
                        "seller": result[0].toString(),
                        "startingPrice": result[1].toString(),
                        "endingPrice": result[2].toString(),
                        "duration": result[3].toString(),
                        "startedAt": result[4].toString(),
                    }
                ]
            );
        }
    });
}

function renderEntities(tokenId, num) {
    for (let i=0;i<num;i++) {
        if (tokenId - i < 1) return;
        renderEntity(tokenId - i);
    }
}

function renderPagination(len) {
    $('#pagination').pagination({
        dataSource: getSequence(len),
        pageSize: 50,
        showGoInput: true,
        showGoButton: true,
        callback: function(data, pagination) {
            $("#dataEntity").tabulator("clearData");
            data.map((tokenId) => {
                renderEntity(tokenId);
            });
        }
    });
}

function getSequence(len) {
    let a = new Array(len);
    for (let i = 0; i < len; i++) {
        a[i] = len - i;
    }
    return a;
}

async function init() {
    const tableContainer = $("#dataEntity");
    tableContainer.tabulator({
        columns:[
            {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
            {title:"seller", field:"seller", sorter:"number", "cssClass":"col-owner"},
            {title:"startingPrice", field:"startingPrice", sorter:"number", "cssClass":"col-seeder"},
            {title:"endingPrice", field:"endingPrice", sorter:"number", headerTooltip:"generation", "cssClass":"col-gen"},
            {title:"duration", field:"duration", sorter:"string", "cssClass":"col-gen"},
            {title:"startedAt", field:"startedAt", sorter:"string", "cssClass":"col-gen"},
        ],
    });
    const totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });
    renderEntities(totalSupply, 50);
    renderPagination(totalSupply);
    $("#getEntity").click(() => {
        const tokenId = $("input[name=tokenId]").val();
        if (tokenId === "") return;
        const container = $("#pagination");
        const totalPage = container.pagination("getTotalPage");
        const page = Math.floor((totalSupply - tokenId) / 50 + 1);
        if (page < 1 || totalPage < page) return;
        container.pagination("go", page);
    });
}

$(async () => {
    contracts = await getInstance();
    await init();
});