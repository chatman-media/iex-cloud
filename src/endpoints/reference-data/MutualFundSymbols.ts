import { ApiRequest } from '../../core';

/**
 * [Mutual Fund Symbols](https://iexcloud.io/docs/api/#mutual-fund-symbols)
 * This call returns an array of mutual fund symbols that IEX Cloud supports for API calls.
 */
export const mutualFundSymbols = (): Promise<readonly MutualFundSymbol[]> => {
    return ApiRequest(`ref-data/mutual-funds/symbols`);
};

export interface MutualFundSymbol {
    /** refers to the symbol */
    readonly symbol: string;
    /** refers to the name of the company or security. */
    readonly name: string;
    /** refers to the date the symbol reference data was generated. */
    readonly date: string;
    /**
     * refers to the common issue type (
     * OEF - Open Ended Fund
     * CEF - Closed Ended Fund)
     */
    readonly type: string;
    /** refers to the region of the world the symbol is in */

    readonly region: string;
    /** refers to the currency the symbol is traded in */
    readonly currency: string;
    /** unique ID applied by IEX to track securities through symbol changes. */
    readonly iexId: string;
    readonly isEnabled: boolean;
}
