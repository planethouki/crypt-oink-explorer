let contracts;

function renderEntity(tokenId) {
    $("#dataEntity").tabulator("addData",
        [
            {
                "id": tokenId,
                "tokenId": tokenId,
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
                        "cooldownIndex": result[2].toNumber(),
                        "nextActionAt": result[3].toNumber(),
                        "matingWithId": result[4].toNumber(),
                        "birthTime": result[5].toNumber(),
                        "breederId": result[6].toNumber(),
                        "seederId": result[7].toNumber(),
                        "generation": result[8].toNumber(),
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

async function init() {
    const tableContainer = $("#dataEntity");
    tableContainer.tabulator({
        // columns: [
        //     {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
        //     {title:"breeder", field:"breederId", sorter:"number", "cssClass":"col-breeder"},
        //     {title:"seeder", field:"seederId", sorter:"number", "cssClass":"col-seeder"},
        //     {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", "cssClass":"col-gen"},
        //     {title:"owner", field:"owner", sorter:"string", "cssClass":"col-owner"},
        // ],
        columns: [
            {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
            {title:"Brd", field:"isBreeding", sorter:"string", headerTooltip:"isBreeding", width:70},
            {title:"Rdy", field:"isReady", sorter:"string", headerTooltip:"isReady", width:70},
            {title:"CDI", field:"cooldownIndex", sorter:"number", headerTooltip:"cooldownIndex", width:70},
            {title:"NAA", field:"nextActionAt", sorter:"number", headerTooltip:"nextActionAt", width:70},
            {title:"MWI", field:"matingWithId", sorter:"number", headerTooltip:"matingWtidhId", width:70},
            {title:"birthTime", field:"birthTime", sorter:"number"},
            {title:"breeder", field:"breederId", sorter:"number", "cssClass":"col-breeder"},
            {title:"seeder", field:"seederId", sorter:"number", "cssClass":"col-seeder"},
            {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", "cssClass":"col-gen"},
            {title:"dna", field:"dna", sorter:"string", width:550},
            {title:"owner", field:"owner", sorter:"string", "cssClass":"col-owner"},
        ],
    });
    $("#getEntity").click(() => {
        const tokenId = $("input[name=tokenId]").val();
        const pageSize = $("input[name=size]").val();
        if (tokenId === "" || pageSize === "") return;
        $("#dataEntity").tabulator("clearData");
        for (let i = parseInt(tokenId); i < parseInt(tokenId) + parseInt(pageSize); i++ ) {
            if (i % 10 === 0) {
                console.log(`fetching ${i}`);
            }
            renderEntity(i);
        }
    });
    $("#donloadCSV").click(() => {
        tableContainer.tabulator("download", "csv", "data.csv");
    });
}

$(async () => {
    contracts = await getInstance();
    await init();
});