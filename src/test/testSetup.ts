// tslint:disable
import path from 'path';
import 'jasmine';

import { Polly, PollyConfig, MatchBy } from '@pollyjs/core';
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
            recordingsDir: path.resolve(__dirname, '../../__recordings__'),
        },
    },
    recordFailedRequests: true,
    matchRequestsBy: {
        body(body: string): string {
            return body ? stripSecrets(body) : body;
        },
        url: {
            query(params: MatchBy<string, string>): MatchBy<string, string> {                
                Object.entries(params).forEach(([key, value]) => {
                    params[key] = stripSecrets(value);
                });
                return params;
            }
        }
    }
    // logging: true,
};

const context = setupPolly(config);

// Polly doesn't save the "matchRequestsBy" logic, so manually re-apply it. See https://github.com/Netflix/pollyjs/issues/251#issuecomment-531578600
beforeEach(() => {
    const polly = context.polly as Polly;
    polly.server.any().on('beforePersist', (_req, entry) => {
        if (entry.request.postData) {
            entry.request.postData.text = stripSecrets(entry.request.postData.text);
        }
        entry.request.url = stripSecrets(entry.request.url);
        entry.request.queryString.forEach((qs: any) => {
            if (typeof qs.value === 'string') {
                qs.value = stripSecrets(qs.value);
            }
        });
    });
});

function stripSecrets(str: string): string {
    return str
        .replace(process.env.IEX_API_TOKEN, '...')
        .replace(process.env.IEX_API_SECRET_TOKEN, '...');
}
