/** [Key Stats](https://iexcloud.io/docs/api/#key-stats) */
export interface Stat {
    /** Company name of the security */
    companyName: string;
    /** Market cap of the security calculated as shares outstanding * previous day close. */
    marketcap: number;
    week52high: number;
    week52low: number;
    /** Percentage change */
    week52change: number;
    /** Number of shares outstanding as the difference between issued shares and treasury shares. Investopedia */
    sharesOutstanding: number;
    /** Average 30 day volume */
    avg30Volume: number;
    /** Average 10 day volume */
    avg10Volume: number;
    /** Returns the annual shares outstanding minus closely held shares. */
    float: number;
    /** Number of employees */
    employees: number;
    /** Trailing twelve month earnings per share. Investopedia */
    ttmEPS: number;
    /** Trailing twelve month dividend rate per share */
    ttmDividendRate: number;
    /** The ratio of trailing twelve month dividend compared to the previous day close price. The dividend yield is represented as a percentage calculated as (ttmDividendRate) / (previous day close price) Investopedia */
    dividendYield: number;
    /** Expected ex date of the next dividend */
    nextDividendDate: string;
    /** Ex date of the last dividend */
    exDividendDate: string;
    /** Expected next earnings report date */
    nextEarningsDate: string;
    /** Price to earnings ratio calculated as (previous day close price) / (ttmEPS) */
    peRatio: number;
    /** Beta is a measure used in fundamental analysis to determine the volatility of an asset or portfolio in relation to the overall market. Levered beta calculated with 1 year historical data and compared to SPY. */
    beta: number;
    day200MovingAvg: number;
    day50MovingAvg: number;
    maxChangePercent: number;
    year5ChangePercent: number;
    year2ChangePercent: number;
    year1ChangePercent: number;
    ytdChangePercent: number;
    month6ChangePercent: number;
    month3ChangePercent: number;
    month1ChangePercent: number;
    day30ChangePercent: number;
    day5ChangePercent: number;
}
