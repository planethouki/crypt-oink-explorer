function renderEntity(tokenId) {
    $("#dataEntity").tabulator("addData",
        [
            {
                "id": tokenId,
                "tokenId": tokenId,
                "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`
            }
        ]
    );

    contracts.EntityCore.instance.getEntity(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result) {
            $("#dataEntity").tabulator("updateData",
                [
                    {
                        "id": tokenId,
                        "isBreeding": result[0].toString(),
                        "isReady": result[1].toString(),
                        "cooldownIndex": result[2],
                        "nextActionAt": result[3],
                        "matingWithId": result[4],
                        "birthTime": result[5],
                        "breederId": result[6],
                        "seederId": result[7],
                        "generation": result[8],
                        "dna": new BigNumber(result[9]).toString(16),
                    }
                ]
            );
        }
    });
    contracts.EntityCore.instance.ownerOf(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result) {
            $("#dataEntity").tabulator("updateData",
                [
                    {
                        "id": tokenId,
                        "owner": result
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
        pageSize: 20,
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

function initialRender() {
    contracts.EntityCore.instance.totalSupply({}, (error, result) => {
        if (error) console.log(error);
        if (result) {
            let tokenId = new BigNumber(result);
            renderEntities(tokenId, 20);
            renderPagination(tokenId);
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

function init() {
    $("#dataEntity").tabulator({
        height:"1557px",
        columns:[
            {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", width:100, headerSort:false},
            {title:"tokenId", field:"tokenId", sorter:"number"},
            {title:"Brd", field:"isBreeding", sorter:"string", headerTooltip:"isBreeding", width:70},
            {title:"Rdy", field:"isReady", sorter:"string", headerTooltip:"isReady", width:70},
            {title:"CDI", field:"cooldownIndex", sorter:"number", headerTooltip:"cooldownIndex", width:70},
            {title:"NAA", field:"nextActionAt", sorter:"number", headerTooltip:"nextActionAt", width:70},
            {title:"MWI", field:"matingWithId", sorter:"number", headerTooltip:"matingWtidhId", width:70},
            {title:"birthTime", field:"birthTime", sorter:"number"},
            {title:"breederId", field:"breederId", sorter:"number"},
            {title:"seederId", field:"seederId", sorter:"number"},
            {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", width:70},
            {title:"dna", field:"dna", sorter:"string", width:550},
            {title:"owner", field:"owner", sorter:"string", width:450},
        ],
    });
    $("#getEntity").click(() => {
        let tokenId = new BigNumber($("input[name=tokenId]").val());
        $("#dataEntity").tabulator("clearData");
        if (tokenId === null || isNaN(tokenId)) {
            initialRender();
        } else {
            renderEntities(tokenId, 20);
        }
    });
    initialRender();
}

(() => {
    addEventListener("load", init);
})();