/**
 * https://iexcloud.io/docs/api/#price-target
 */
export interface PriceTarget {
    symbol: number;
    /** Date of the most recent price target */
    updatedDate: string;
    /** Average price target */
    priceTargetAverage: number;
    /** Highest price target */
    priceTargetHigh: number;
    /** Lowest price target */
    priceTargetLow: number;
    /** Number of analysts that provided price targets */
    numberOfAnalysts: number;
}
