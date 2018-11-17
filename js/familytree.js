let contracts;

async function getEntity(tokenId) {
    return new Promise((resolve, reject) => {
        contracts.EntityCore.getEntity(tokenId, {}, (error, result) => {
            if (error) reject(error);
            if (result) {
                const data = {
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
                    "tokenId_str": tokenId.toString(),
                    "breederId_str": result[6].toString(),
                    "seederId_str": result[7].toString(),
                };
                resolve(data);
            }
        });
    });
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
        const r = await getEntity(tokenId);
        // console.log(`${r.id} ${r.generation} ${r.breederId} ${r.seederId}`);
        if (r.generation !== 0) {
            rowData.push([
                {v:breederRandomId + "-" + r.breederId_str, f:fTag(r.breederId_str)},
                randomId + "-" + r.tokenId_str,
                ''
            ]);
            rowData.push([
                {v:seederRandomId + "-" + r.seederId_str, f:fTag(r.seederId_str)},
                randomId + "-" + r.tokenId_str,
                ''
            ]);
            if (level < 3) {
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
        function selectHandler() {
            const selection = chart.getSelection();
            if (selection.length === 0 || selection[0]['row'] === 0) return;
            const v = rowData[selection[0]['row']][0]['v'];
            const splitV = v.split("-");
            location.href = `${location.origin}/familytree.html?id=${splitV[1]}`;
        }
        google.visualization.events.addListener(chart, 'select', selectHandler);
        function onmouseoverHandler(row) {

        }
        google.visualization.events.addListener(chart, 'onmouseover', onmouseoverHandler);
        function onmouseoutHandler(row) {

        }
        google.visualization.events.addListener(chart, 'onmouseout', onmouseoutHandler);
        const options = {
            allowHtml: true,
        };
        chart.draw(data, options);
    }
}

async function init() {
    const progressBox = $("#chart_progress");
    progressBox.text(`prepare initial drawing...`);
    const searchParams = new URLSearchParams(location.search);
    let initialTokenId;
    if (searchParams.has("id")) {
        initialTokenId = parseInt(searchParams.get("id"));
        console.log(`initialTokenId specification: ${initialTokenId}`);
    } else {
        initialTokenId = await new Promise((resolve, reject) => {
            contracts.EntityCore.totalSupply({}, (error, result) => {
                if (error) reject(error);
                if (result) resolve(result.toNumber());
            });
        });
    }
    progressBox.text(`drawing ${initialTokenId}...`);
    draw(initialTokenId);

    $("#getEntity").click(async () => {
        const tokenId = $("input[name=tokenId]").val();
        if (tokenId === "") return;
        await draw(tokenId);
    });
}


$(async () => {
    contracts = await getInstance();
    await init();
});