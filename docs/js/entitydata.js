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
        layout:"fitColumns",
        columns: [
            {title:"tokenId", field:"tokenId", sorter:"number", headerTooltip:"tokenId", width:100},
            {title:"isBreeding", field:"isBreeding", sorter:"string", headerTooltip:"isBreeding", width:100},
            {title:"isReady", field:"isReady", sorter:"string", headerTooltip:"isReady", width:100},
            {title:"cooldown", field:"cooldownIndex", sorter:"number", headerTooltip:"cooldownIndex", width:100},
            {title:"next", field:"nextActionAt", sorter:"number", headerTooltip:"nextActionAt", width:100},
            {title:"mate", field:"matingWithId", sorter:"number", headerTooltip:"matingWtidhId", width:100},
            {title:"birth", field:"birthTime", sorter:"number", headerTooltip:"birthTime", width:100},
            {title:"breed", field:"breederId", sorter:"number", headerTooltip:"breederId", width:100},
            {title:"seed", field:"seederId", sorter:"number", headerTooltip:"seederId", width:100},
            {title:"gen", field:"generation", sorter:"number", headerTooltip:"generation", width:100},
            {title:"dna", field:"dna", sorter:"string", headerTooltip:"dna", minWidth:100},
            {title:"owner", field:"owner", sorter:"string", headerTooltip:"owner", minWidth:100}
        ],
    });
    const totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });
    $("#getEntity").click(() => {
        let tokenId = $("input[name=tokenId]").val();
        let pageSize = $("input[name=size]").val();
        let interval = $("input[name=interval]").val();
        tokenId = tokenId === "" ? parseInt(totalSupply) - 10 : parseInt(tokenId);
        pageSize = pageSize === "" ? 10 : parseInt(pageSize);
        interval = interval === "" ? 500 : parseInt(interval);
        if (parseInt(pageSize) > 100) {
            const confirm = window.confirm("over 100 entities. it will take a long time.");
            if (!confirm) return;
        }
        $("#dataEntity").tabulator("clearData");
        for (let i = tokenId; i < tokenId + pageSize; i++ ) {
            setTimeout(renderEntity,(i - tokenId) * 500, i);
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