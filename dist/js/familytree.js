let contracts;
let totalSupply;
let sammy;



(async () => {

    contracts = await getInstance();
    totalSupply = await new Promise((resolve, reject) => {
        contracts.EntityCore.totalSupply({}, (error, result) => {
            if (error) reject(error);
            if (result) resolve(result.toNumber());
        });
    });

    async function getEntityFromTokenId(tokenId) {
        const getEntity = new Promise((resolve, reject) => {
            contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
                if (error) reject(error);
                if (result) {
                    resolve({
                        "id": tokenId,
                        "tokenId": tokenId,
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
                    });
                }
                resolve();
            });
        });
        const ownerOf = new Promise((resolve, reject) => {
            contracts.EntityCore.ownerOf(tokenId, {}, (error, result) => {
                if (error) console.log(error);
                if (result) {
                    resolve({
                        "owner": result
                    });
                }
                resolve();
            });
        });
        const entityAndOwner = await Promise.all([getEntity, ownerOf]);
        let entity = entityAndOwner[0];
        entity["owner"] = entityAndOwner[1]["owner"];
        return entity;
    }

    async function draw(rootTokenId) {
        const progressBox = $("#chart_progress");
        progressBox.text(`drawing ${rootTokenId}...`);
        let rowData = [];
        let acceptableMaxLevel = 0;
        const fTag = function(tokenId) {
            return `<div>${tokenId}</div><div class="image_box"><img src="/img/trans.png"/><div class="over_image" style="background-image:url(https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png);"></div></div>`;
        };
        const recu = async function(tokenId, level, randomId) {
            progressBox.text(`getting ${tokenId}...`);
            const breederRandomId = Math.floor(Math.random() * Math.floor(10000)).toString();
            const seederRandomId = Math.floor(Math.random() * Math.floor(10000)).toString();
            const r = await getEntityFromTokenId(tokenId);
            // console.log(`${r.id} ${r.generation} ${r.breederId} ${r.seederId}`);
            if (r.generation !== 0) {
                rowData.push([
                    {v:breederRandomId + "-" + r.breederId, f:fTag(r.breederId)},
                    randomId + "-" + r.tokenId,
                    ''
                ]);
                rowData.push([
                    {v:seederRandomId + "-" + r.seederId, f:fTag(r.seederId)},
                    randomId + "-" + r.tokenId,
                    ''
                ]);
                if (level < 4) {
                    await recu(r.breederId,level + 1, breederRandomId);
                    await recu(r.seederId,level + 1, seederRandomId);
                }
                if (acceptableMaxLevel < level + 1) acceptableMaxLevel = level + 1;
            } else {
                if (acceptableMaxLevel < level) acceptableMaxLevel = level;
            }
        };
        rowData.push([{v:"0" + "-" + rootTokenId,f:fTag(rootTokenId)}, '', '']);
        await recu(rootTokenId, 1, "0");
        // console.log(rowData);
        // console.log(acceptableMaxLevel);
        $("#chart_div").css("max-width",`${(acceptableMaxLevel)*25}%`);
        google.charts.load('current', {packages:["orgchart"]});
        google.charts.setOnLoadCallback(drawChart);
        progressBox.empty();

        function drawChart() {
            const data = new google.visualization.DataTable();
            data.addColumn('string', 'Name');
            data.addColumn('string', 'Manager');
            data.addColumn('string', 'ToolTip');
            data.addRows(rowData);
            const chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
            const options = {
                allowHtml: true,
            };
            chart.draw(data, options);
        }
    }


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            callback();
        });

        this.get('#/:tokenid', function(context) {
            let token = {};
            token["id"] = Number(this.params['tokenid']);
            token["thumb"] = `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${token.id}_512x586.png`;

            const progressBox = $("#chart_progress");
            progressBox.text(`prepare initial drawing...`);
            draw(token.id);

            $("#getEntity").click(async () => {
                const tokenId = $("input[name=tokenId]").val();
                if (tokenId === "") return;
                await draw(tokenId);
            });
        });
    });


    $(() => {
        sammy.run(`#/${totalSupply}`);
    });

})();
