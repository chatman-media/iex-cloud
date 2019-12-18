import { ApiRequest } from '../../core';

/**
 * [Financials](https://iexcloud.io/docs/api/#financials)
 *
 * Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter.
 * Financial Firms report financials in a different format than our 3rd party processes therefore our data is limited
 * Only included with paid subscription plans
 *
 * @param symbol
 */
export const financials = (
    symbol: string,
    params?: FinancialsParams,
): Promise<FinancialsResponse> => {
    return ApiRequest(`stock/${symbol}/financials`, { params });
};

export interface FinancialsParams {
    /** Allows you to specify annual or quarterly financials. Defaults to quarter. Values should be annual or quarter */
    readonly period?: string;
}

export interface FinancialsResponse {
    /** refers to the dividend ex-date */
    readonly symbol: string;
    readonly financials: ReadonlyArray<Partial<Financials>>;
}

export interface Financials {
    /** The last day of the relevant fiscal period. */
    readonly reportDate: string;
    readonly grossProfit: number;
    readonly costOfRevenue: number;
    readonly operatingRevenue: number;
    readonly totalRevenue: number;
    readonly operatingIncome: number;
    readonly netIncome: number;
    readonly researchAndDevelopment: number;
    readonly operatingExpense: number;
    readonly currentAssets: number;
    readonly totalAssets: number;
    readonly totalLiabilities: number;
    readonly currentCash: number;
    readonly currentDebt: number;
    readonly shortTermDebt: number;
    readonly longTermDebt: number;
    readonly totalCash: number;
    readonly totalDebt: number;
    readonly shareholderEquity: number;
    readonly cashChange: number;
    readonly cashFlow: number;
    readonly operatingGainsLosses: string;
}
