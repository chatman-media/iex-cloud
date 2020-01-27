import { ApiRequest } from '../../core';

/**
 * [OTC Symbols](https://iexcloud.io/docs/api/#otc-symbols)
 * This call returns an array of OTC symbols that IEX Cloud supports for API calls.
 */
export const otcSymbols = (): Promise<readonly OTCSymbol[]> => {
  return ApiRequest(`ref-data/otc/symbols`);
};

export interface OTCSymbol {
  /** refers to the symbol */
  readonly symbol: string;
  /** refers to the name of the company or security. */
  readonly name: string;
  /** refers to the date the symbol reference data was generated. */
  readonly date: string;
  /**
   * refers to the common issue type
   *   ad - ADR
   *   re - REIT
   *   ce - Closed end fund
   *   si - Secondary Issue
   *   lp - Limited Partnerships
   *   cs - Common Stock
   *   et - ETF
   *   wt - Warrant
   */
  readonly type: string;
  /** refers to the region of the world the symbol is in */
  readonly region: string;
  /** refers to the currency the symbol is traded in */
  readonly currency: string;
  /** unique ID applied by IEX to track securities through symbol changes. */
  readonly iexId: string;
}
