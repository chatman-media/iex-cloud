import { ApiRequest } from '../../core';

/**
 * [SplitsBasic](https://iexcloud.io/docs/api/#splits-basic)
 *
 * Splits prior to last reported are only included with paid subscription plans
 *
 * @param symbol
 * @param range
 */
export const splitsBasic = (
  symbol: string,
  range?: SplitsBasicRange,
): Promise<readonly SplitsBasic[]> => {
  return ApiRequest(`stock/${symbol}/splits/${range || ''}`);
};

export type SplitsBasicRange = '5y' | '2y' | '1y' | 'ytd' | '6m' | '3m' | '1m' | 'next';

export interface SplitsBasic {
  /** refers to the split ex-date */
  readonly exDate: string;
  /** refers to the split declaration date */
  readonly declaredDate: string;
  /**
   * refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before.
   *  For example: Split ratio of .5 = 2 for 1 split.
   */
  readonly ratio: number;
  /** To factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
  readonly toFactor: string;
  /** From factor of the split. Used to calculate the split ratio fromfactor/tofactor = ratio (eg ½ = 0.5) */
  readonly fromFactor: string;
  /** Description of the split event. */
  readonly description: string;
}
