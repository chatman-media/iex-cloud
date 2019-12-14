import fetch from 'node-fetch';

export type Version = 'beta' | 'v1' | 'stable' | 'latest' | string;

export interface RequestConfig {
    readonly useSecret: boolean;
    readonly method: string;
    readonly data: any;
}

/** TODO: refactor */
export const ApiRequest = async (
    endpoint: string,
    options?: Partial<RequestConfig>,
): Promise<any> => {
    const { useSecret, method, data } = {
        data: {},
        method: 'GET',
        useSecret: false,
        ...options,
    };
    const apiToken = process.env.IEX_API_TOKEN;
    // throw new Error('IEX_API_TOKEN not found'))

    const secretToken = process.env.IEX_API_SECRET_TOKEN;
    const version = process.env.IEX_API_VERSION || 'v1';
    const apiEnv = process.env.IEX_API_ENV || 'cloud';

    const baseUrl = `https://${apiEnv}.iexapis.com/${version}/`;
    const url =
        `${baseUrl}${endpoint}` +
        (method === 'POST' && useSecret
            ? ''
            : `${endpoint.includes('?') ? '&' : '?'}token=${useSecret ? secretToken : apiToken}`);
    try {
        // console.log(url);
        const response =
            method === 'GET'
                ? await fetch(url)
                : await fetch(url, {
                      body: useSecret ? { ...data, token: secretToken } : data,
                      method,
                  });
        const json = await response.json();
        return json;
    } catch (error) {
        // console.log(error?.message);
        // console.log(response?.statusText);
        return null;
    }
};
