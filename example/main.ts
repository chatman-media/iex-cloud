import { IEXCloudClient } from "../lib";

const client = new IEXCloudClient();
const main = async () => {
    const res = await client.messageBudget(10000);
    console.log(res);
}

main();
