import { ApiRequest } from '../../core/ApiRequest';
import { paramsToQuery } from '../../utils';

/**
 * [Intraday Prices](https://iexcloud.io/docs/api/#intraday-prices)
 *
 * This endpoint will return aggregated intraday prices in one minute buckets
 * @param symbol Valid symbol
 * @param params
 */
export const intradayPrices = (
  symbol: string,
  params?: Partial<IntradayPriceParams>,
): Promise<readonly IntradayPrice[]> => {
  return ApiRequest(`stock/${symbol}/intraday-prices` + paramsToQuery(params, true));
};

export interface IntradayPrice {
  readonly date: Date;
  /** Formatted as HHmm */
  readonly minute: string;
  /** 15 minute delayed data. Average price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketAverage: number;
  /** 15 minute delayed data. Total notional value during the minute for trades across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketNotional: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketNumberOfTrades: number;
  /** 15 minute delayed data. First price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketOpen: number;
  /** 15 minute delayed data. Last price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketClose: number;
  /** 15 minute delayed data. Highest price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketHigh: number;
  /** 15 minute delayed data. Lowest price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketLow: number;
  /** 15 minute delayed data. Total volume of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  readonly marketVolume: number;
  /** Percent change of each interval relative to first value. 15 minute delayed consolidated data. */
  readonly marketChangeOverTime: number;
  /** Only when chartSimplify is true. The first element is the original number of points. Second element is how many remain after simplification. */
  readonly simplifyFactor: readonly [number, number];
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
  readonly changeOverTime: number;
  /** A human readable format of the date depending on the range. */
  readonly label: number;
  /** IEX only data. Average price during the minute for trades on IEX. */
  readonly average: number;
  /** IEX only data. Total notional value during the minute for trades on IEX. */
  readonly notional: number;
  /** IEX only data. Number of trades during the minute on IEX. */
  readonly numberOfTrades: number;
  /** IEX only data. Highest price during the minute on IEX. */
  readonly high: number;
  /** IEX only data. Lowest price during the minute on IEX. */
  readonly low: number;
  /** IEX only data. Total volume during the minute on IEX. */
  readonly volume: number;
  /** IEX only data. First price during the minute on IEX. */
  readonly open: number;
  /** IEX only data. Last price during the minute on IEX. */
  readonly close: number;
}

export interface IntradayPriceParams {
  /** Limits the return of intraday prices to IEX only data. */
  readonly chartIEXOnly: boolean;
  /** If true, chart will reset at midnight instead of the default behavior of 9:30am ET. */
  readonly chartReset: boolean;
  /** If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
  readonly chartSimplify: boolean;
  /** If passed, chart data will return every Nth element as defined by chartInterval */
  readonly chartInterval: number;
  /** If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value. */
  readonly changeFromClose: boolean;
  /** If passed, chart data will return the last N elements */
  readonly chartLast: number;
  /** Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
  readonly exactDate: string;
  /** By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available. */
  readonly chartIEXWhenNull: boolean;
}
