import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Daily Treasury Rates](https://iexcloud.io/docs/api/#daily-treasury-rates)
 *
 * Provides the daily constant maturity time series rate for 30 year, 20 year,
 * 10 year, 5 year, 2 year, 1 year, 6 month, 3 month, and 1 month treasuries.
 * 
 * @param symbol Treasury Symbol.
 */
export const dailyTreasuryRates = (symbol: TreasurySymbolType): Promise<readonly DailyTreasuryRate[]> => {
  return ApiRequest(`time-series/treasury/${symbol}`);
};

export interface DailyTreasuryRate {
  /** Rate value of the treasury */
  readonly value: number;
  /** Id of the treasury */
  readonly id: string;
  /** Key of the treasury */
  readonly key: string;
  /** Sub key of the treasury */
  readonly subkey: string;
  /** Last updated time of the data point represented as millisecond epoch. */
  readonly updated: number;
}
  
export type TreasurySymbolType =
  | 'DGS30'   //	30 Year constant maturity rate
  | 'DGS20'   //	20 Year constant maturity rate
  | 'DGS10'   //	10 Year constant maturity rate
  | 'DGS5'    //	5 Year constant maturity rate
  | 'DGS2'    //	2 Year constant maturity rate
  | 'DGS1'    //	1 Year constant maturity rate
  | 'DGS6MO'  //	6 Month constant maturity rate
  | 'DGS3MO'  //	3 Month constant maturity rate
  | 'DGS1MO'; //	1 Month constant maturity rate
