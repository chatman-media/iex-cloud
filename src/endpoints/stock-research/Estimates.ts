import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Estimates](https://iexcloud.io/docs/api/#estimates)
 * Provides the latest consensus estimate for the next fiscal period
 */
export const estimates = (symbol: string, params?: EstimatesParams): Promise<EstimatesData> => {
    return ApiRequest(`stock/${symbol}/estimates`, { params });
};

export interface EstimatesParams {
    /** Number of quarters or years to return. Default is 1. */
    readonly last?: number;
    /** Allows you to specify annual or quarterly earnings. Values should be annual or quarter. Default is quarter. */
    readonly period?: string;
}

export interface EstimatesData {
    readonly symbol: string;
    readonly estimates: readonly Estimate[];
}

export interface Estimate {
    /** Consensus EPS estimate trend for the period. EPS data is split-adjusted by default. Earnings data accounts for all corporate actions including dilutions, splits, reverse splits, spin-offs, exceptional dividends, and rights issues. Investopedia */
    readonly consensusEPS: number;
    /** Number of estimates for the period */
    readonly numberOfEstimates: number;
    /** The fiscal quarter the earnings data applies to Q# YYYY */
    readonly fiscalPeriod: string;
    /** Date representing the company fiscal quarter end YYYY-MM-DD */
    readonly fiscalEndDate: string;
    /** Expected report date of next earnings */
    readonly reportDate: string;
}
