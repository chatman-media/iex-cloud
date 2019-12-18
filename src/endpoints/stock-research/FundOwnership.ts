import { ApiRequest } from '../../core/ApiRequest';

/**
 * [FundOwnership](https://iexcloud.io/docs/api/#fund-ownership)
 * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
 * Only included with paid subscription plans
 */
export const fundOwnership = (symbol: string): Promise<readonly FundOwnership[]> => {
    return ApiRequest(`stock/${symbol}/fund-ownership`);
};

export interface FundOwnership {
    /** Share amount held by the fund as of the report date, adjusted for corporate actions */
    readonly adjHolding: number;
    /** Total share amount multiplied by the latest month-end share price, adjusted for corporate actions in USD */
    readonly adjMv: number;
    /** Name of the entity */
    readonly entityProperName: string;
    /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
    readonly reportDate: number;
    /** Share amount held by the fund as reported in the source */
    readonly reportedHolding: number;
    /** Market value held by the fund as reported in the source, represented in USD. */
    readonly reportedMv: number;
}
