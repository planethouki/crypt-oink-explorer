let pageSize;

async function addressHandler(address) {
    $("#ownerAddress").text(address);
    $('#pagination').pagination({
        dataSource: function(done) {
            $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownertotokens/${address}.json`, (json) => {
                json.reverse();
                done(json);
            });
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

function getLastMod() {
    $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json`, (json) => {
        console.log(json.block);
        web3.eth.getBlock(json.block, (error, result) => {
            const date = new Date(result.timestamp * 1000);
            $("#lastMod").text("Last Modified: ".concat(date.toUTCString()));
        });
    });
}

async function init() {
    $("#getOwner").click(() => {
        const owner = $("input[name=owner]").val();
        if (owner === "") return;
        addressHandler(owner.toLowerCase());
    });
    addressHandler("0xa2156F24711A631e92e65dC114CF172065dDd49b".toLowerCase());
}

$(async () => {
    pageSize = await getPageSize();
    getLastMod();
    await init();
});