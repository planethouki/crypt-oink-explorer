let contracts;
let data;
let pageSize;

async function getData() {
    return new Promise((resolve, reject) => {
        $.getJSON("https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownerRanking.json", (json) => resolve(json));
    });
}

function renderRanking(index) {
    $("#dataRanking").tabulator("addData",
        [
            {
                "id": index,
                "order": index + 1,
                "owner": data[index].owner,
                "count": data[index].count,
            }
        ]
    );
}

async function init() {
    const tableContainer = $("#dataRanking");
    tableContainer.tabulator({
        layout:"fitColumns",
        columns: [
            {title:"order", field:"order", sorter:"number", width:100},
            {title:"owner", field:"owner", sorter:"string"},
            {title:"count", field:"count", sorter:"number", width:100},
        ],
    });
    $('#pagination').pagination({
        dataSource: function(done) {
            let a = new Array(data.length);
            for (let i = 0; i < data.length; i++) {
                a[i] = i;
            }
            done(a);
        },
        pageSize: pageSize,
        showGoInput: true,
        showGoButton: true,
        callback: function(indexes, pagination) {
            $("#dataRanking").tabulator("clearData");
            indexes.map((index) => {
                renderRanking(index);
            });
        }
    });
}

$(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();
    data = await getData();
    await init();
});