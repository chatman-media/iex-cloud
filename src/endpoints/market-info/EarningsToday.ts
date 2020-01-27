import { ApiRequest } from '../../core/ApiRequest';
import { Quote } from '../stock-prices';

/**
 * [Earnings Today](https://iexcloud.io/docs/api/#earnings-today)
 *
 * Returns earnings that will be reported today as three arrays: before the open `bto`, after market close `amc` and during the trading day `other`. Each array contains an object with all keys from `earnings`, a `quote` object, and a `headline` key.
 */
export const earningsToday = (): Promise<EarningsTodayData> => {
  return ApiRequest(`stock/market/today-earnings`);
};

export interface EarningsTodayData {
  readonly bto: readonly EarningsToday[];
  readonly amc: readonly EarningsToday[];
  readonly other: readonly EarningsToday[];
}

export interface EarningsToday {
  /** Actual earnings per share for the period */
  readonly actualEPS: number;
  /** Consensus EPS estimate trend for the period */
  readonly consensusEPS: number;
  /** Time of earnings announcement. BTO (Before open), DMT (During trading or if the time is unknown), AMC (After close) */
  readonly announceTime: string;
  /** Number of estimates for the period */
  readonly numberOfEstimates: number;
  /** Dollar amount of EPS surprise for the period */
  readonly EPSSurpriseDollar: number;
  /** Expected earnings report date YYYY-MM-DD */
  readonly EPSReportDate: string;
  /** The fiscal quarter the earnings data applies to Q# YYYY */
  readonly fiscalPeriod: string;
  /** Date representing the company fiscal quarter end YYYY-MM-DD */
  readonly fiscalEndDate: string;
  /** Represents the EPS of the quarter a year ago */
  readonly yearAgo: number;
  /** Represents the percent difference between the quarter a year ago actualEPS and current period actualEPS */
  readonly yearAgoChangePercent: number;
  /** Represents the percent difference between the quarter a year ago actualEPS and current period consensusEPS */
  readonly estimatedChangePercent: number;
  /** The symbol the earning relates to */
  readonly symbol: string;
  readonly quote: Quote;
}
