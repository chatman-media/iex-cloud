import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Peer Groups](https://iexcloud.io/docs/api/#peer-groups)
 * Returns an array of peer symbols.
 * Only included with paid subscription plans
 */
export const peerGroups = (symbol: string): Promise<readonly string[]> => {
  return ApiRequest(`stock/${symbol}/peers`);
};
