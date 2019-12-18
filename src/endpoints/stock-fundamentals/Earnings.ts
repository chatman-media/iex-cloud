import { isString } from 'util';

import { ApiRequest } from '../../core';

/**
 * [Earnings](https://iexcloud.io/docs/api/#earnings)
 *
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 * Earnings prior to last quarter are only included with paid subscription plans
 *
 * @param symbol
 * @param last Optional (Number) - Number of quarters or years to return. Default is 1.
 * @param field Optional (String) - case sensitive string matching a response attribute below. Returns raw value of field specified. Useful for Excel Webservice calls.
 */
export const earnings = (
    symbol: string,
    last?: number,
    field?: string,
    params?: EarningsParams,
): Promise<EarningsResponse> => {
    return ApiRequest(
        `stock/${symbol}/earnings/${[last, field].filter(x => isString(x)).join('/')}`,
        { params },
    );
};

export interface EarningsParams {
    /** Number of quarters or years to return. Default is 1. */
    readonly last?: number;
    /** Allows you to specify annual or quarterly earnings. Values should be annual or quarter. Default is quarter. */
    readonly period?: string;
}

export interface EarningsResponse {
    /** refers to the dividend ex-date */
    readonly symbol: string;
    readonly earnings: readonly Earnings[];
}

export interface Earnings {
    /** Actual earnings per share for the period. EPS data is split-adjusted by default. Earnings data accounts for all corporate actions including dilutions, splits, reverse splits, spin-offs, exceptional dividends, and rights issues. */
    readonly actualEPS: number;
    /** Consensus EPS estimate trend for the period */
    readonly consensusEPS: number;
    /** Time of earnings announcement. BTO (Before open), DMT (During trading), AMC (After close) */
    readonly announceTime: string;
    /** Number of estimates for the period */
    readonly numberOfEstimates: number;
    /** Dollar amount of EPS surprise for the period */
    readonly EPSSurpriseDollar: number;
    /** Expected earnings report date YYYY-MM-DD */
    readonly EPSReportDate: string;
    /** The fiscal quarter Q# YYYY or the fiscal year FY ending in YYYY the earnings data applies to */
    readonly fiscalPeriod: string;
    /** Date representing the company fiscal quarter end YYYY-MM-DD */
    readonly fiscalEndDate: string;
    /** Represents the EPS of the quarter a year ago */
    readonly yearAgo: number;
    /** Represents the percent difference between the quarter a year ago actualEPS and current period actualEPS. */
    readonly yearAgoChangePercent: number;
}
