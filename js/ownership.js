let contracts;
let pageSize;



async function addressHandler(address) {
    $('#pagination').pagination({
        dataSource: function(done) {
            $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownertotokens/${address}.json`, (json) => done(json));
        },
        pageSize: pageSize,
        showGoInput: true,
        showGoButton: true,
        callback: function(tokenIds, pagination) {
            const tableData = tokenIds.map((tokenId) => {
                return `<div class="col m1-5"><div>${tokenId}</div><div><img src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png" /></div></div>`;
            });
            $("#dataOwnership").empty().html(tableData.join("\n"));
        }
    });
}

async function init() {
    $("#getOwner").click(() => {
        const owner = $("input[name=owner]").val();
        if (owner === "") return;
        addressHandler(owner.toLowerCase());
    });
}

$(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();
    await init();
});