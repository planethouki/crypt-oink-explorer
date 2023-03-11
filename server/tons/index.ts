import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ownerOf, getEntity } from '../src/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const tokenId = req.params.id

    const owner = await ownerOf(tokenId)
    const entity = await getEntity(tokenId)


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { ...owner, ...entity }
    };

};

export default httpTrigger;