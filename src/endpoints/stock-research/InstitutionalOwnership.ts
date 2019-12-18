import { ApiRequest } from '../../core/ApiRequest';

/**
 * [InstitutionalOwnership](https://iexcloud.io/docs/api/#institutional-ownership)
 * Returns the top 10 institutional holders, defined as buy-side or sell-side firms.
 * Only included with paid subscription plans
 */
export const institutionalOwnership = (symbol: string): Promise<readonly InstitutionalOwnership[]> => {
    return ApiRequest(`stock/${symbol}/institutional-ownership`);
};

export interface InstitutionalOwnership {
    /** Share amount held by the fund as of the report date, adjusted for corporate actions */
    readonly adjHolding: number;
    /** Total share amount multiplied by the latest month-end share price, adjusted for corporate actions in USD */
    readonly adjMv: number;
    /** Name of the entity */
    readonly entityProperName: string;
    /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
    readonly reportDate: number;
    /** Share amount held by the institution as reported in the source */
    readonly reportedHolding: number;
}
