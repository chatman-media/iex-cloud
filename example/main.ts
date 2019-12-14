import { IEXCloudClient } from "../lib";

const client = new IEXCloudClient();
const main = async () => {
    const res = await client.metadata();
    console.log(res);
}

main();
