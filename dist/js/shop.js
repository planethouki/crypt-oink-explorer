function renderEntity(tokenId) {
    contracts.AuctionSell.getAuction(tokenId, {}, (error, result) => {
        if (error) console.log(error);
        if (result[0].toString() !== "0x") {
            $("#dataEntity").tabulator("addData",
                [
                    {
                        "id": tokenId,
                        "tokenId": tokenId,
                        "thumb": `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`,
                        "seller": result[0].toString(),
                        "startingPrice": result[1].toString(),
                        "endingPrice": result[2].toString(),
                        "duration": result[3].toString(),
                        "startedAt": result[4].toString(),
                    }
                ]
            );
        }
    });
}