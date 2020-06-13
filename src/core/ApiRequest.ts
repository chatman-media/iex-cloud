import fetch from 'node-fetch';
import { paramsToQuery } from '../utils';

export type Version = 'beta' | 'v1' | 'stable' | 'latest' | string;

export interface RequestConfig {
  readonly useSecret: boolean;
  readonly method: string;
  readonly data: any;
  readonly params: any;
}

export interface IexUsageConfig {
  readonly apiToken?: string;
  readonly secretToken?: string;
  readonly version?: string;
  readonly apiEnv?: string;
}

/** TODO: refactor */
export const ApiRequest = async (
  endpoint: string,
  options?: Partial<RequestConfig>,
  iexConfig: IexUsageConfig = {},
): Promise<any> => {
  const { useSecret, method, data, params } = {
    data: {},
    method: 'GET',
    useSecret: false,
    ...options,
  };
  const apiToken = process.env.IEX_API_TOKEN || process.env.REACT_APP_IEX_API_TOKEN || iexConfig.apiToken;

  // tslint:disable-next-line: no-if-statement
  if (!apiToken) {
    throw new Error('IEX_API_TOKEN not found');
  }

  const secretToken = process.env.IEX_API_SECRET_TOKEN || process.env.REACT_APP_IEX_API_SECRET_TOKEN || iexConfig.secretToken;
  const version = process.env.IEX_API_VERSION || process.env.REACT_APP_IEX_API_VERSION || iexConfig.apiToken || 'v1';
  const apiEnv = process.env.IEX_API_ENV || process.env.REACT_APP_IEX_API_ENV || iexConfig.apiToken || 'cloud';

  const baseUrl = `https://${apiEnv}.iexapis.com/${version}/`;
  const url =
    `${baseUrl}${endpoint}` +
    (method === 'POST' && useSecret
      ? ''
      : `${endpoint.includes('?') ? '&' : '?'}token=${useSecret ? secretToken : apiToken}`);

  const urlWithParams = params
    ? `${url}${url.includes('?') ? '&' : '?'}${paramsToQuery(params)}`
    : url;

  try {
    // console.log(urlWithParams);
    const response =
      method === 'GET'
        ? await fetch(urlWithParams)
        : await fetch(urlWithParams, {
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
