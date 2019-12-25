import { ApiRequest } from '../../core';

/**
 * [FX Symbols](https://iexcloud.io/docs/api/#fx-symbols)
 *
 * This call returns a list of supported currencies and currency pairs.
 */
export const fxSymbols = (): Promise<FXSymbols> => {
    return ApiRequest(`ref-data/fx/symbols`);
};

export interface FXSymbols {
    /**
     * Array of currencies.
     * Each currency is an object containing a code and name as strings.
     */
    readonly currencies: ReadonlyArray<{
        readonly code: string;
        readonly name: string;
    }>;

    /**
     * Array of supported currency pairs.
     * Each pair is an object containing from code and to code.
     */
    readonly pairs: ReadonlyArray<{
        readonly fromCurrency: string;
        readonly toCurrency: string;
        readonly symbol: string;
    }>;
}
