import { ApiRequest } from '../../core/ApiRequest';

/**
 * This is a helper function, but the Google APIs url is standardized.
 */
export const logo = (symbol: string): Promise<Logo> => {
  return ApiRequest(`stock/${symbol}/logo`);
};

export interface Logo {
  readonly url: string;
}
