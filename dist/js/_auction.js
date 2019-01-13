let contracts;
let pageSize;
let table;
let totalSupply;
let sammy;


(async () => {
    contracts = await getInstance();
    pageSize = await getPageSize();
    totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });

    table = new Tabulator("#dataEntity", {
        responsiveLayout: true,
        columns:[
            {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", responsive: 0, headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", responsive: 0},
            {title:"startingPrice", field:"startingPrice", sorter:"number", responsive: 1},
            {title:"endingPrice", field:"endingPrice", sorter:"number", responsive: 1},
            {title:"duration", field:"duration", sorter:"string", responsive: 2},
            {title:"startedAt", field:"startedAt", sorter:"string", responsive: 3},
            {title:"currentPrice", field:"currentPrice", sorter:"number", responsive: 0},
        ],
        rowClick: function(event, row) {
            const tokenId = row._row.data.tokenId;
            $("img#modalThumb").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
            $('#modalContent').modal('show');
            getEntityFromTokenId(tokenId).then(entity => {
                Object.keys(entity).map((key) => {
                    const container = $(`#modal-${key}`);
                    switch (key) {
                        case "tokenId":
                            container.html(`<strong>${key}</strong><div><a href="ton.html#/ton/${entity[key]}">${entity[key]}</a></div>`);
                            break;
                        case "seller":
                            container.html(`<strong>${key}</strong><div><a href="ownership.html#/ownership/${entity[key]}">${entity[key]}</a></div>`);
                            break;
                        default:
                            container.html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
                    }
                });
            });
        },
    });


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            context.totalSupply = totalSupply;
            context.pageSize = pageSize;
            table.clearData();
            callback();
        });

        this.get('#/auction/page/:page', function(context) {
            const page = Number(this.params['page']);
            const from = context.totalSupply - (context.pageSize * (page - 1));
            const to = context.totalSupply - (context.pageSize * (page));
            let promise = [];
            for (let i = from; to < i; i--) {
                promise.push(getEntityFromTokenId(i));
            }
            Promise.all(promise).then(tableData => {
                return table.addData(tableData.filter(token => {
                    return token.seller !== "0x"
                }));
            }).then(rows => {
                const infoBar = $("#infoBar");
                if (rows.length === 0) {
                    infoBar.text(`no content at page ${page}`);
                } else {
                    infoBar.empty();
                }
            });
        });
    });


    $(() => {
        sammy.run('#/auction/page/1');

        const topPagination = $('#topPagination');
        const bottomPagination = $('#bottomPagination');

        [topPagination, bottomPagination].map(container => {
            container.pagination({
                dataSource: async function(done) {
                    const totalPage = Math.floor((totalSupply - 1) / pageSize + 1);
                    const page = [];
                    for (let i = 1; i <= totalPage; i++) {
                        page.push(i);
                    }
                    done(page);
                },
                pageSize: 1,
                pageNumber: (function() {
                    const hash = location.hash;
                    return Number(hash.split("/")[3]);
                })(),
                triggerPagingOnInit: false,
                afterPageOnClick: function(event, page) {
                    location.hash = `#/auction/page/${page}`
                },
                afterNextOnClick: function(event, page) {
                    location.hash = `#/auction/page/${page}`
                },
                afterPreviousOnClick: function(event, page) {
                    location.hash = `#/auction/page/${page}`
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

        $("#getEntity").click(async () => {
            const tokenId = $("input[name=tokenId]").val();
            if (tokenId === "") return;
            const totalSupply = await new Promise((resolve, reject) => {
                contracts.EntityCore.totalSupply({}, (error, result) => {
                    if (error) reject(error);
                    if (result) resolve(result.toNumber());
                });
            });
            if (totalSupply < tokenId) return;
            const page = Math.floor((totalSupply - tokenId) / pageSize + 1);
            if (page < 1) return;
            location.hash = `#/auction/page/${page}`
        });

    });

})();