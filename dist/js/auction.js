
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
    $('#pagination').pagination({
        dataSource: function(done) {
            let a = new Array(totalSupply);
            for (let i = 0; i < totalSupply; i++) {
                a[i] = totalSupply - i;
            }
            done(a);
        },
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