async function getEntityFromTokenId(tokenId) {
    const getAuction = new Promise((resolve, reject) => {
        contracts.AuctionSell.getAuction(tokenId, {}, (error, result) => {
            if (error) reject(error);
            if (result) {
                resolve({
                    "id": tokenId,
                    "tokenId": tokenId,
                    "seller": result[0].toString(),
                    "startingPrice": result[1].toString(),
                    "endingPrice": result[2].toString(),
                    "duration": result[3].toString(),
                    "startedAt": result[4].toString(),
                    "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`,
                });
            }
            resolve();
        });
    });
    const getCurrentPrice = new Promise((resolve, reject) => {
        contracts.AuctionSell.getCurrentPrice(tokenId, {}, (error, result) => {
            if (error) reject(error);
            if (result) {
                resolve({
                    "currentPrice": result.toString(),
                });
            }
            resolve();
        });
    });
    const auctionAndPrice = await Promise.all([getAuction, getCurrentPrice]);
    let entity = auctionAndPrice[0];
    entity["currentPrice"] = auctionAndPrice[1]["currentPrice"];
    return entity;
}