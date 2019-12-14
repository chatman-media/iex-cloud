import { ApiRequest } from '../../core/ApiRequest';

/**
 *
 * @param symbol Symbol name.
 * @param field Optional. Case sensitive string matching a response attribute below. Specifying an attribute will return just the attribute value. This is useful for Excel Webservice calls.
 */
export const quote = (symbol: string, field?: string): Promise<Quote> => {
    return ApiRequest(`stock/${symbol}/quote/${field || ''}`);
};

export interface Quote {
    /**
     * Use this to get the latest price
     *   Refers to the latest relevant price of the security which is derived from multiple sources. We first look for an IEX real time price. If an IEX real time price is older than 15 minutes, 15 minute delayed market price is used. If a 15 minute delayed price is not available, we will use the current day close price. If a current day close price is not available, we will use the last available closing price (listed below as previousClose)
     *   IEX real time price represents trades on IEX only. Trades occur across over a dozen exchanges, so the last IEX price can be used to indicate the overall market price.
     *   15 minute delayed prices are from all markets using the Consolidated Tape.
     *   This will not included pre or post market prices.
     */
    readonly latestPrice: number;
    /**
     * Use this to get the latest volume
     *   Refers to the latest total market volume of the stock across all markets. This will be the most recent volume of the stock during trading hours, or it will be the total volume of the last available trading day.
     */
    readonly latestVolume: number;
    /**  Refers to the machine readable epoch timestamp of when latestPrice was last updated. Represented in milliseconds since midnight Jan 1, 1970. */
    readonly latestUpdate: number;
    /**  Refers to a human readable time/date of when latestPrice was last updated. The format will vary based on latestSource is inteded to be displayed to a user. Use latestUpdate for machine readable timestamp. */
    readonly latestTime: string;
    /**
     * Refers to the source of the latest price.
     *   Possible values are "tops", "sip", "previousclose" or "close"
     */
    readonly calculationPrice: LatestTime;
    /**
     * This will represent a human readable description of the source of latestPrice.
     *   Possible values are "IEX real time price", "15 minute delayed price", "Close" or "Previous close"
     */
    readonly latestSource: LatestSource;
    /**  Refers to the change in price between latestPrice and previousClose */
    readonly change: number;
    /**  Refers to the percent change in price between latestPrice and previousClose. For example, a 5% change would be represented as 0.05. You can use the query string parameter displayPercent to return this field multiplied by 100. So, 5% change would be represented as 5. */
    readonly changePercent: number;
    /**  Total volume for the stock, but only updated after market open. To get premarket volume, use latestVolume */
    readonly volume: number;
    /**  Refers to the official open price from the SIP. 15 minute delayed (can be null after 00:00 ET, before 9:45 and weekends) */
    readonly open: number;
    /**  Refers to the official listing exchange time for the open from the SIP. 15 minute delayed */
    readonly openTime: number;
    /**  Refers to the official close price from the SIP. 15 minute delayed */
    readonly close: number;
    /**  Refers to the official listing exchange time for the close from the SIP. 15 minute delayed */
    readonly closeTime: number;
    /**  Refers to the previous trading day closing price. */
    readonly previousClose: number;
    /**  Refers to the previous trading day volume. */
    readonly previousVolume: number;
    /**  Refers to the market-wide highest price from the SIP. 15 minute delayed during normal market hours 9:30 - 16:00 (null before 9:45 and weekends). */
    readonly high: number;
    /**  Refers to the market-wide lowest price from the SIP. 15 minute delayed during normal market hours 9:30 - 16:00 (null before 9:45 and weekends). */
    readonly low: number;
    /**  Refers to the 15 minute delayed price outside normal market hours 0400 - 0930 ET and 1600 - 2000 ET. This provides pre market and post market price. This is purposefully separate from latestPrice so users can display the two prices separately. */
    readonly extendedPrice: number;
    /**  Refers to the price change between extendedPrice and latestPrice. */
    readonly extendedChange: number;
    /**  Refers to the price change percent between extendedPrice and latestPrice. */
    readonly extendedChangePercent: number;
    /**  Refers to the last update time of extendedPrice */
    readonly extendedPriceTime: number;
    /**  Refers to the 15 minute delayed market price from the SIP during normal market hours 9:30 - 16:00 ET. */
    readonly delayedPrice: number;
    /**  Refers to the last update time of the delayed market price during normal market hours 9:30 - 16:00 ET. */
    readonly delayedPriceTime: number;
    /**  is calculated in real time using latestPrice. */
    readonly marketCap: number;
    /**  Refers to the 30 day average volume. */
    readonly avgTotalVolume: number;
    /**  Refers to the adjusted 52 week high. */
    readonly week52High: number;
    /**  Refers to the adjusted 52 week low. */
    readonly week52Low: number;
    /**  Refers to the price change percentage from start of year to previous close. */
    readonly ytdChange: number;
    /**  Refers to the price of the last trade on IEX. */
    readonly iexRealtimePrice: number;
    /**  Refers to the size of the last trade on IEX. */
    readonly iexRealtimeSize: number;
    /**  Refers to the last update time of iexRealtimePrice in milliseconds since midnight Jan 1, 1970 UTC or -1 or 0. If the value is -1 or 0, IEX has not quoted the symbol in the trading day. */
    readonly iexLastUpdated: number;
    /**  Refers to IEX’s percentage of the market in the stock. */
    readonly iexMarketPercent: number;
    /**  Refers to shares traded in the stock on IEX. */
    readonly iexVolume: number;
    /**  Refers to the best bid price on IEX. */
    readonly iexBidPrice: number;
    /**  Refers to amount of shares on the bid on IEX. */
    readonly iexBidSize: number;
    /**  Refers to the best ask price on IEX. */
    readonly iexAskPrice: number;
    /**  Refers to amount of shares on the ask on IEX. */
    readonly iexAskSize: number;
    /**  Refers to the stock ticker. */
    readonly symbol: string;
    /**  Refers to the company name. */
    readonly companyName: string;
    /**  Refers to the primary listing exchange for the symbol. */
    readonly primaryExchange: string;
    /**  Refers to the price-to-earnings ratio for the company. */
    readonly peRatio: number;
    /**  Epoch timestamp in milliseconds of the last market hours trade excluding the closing auction trade. */
    readonly lastTradeTime: number;
    /**  For US stocks, indicates if the market is in normal market hours. Will be false during extended hours trading. */
    readonly isUSMarketOpen: boolean;
}

type LatestTime = 'tops' | 'sip' | 'previousclose' | 'close';
type LatestSource = 'IEX real time price' | '15 minute delayed price' | 'Close' | 'Previous close';

export interface QuoteQSParams {
    /**
     * If set to `true`, all percentage values will be multiplied by a factor of 100 (Ex: `/stock/twtr/quote?displayPercent=true`)
     */
    readonly displayPercent: boolean;
}
