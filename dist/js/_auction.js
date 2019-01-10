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
        columns:[
            {title:"thumb", field:"thumb", formatter: "image", "cssClass":"col-thumb", headerSort:false},
            {title:"id", field:"tokenId", sorter:"number", "cssClass":"col-id"},
            {title:"startingPrice", field:"startingPrice", sorter:"number", "cssClass":"col-seeder"},
            {title:"endingPrice", field:"endingPrice", sorter:"number", "cssClass":"col-gen"},
            {title:"duration", field:"duration", sorter:"string", "cssClass":"col-gen"},
            {title:"startedAt", field:"startedAt", sorter:"string", "cssClass":"col-gen"},
            {title:"currentPrice", field:"currentPrice", sorter:"number", "cssClass":"col-gen"},
        ],
        rowClick: function(event, row) {
            const tokenId = row._row.data.tokenId;
            $("#detailThumb img").attr("src", `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`);
            $('#detailContent').modal('show');
            getEntityFromTokenId(tokenId).then(entity => {
                Object.keys(entity).map((key) => {
                    $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
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

        this.get('#/page/:page', function(context) {
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
                if (rows.length === 0) {
                    console.log(`no content at page ${page}`);
                }
            });
        });
    });


    $(() => {
        sammy.run('#/page/1');

        const topPagination = $('#topPagination');
        const bottomPagination = $('#bottomPagination');

        [topPagination, bottomPagination].map(container => {
            container.pagination({
                dataSource: async function(done) {
                    const totalSupply = await new Promise((resolve, reject) => {
                        contracts.EntityCore.totalSupply({}, (error, result) => {
                            if (error) reject(error);
                            if (result) resolve(result.toNumber());
                        });
                    });
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
                    return Number(hash.split("/")[2]);
                })(),
                triggerPagingOnInit: false,
                afterPageOnClick: function() {
                    const page = container.pagination('getSelectedPageNum');
                    location.hash = `#/page/${page}`
                },
            });
        });

        sammy.before(function() {
            const hash = location.hash;
            const page = Number(hash.split("/")[2]);
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
            location.hash = `#/page/${page}`
        });

    });

})();