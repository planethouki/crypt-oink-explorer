import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getAuctionSeed, getCurrentPriceSeed } from '../src/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const tokenId = req.params.id

    const auction = await getAuctionSeed(tokenId)
    const price = await getCurrentPriceSeed(tokenId)


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { ...auction, ...price }
    };

};

export default httpTrigger;