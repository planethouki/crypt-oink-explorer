let data;
let pageSize;

async function getData() {
    return new Promise((resolve, reject) => {
        $.getJSON("https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownerRanking.json", (rankingArray) => {
            const orderd = rankingArray.map((ranking, index) => {
                if (index === 0) {
                    ranking["order"] = 1;
                } else {
                    if (ranking["count"] === rankingArray[index - 1]["count"]) {
                        ranking["order"] = rankingArray[index - 1]["order"];
                    } else {
                        ranking["order"] = rankingArray[index - 1]["order"] + 1;
                    }
                }
                return ranking;
            });
            resolve(orderd);
        });
    });
}

function renderRanking(index) {
    $("#dataRanking").tabulator("addData",
        [
            {
                "id": index,
                "order": data[index].order,
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
        dataSource: data,
        pageSize: pageSize,
        showGoInput: true,
        showGoButton: true,
        callback: function(viewDataArray, pagination) {
            const tableData = viewDataArray.map((obj, index) => {
                return {
                    "id": index,
                    "order": obj.order,
                    "owner": obj.owner,
                    "count": obj.count,
                }
            });
            $("#dataRanking").tabulator("clearData").tabulator("addData", tableData);
        }
    });
}

$(async () => {
    pageSize = await getPageSize();
    data = await getData();
    await init();
});