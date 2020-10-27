import { ApiRequest } from '../../core';
import { OptionsSymbol } from '../reference-data'

/**
 * [End of Day Options](https://iexcloud.io/docs/api/#end-of-day-options)
 * This call returns an array of available contract dates for the given symbol.
 */
export const endOfDayOptions = (symbol: string): Promise<readonly OptionsSymbol[]> => {
  return ApiRequest(`stock/${symbol}/options`);
};

