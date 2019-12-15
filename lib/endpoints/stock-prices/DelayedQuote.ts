import { ApiRequest } from '../../core';

/**
 * [DelayedQuote](https://iexcloud.io/docs/api/#delayed-quote)
 *
 * This returns the 15 minute delayed market quote.
 * Only included with paid subscription plans
 */
export const delayedQuote = (symbol: string): Promise<DelayedQuote> => {
    return ApiRequest(`/stock/${symbol}/delayed-quote`);
};

export interface DelayedQuote {
    readonly symbol: string;
    readonly delayedPrice: number;
    readonly delayedSize: number;
    readonly delayedPriceTime: number;
    readonly high: number;
    readonly low: number;
    readonly totalVolume: number;
    readonly processedTime: number;
}
