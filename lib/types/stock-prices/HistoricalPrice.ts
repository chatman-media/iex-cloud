export interface HistoricalPrice {
    /** Formatted as YYYY-MM-DD */
    date: Date;
    /** Adjusted data for historical dates. Split adjusted only. */
    high?: number;
    /** Adjusted data for historical dates. Split adjusted only. */
    low?: number;
    /** Adjusted data for historical dates. Split adjusted only. */
    volume?: number;
    /** Adjusted data for historical dates. Split adjusted only. */
    open?: number;
    /** Adjusted data for historical dates. Split adjusted only. */
    close?: number;
    /** Unadjusted data for historical dates. */
    uHigh?: number;
    /** Unadjusted data for historical dates. */
    uLow?: number;
    /** Unadjusted data for historical dates. */
    uVolume?: number;
    /** Unadjusted data for historical dates. */
    uOpen?: number;
    /** Unadjusted data for historical dates. */
    uClose?: number;
    /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
    changeOverTime?: number;
    /** A human readable format of the date depending on the range. */
    label?: string;
    /** Change from previous trading day. */
    change?: number;
    /** Change percent from previous trading day. */
    changePercent?: number;
}

export interface HistoricalPriceParams {
    /** Will return adjusted data only with keys `date`, `close`, and `volume`. */
    chartCloseOnly?: boolean;
    /**  Used only when range is `date` to return OHLCV data instead of minute bar data. */
    chartByDay?: boolean;
    /**  If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
    chartSimplify?: boolean;
    /**  If passed, chart data will return every Nth element as defined by `chartInterval`. */
    chartInterval?: number;
    /** If true, `changeOverTime` and `marketChangeOverTime` will be relative to previous day close instead of the first value. */
    changeFromClose?: boolean;
    /** If passed, chart data will return the last N elements from the time period defined by the range parameter. */
    chartLast?: number;
    /** Same format as the path parameter. This can be used for batch calls. */
    range?: string;
    /** Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
    exactDate?: string;
    /** Can be `asc` or `desc` to sort results by date. Defaults to `desc`. */
    sort?: string;
    /** If true, current trading day data is appended. */
    includeToday?: boolean;
    [key: string]: any;
}
