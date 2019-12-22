// tslint:disable
import path from 'path';
// import 'jasmine';

import { Polly, PollyConfig } from '@pollyjs/core';
import { setupPolly } from 'setup-polly-jest';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const config: PollyConfig = {
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
        fs: {
            recordingsDir: path.resolve(__dirname, '../__recordings__'),
        },
    },
    recordFailedRequests: true,
    // matchRequestsBy: {
        // body(body: string): string {
        //     return body ? stripSecrets(body) : body;
        // },
        // headers(headers: Record<string, string>): Record<string, string> {
        //     // If our real/for-recording secrets are different lengths than our fake/for-checkin secrets, content length will be off
        //     delete headers['content-length'];
        //     // The user agent has node version + OS version in it.
        //     delete headers['user-agent'];

        //     Object.entries(headers).forEach(([key, value]) => {
        //         console.log(value);
        //         // headers[key] = stripSecrets(value);
        //     });
        //     return headers;
        // },
        // url: {
        //     query(params: MatchBy<string, string>): MatchBy<string, string> {
        //         Object.entries(params).forEach(([key, value]) => {
        //             params[key] = stripSecrets(value);
        //         });
        //         return params;
        //     },
            // pathname: (input: MatchBy<string, string>): MatchBy<string, string> {
            //     Object.entries(input).forEach(([key, value]) => {
            //         input[key] = stripSecrets(value);
            //     });
            //     return input;
            // },
        // }
    // },
    // logging: true,
};

// const context = 
setupPolly(config);

// Polly doesn't save the "matchRequestsBy" logic, so manually re-apply it. See https://github.com/Netflix/pollyjs/issues/251#issuecomment-531578600
// beforeEach(() => {
//     const polly = context.polly as Polly;
//     polly.server.any().on('beforePersist', (_req, entry) => {
//         entry.request.postData.text = stripSecrets(entry.request.postData.text);
//         entry.request.headers.forEach((h: any) => {
//             if (typeof h.value === 'string') {
//                 h.value = stripSecrets(h.value);
//             }
//         });
//     });
// });

// function stripSecrets(body: string): string {
//     return body
//         ?.replace(process.env.IEX_API_TOKEN, '...')
//         ?.replace(process.env.IEX_API_SECRET_TOKEN, '...');
// }
