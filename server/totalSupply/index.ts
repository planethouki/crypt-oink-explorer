import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { totalSupply } from '../src/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const t = await totalSupply()

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: t
    };

};

export default httpTrigger;
