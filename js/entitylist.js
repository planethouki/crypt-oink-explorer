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

    contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
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
                        "dna": result[9].toString(16),
                    }
                ]
            );
        }
    });
    contracts.EntityCore.ownerOf(tokenId, {}, (error, result) => {
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

function getSequence(len) {
    let a = new Array(len);
    for (let i = 0; i < len; i++) {
        a[i] = len - i;
    }
    return a;
}

function renderDetailContent(tokenId) {
    contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result) {
            const data = {
                "tokenId": tokenId,
                "isBreeding": result[0].toString(),
                "isReady": result[1].toString(),
                "cooldownIndex": result[2],
                "nextActionAt": result[3],
                "matingWithId": result[4],
                "birthTime": result[5],
                "breederId": result[6],
                "seederId": result[7],
                "generation": result[8],
            };
            Object.keys(data).map((key) => {
                $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + data[key] + "</div>");
            });
            $("#detailEntity #dna").html("<strong>dna</strong><div>" + result[9].toString(16) + "</div>");
        }
    });
    contracts.EntityCore.ownerOf(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result) {
            $("#detailEntity #owner").html("<strong>owner</strong><div>" + result + "</div>");
        }
    });
    $("#detailThumb img").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
}

async function init() {
    const tableContainer = $("#dataEntity");
    tableContainer.tabulator({
        height:"1557px",
        columns:[
            {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
            {title:"breeder", field:"breederId", sorter:"number", "cssClass":"col-breeder"},
            {title:"seeder", field:"seederId", sorter:"number", "cssClass":"col-seeder"},
            {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", "cssClass":"col-gen"},
            {title:"owner", field:"owner", sorter:"string", "cssClass":"col-owner"},
        ],
        // columns:[
        //     {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", width:100, headerSort:false},
        //     {title:"tokenId", field:"tokenId", sorter:"number"},
        //     {title:"Brd", field:"isBreeding", sorter:"string", headerTooltip:"isBreeding", width:70},
        //     {title:"Rdy", field:"isReady", sorter:"string", headerTooltip:"isReady", width:70},
        //     {title:"CDI", field:"cooldownIndex", sorter:"number", headerTooltip:"cooldownIndex", width:70},
        //     {title:"NAA", field:"nextActionAt", sorter:"number", headerTooltip:"nextActionAt", width:70},
        //     {title:"MWI", field:"matingWithId", sorter:"number", headerTooltip:"matingWtidhId", width:70},
        //     {title:"birthTime", field:"birthTime", sorter:"number"},
        //     {title:"breederId", field:"breederId", sorter:"number"},
        //     {title:"seederId", field:"seederId", sorter:"number"},
        //     {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", width:70},
        //     {title:"dna", field:"dna", sorter:"string", width:550},
        //     {title:"owner", field:"owner", sorter:"string", width:450},
        // ],
        rowClick:function(event, row){
            //e - the click event object
            //row - row component
            const tokenId = row.row.data.tokenId;
            renderDetailContent(tokenId);
            openmodal("detailContent");
        },
    });
    const totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });
    renderEntities(totalSupply, 20);
    renderPagination(totalSupply);
    $("#getEntity").click(() => {
        const tokenId = $("input[name=tokenId]").val();
        if (tokenId === "") return;
        const container = $("#pagination");
        const totalPage = container.pagination("getTotalPage");
        const page = Math.floor((totalSupply - tokenId) / 20 + 1);
        if (page < 1 || totalPage < page) return;
        container.pagination("go", page);
    });
}

$(function() {
    init();
});