import { ApiRequest } from '../../core';

/**
 * [Dividends (Basic)](https://iexcloud.io/docs/api/#dividends-basic)
 *
 * Provides basic dividend data for US equities, ETFs, and Mutual Funds for the last 5 years. For 13+ years of history and comprehensive data, use the Advanced Dividends endpoint.
 *
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param range 1m default
 */
export const dividendsBasic = (
  symbol: string,
  range?: DividendsRange,
): Promise<readonly DividendsBasic[]> => {
  return ApiRequest(`stock/${symbol}/dividends/${range}`);
};

export type DividendsRange = '5y' | '2y' | '1y' | 'ytd' | '6m' | '3m' | '1m' | 'next';

export interface DividendsBasic {
  /** refers to the dividend ex-date */
  readonly exDate: string;
  /** refers to the payment date */
  readonly paymentDate: string;
  /** refers to the dividend record date */
  readonly recordDate: string;
  /** refers to the dividend declaration date */
  readonly declaredDate: string;
  /** refers to the payment amount */
  readonly amount: number;
  /** Type of dividend event */
  readonly flag: string;
  /** Currency of the dividend */
  readonly currency: string;
  /** Description of the dividend event */
  readonly description: string;
  /** Frequency of the dividend */
  readonly frequency: string;
}
