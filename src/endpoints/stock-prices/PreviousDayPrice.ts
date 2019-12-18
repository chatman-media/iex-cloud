import { ApiRequest } from '../../core/ApiRequest';
import { HistoricalPrice } from './HistoricalPrice';

/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for one or more stocks.
 * @param symbol
 */
export const previousDayPrice = (symbol: string): Promise<Partial<HistoricalPrice>> => {
    return ApiRequest(`stock/${symbol}/previous`);
};

/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for all stocks.
 */
export const previousDayPrices = (): Promise<ReadonlyArray<Partial<HistoricalPrice>>> => {
    return ApiRequest(`stock/market/previous`);
};
