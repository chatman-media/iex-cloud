import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Key Stats](https://iexcloud.io/docs/api/#key-stats)
 *
 * @param symbol
 * @param stat Case sensitive string matching the name of a single key to return one value. Ex: If you only want the next earnings date, you would call `/stock/aapl/stats/nextEarningsDate`
 */
export const keyStats = (
    symbol: string,
    stat?: string,
): Promise<KeyStat | string | number | null> => {
    return ApiRequest(`stock/${symbol}/stats/${stat || ''}`);
};

export interface KeyStat {
    /** Company name of the security */
    readonly companyName: string;
    /** Market cap of the security calculated as shares outstanding * previous day close. */
    readonly marketcap: number;
    readonly week52high: number;
    readonly week52low: number;
    /** Percentage change */
    readonly week52change: number;
    /** Number of shares outstanding as the difference between issued shares and treasury shares. Investopedia */
    readonly sharesOutstanding: number;
    /** Average 30 day volume */
    readonly avg30Volume: number;
    /** Average 10 day volume */
    readonly avg10Volume: number;
    /** Returns the annual shares outstanding minus closely held shares. */
    readonly float: number;
    /** Number of employees */
    readonly employees: number;
    /** Trailing twelve month earnings per share. Investopedia */
    readonly ttmEPS: number;
    /** Trailing twelve month dividend rate per share */
    readonly ttmDividendRate: number;
    /** The ratio of trailing twelve month dividend compared to the previous day close price. The dividend yield is represented as a percentage calculated as (ttmDividendRate) / (previous day close price) Investopedia */
    readonly dividendYield: number;
    /** Expected ex date of the next dividend */
    readonly nextDividendDate: string;
    /** Ex date of the last dividend */
    readonly exDividendDate: string;
    /** Expected next earnings report date */
    readonly nextEarningsDate: string;
    /** Price to earnings ratio calculated as (previous day close price) / (ttmEPS) */
    readonly peRatio: number;
    /** Beta is a measure used in fundamental analysis to determine the volatility of an asset or portfolio in relation to the overall market. Levered beta calculated with 1 year historical data and compared to SPY. */
    readonly beta: number;
    readonly day200MovingAvg: number;
    readonly day50MovingAvg: number;
    readonly maxChangePercent: number;
    readonly year5ChangePercent: number;
    readonly year2ChangePercent: number;
    readonly year1ChangePercent: number;
    readonly ytdChangePercent: number;
    readonly month6ChangePercent: number;
    readonly month3ChangePercent: number;
    readonly month1ChangePercent: number;
    readonly day30ChangePercent: number;
    readonly day5ChangePercent: number;
}
