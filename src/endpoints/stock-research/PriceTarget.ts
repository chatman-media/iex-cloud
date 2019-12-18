import { ApiRequest } from '../../core/ApiRequest';

/**
 * [PriceTarget](https://iexcloud.io/docs/api/#price-target)
 * Provides the latest avg, high, and low analyst price target for a symbol.
 * Only included with paid subscription plans
 */
export const priceTarget = (symbol: string): Promise<PriceTarget> => {
    return ApiRequest(`stock/${symbol}/price-target`);
};

export interface PriceTarget {
    readonly symbol: number;
    /** Date of the most recent price target */
    readonly updatedDate: string;
    /** Average price target */
    readonly priceTargetAverage: number;
    /** Highest price target */
    readonly priceTargetHigh: number;
    /** Lowest price target */
    readonly priceTargetLow: number;
    /** Number of analysts that provided price targets */
    readonly numberOfAnalysts: number;
}
