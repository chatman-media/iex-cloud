import { ApiRequest } from '../../core';

/**
 * [Symbols](https://iexcloud.io/docs/api/#symbols)
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 */
export const symbols = (): Promise<readonly TradeSymbol[]> => {
    return ApiRequest(`ref-data/symbols`);
};

export interface TradeSymbol {
    /** refers to the symbol represented in Nasdaq Integrated symbology (INET). */
    readonly symbol: string;
    /** refers to Exchange using IEX Supported Exchanges list */
    readonly exchange: string;
    /** refers to the name of the company or security. */
    readonly name: string;
    /** refers to the date the symbol reference data was generated. */
    readonly date: string;
    /** will be true if the symbol is enabled for trading on IEX. */
    readonly isEnabled: string;
    /** refers to the common issue type */
    readonly type: SymbolCommonIssueType;
    /** refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly region: string;
    /** refers to the currency the symbol is traded in using ISO 4217 */
    readonly currency: string;
    /** unique ID applied by IEX to track securities through symbol changes. */
    readonly iexId: string;
}

export type SymbolCommonIssueType =
    | 'ad' // - ADR
    | 're' // - REIT
    | 'ce' // - Closed end fund
    | 'si' // - Secondary Issue
    | 'lp' // - Limited Partnerships
    | 'cs' // - Common Stock
    | 'et' // - ETF
    | 'wt' // - Warrant
    | 'oef' // - Open Ended Fund
    | 'cef' // - Closed Ended Fund
    | 'ps' // - Preferred Stock
    | 'ut' // - Unit
    | 'struct'; // - Structured Product
