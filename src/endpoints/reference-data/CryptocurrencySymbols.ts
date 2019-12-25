import { ApiRequest } from '../../core';

/**
 * [Cryptocurrency Symbols](https://iexcloud.io/docs/api/#cryptocurrency-symbols)
 *
 * This provides a full list of supported cryptocurrencies by IEX Cloud.
 */
export const cryptocurrencySymbols = (): Promise<readonly CryptocurrencySymbol[]> => {
    return ApiRequest(`ref-data/crypto/symbols`);
};
export interface CryptocurrencySymbol {
    /** The symbol of the cryptocurrency */
    readonly symbol: string;
    /** The name of the cryptocurrency */
    readonly name: string;
    /** Will return null for cryptocurrency, this field is present to maintain consistency with other ref data endpoints */
    readonly exchange: string;
    /** Will return null for cryptocurrency, this field is present to maintain consistency with other ref data endpoints */
    readonly iexId: string;
    /** The currency in which this symbol will be quoted in. For example, BTCUSD will be in the currency of “USD” */
    readonly currency: string;
    /** The last time we as IEX updated it */
    readonly date: string;
    /** The type of the symbol – defaults to “crypto” */
    readonly type: string;
    /** Whether or not the cryptocurrency is currently live and updating */
    readonly isEnabled: boolean;
    /** The region in which this cryptocurrency comes from – defaults to “US” */
    readonly region: string;
}
