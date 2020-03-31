import { isString } from 'util';

import { ApiRequest } from '../../core/ApiRequest';
import { Range } from '../../shared/Range';
import { paramsToQuery } from '../../utils';

/**
 * [Historical Prices](https://iexcloud.io/docs/api/#historical-prices)
 * Returns adjusted and unadjusted historical data for up to 15 years. Useful for building charts.
 */
export const historicalPrices = (
  symbol: string,
  range?: Range,
  date?: string,
  params?: Partial<HistoricalPriceParams>,
): Promise<ReadonlyArray<Partial<HistoricalPrice>>> => {
  const path = `stock/${symbol}/chart/${[range, date].filter(x => isString(x)).join('/')}`;
  return ApiRequest(path + paramsToQuery(params, true));
};

export interface HistoricalPrice {
  readonly symbol?: string;
  /** Formatted as YYYY-MM-DD */
  readonly date: Date;
  /** Adjusted data for historical dates. Split adjusted only. */
  readonly high: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  readonly low: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  readonly volume: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  readonly open: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  readonly close: number;
  /** Unadjusted data for historical dates. */
  readonly uHigh: number;
  /** Unadjusted data for historical dates. */
  readonly uLow: number;
  /** Unadjusted data for historical dates. */
  readonly uVolume: number;
  /** Unadjusted data for historical dates. */
  readonly uOpen: number;
  /** Unadjusted data for historical dates. */
  readonly uClose: number;
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
  readonly changeOverTime: number;
  /** A human readable format of the date depending on the range. */
  readonly label: string;
  /** Change from previous trading day. */
  readonly change: number;
  /** Change percent from previous trading day. */
  readonly changePercent: number;
}

export interface HistoricalPriceParams {
  /** Will return adjusted data only with keys `date`, `close`, and `volume`. */
  readonly chartCloseOnly: boolean;
  /** Used only when range is `date` to return OHLCV data instead of minute bar data. */
  readonly chartByDay: boolean;
  /** If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
  readonly chartSimplify: boolean;
  /** If passed, chart data will return every Nth element as defined by `chartInterval`. */
  readonly chartInterval: number;
  /** If true, `changeOverTime` and `marketChangeOverTime` will be relative to previous day close instead of the first value. */
  readonly changeFromClose: boolean;
  /** If passed, chart data will return the last N elements from the time period defined by the range parameter. */
  readonly chartLast: number;
  /** Same format as the path parameter. This can be used for batch calls. */
  readonly range: string;
  /** Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
  readonly exactDate: string;
  /** Can be `asc` or `desc` to sort results by date. Defaults to `desc`. */
  readonly sort: string;
  /** If true, current trading day data is appended. */
  readonly includeToday: boolean;
  // tslint:disable-next-line: no-mixed-interface
  readonly [key: string]: any;
}
