let data;
let pageSize;
let table;
let sammy;

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


$(async () => {
    pageSize = await getPageSize();

    data = await new Promise((resolve, reject) => {
        $.getJSON("https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownerRanking.json", (json) => {
            resolve(json);
        });
    });

    $.getJSON(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json`, (json) => {
        web3.eth.getBlock(json.block, (error, result) => {
            const date = new Date(result.timestamp * 1000);
            $("#lastMod").text("Last Modified: ".concat(date.toUTCString()));
        });
    });


    table = new Tabulator("#dataRanking", {
        layout:"fitColumns",
        columns: [
            {title:"order", field:"order", sorter:"number", width:100},
            {title:"owner", field:"owner", sorter:"string"},
            {title:"count", field:"count", sorter:"number", width:100},
            {
                title: "bar", field: "count", formatter: "progress", formatterParams: {
                    min: 0,
                    max: data[0].count,
                    color: ["gray"],
                }
            }
        ],
    });


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            context.pageSize = pageSize;
            table.clearData();
            callback();
        });

        this.get('#/ranking/page/:page', function(context) {
            const page = Number(this.params['page']);
            const from = (context.pageSize * (page - 1));
            const to = (context.pageSize * (page));
            table.addData(data.slice(from, to));
        });
    });

    $(() => {
        sammy.run('#/ranking/page/1');

        const topPagination = $('#topPagination');
        const bottomPagination = $('#bottomPagination');

        [topPagination, bottomPagination].map(container => {
            container.pagination({
                dataSource: data,
                pageSize: pageSize,
                pageNumber: (function() {
                    const hash = location.hash;
                    return Number(hash.split("/")[3]);
                })(),
                triggerPagingOnInit: false,
                afterPageOnClick: function(event, page) {
                    location.hash = `#/ranking/page/${page}`
                },
                afterNextOnClick: function(event, page) {
                    location.hash = `#/ranking/page/${page}`
                },
                afterPreviousOnClick: function(event, page) {
                    location.hash = `#/ranking/page/${page}`
                },
            });
        });

        sammy.before(function() {
            const hash = location.hash;
            const page = Number(hash.split("/")[3]);
            [topPagination, bottomPagination].map(container => {
                container.pagination('go', page);
            });
        });
    });
});