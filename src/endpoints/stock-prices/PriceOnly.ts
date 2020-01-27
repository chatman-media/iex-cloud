import { ApiRequest } from '../../core/ApiRequest';

/**
 * Returns a number. Refer to the latestPrice attribute in the quote endpoint for a description.
 */
export const priceOnly = (symbol: string): Promise<number> => {
  return ApiRequest(`stock/${symbol}/price`);
};
