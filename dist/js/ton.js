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


    sammy = $.sammy("#main", function() {
        this.around(async function(callback) {
            const context = this;
            callback();
        });

        this.get('#/:tokenid', function(context) {
            let token = {};
            token["id"] = Number(this.params['tokenid']);
            token["thumb"] = `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${token.id}_512x586.png`;

            $("#detailThumb img").attr("src", token.thumb);
            getEntityFromTokenId(token.id).then(entity => {
                Object.keys(entity).map((key) => {
                    $(`#detailEntity #${key}`).html("<strong>" + key + "</strong><div>" + entity[key] + "</div>");
                });
            });
        });
    });


    $(() => {
        sammy.run(`#/${totalSupply}`);
    });

})();
