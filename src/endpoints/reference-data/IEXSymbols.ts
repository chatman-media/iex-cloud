import { ApiRequest } from '../../core';

/**
 * [IEX Symbols](https://iexcloud.io/docs/api/#iex-symbols)
 *
 * This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced.
 * @param cvs When parameter is not present, format defaults to JSON
 */
export const iexSymbols = (cvs?: boolean): Promise<readonly IEXSymbol[]> => {
    const params = cvs ? { params: { format: 'cvs' } } : {};
    return ApiRequest(`ref-data/iex/symbols`, params);
};

export interface IEXSymbol {
    /** refers to the symbol represented in Nasdaq Integrated symbology (INET). */
    readonly symbol: string;
    /** refers to the date the symbol reference data was generated. */
    readonly date: Date;
    /** will be true if the symbol is enabled for trading on IEX. */
    readonly isEnabled: boolean;
}
