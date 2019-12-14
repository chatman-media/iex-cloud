export interface IntradayPrice {
    date: Date;
    /** Formatted as HHmm */
    minute: string;
    /** 15 minute delayed data. Average price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketAverage: number;
    /** 15 minute delayed data. Total notional value during the minute for trades across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketNotional: number;
    /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketNumberOfTrades: number;
    /** 15 minute delayed data. First price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketOpen: number;
    /** 15 minute delayed data. Last price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketClose: number;
    /** 15 minute delayed data. Highest price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketHigh: number;
    /** 15 minute delayed data. Lowest price during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketLow: number;
    /** 15 minute delayed data. Total volume of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
    marketVolume: number;
    /** Percent change of each interval relative to first value. 15 minute delayed consolidated data. */
    marketChangeOverTime: number;
    /** Only when chartSimplify is true. The first element is the original number of points. Second element is how many remain after simplification. */
    simplifyFactor: [number, number];
    /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
    changeOverTime: number;
    /** A human readable format of the date depending on the range. */
    label: number;
    /** IEX only data. Average price during the minute for trades on IEX. */
    average: number;
    /** IEX only data. Total notional value during the minute for trades on IEX. */
    notional: number;
    /** IEX only data. Number of trades during the minute on IEX. */
    numberOfTrades: number;
    /** IEX only data. Highest price during the minute on IEX. */
    high: number;
    /** IEX only data. Lowest price during the minute on IEX. */
    low: number;
    /** IEX only data. Total volume during the minute on IEX. */
    volume: number;
    /** IEX only data. First price during the minute on IEX. */
    open: number;
    /** IEX only data. Last price during the minute on IEX. */
    close: number;
}

export interface IntradayPriceParams {
    /** Limits the return of intraday prices to IEX only data. */
    chartIEXOnly: boolean;
    /** If true, chart will reset at midnight instead of the default behavior of 9:30am ET. */
    chartReset: boolean;
    /** If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
    chartSimplify: boolean;
    /** If passed, chart data will return every Nth element as defined by chartInterval */
    chartInterval: number;
    /** If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value. */
    changeFromClose: boolean;
    /** If passed, chart data will return the last N elements */
    chartLast: number;
    /** Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
    exactDate: string;
    /** By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available. */
    chartIEXWhenNull: boolean;
}
