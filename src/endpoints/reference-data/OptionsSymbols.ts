import { ApiRequest } from '../../core';

/**
 * [Options Symbols](https://iexcloud.io/docs/api/#options-symbols)
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 */
export const optionsSymbols = (): Promise<readonly OptionsSymbol[]> => {
  return ApiRequest(`ref-data/options/symbols`);
};

export interface OptionsSymbol {
  // Array of available contract date strings formatted as YYYYMM
  readonly [symbol: string]: readonly string[];
}
