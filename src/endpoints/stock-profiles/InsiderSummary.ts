import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Insider Summary](https://iexcloud.io/docs/api/#insider-summary)
 * Returns aggregated insiders summary data for the last 6 months.
 * Only included with paid subscription plans
 */
export const insiderSummary = (symbol: string): Promise<readonly InsiderSummary[]> => {
    return ApiRequest(`stock/${symbol}/insider-summary`);
};

export interface InsiderSummary {
    /** Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix. */
    readonly fullName: string;
    /** As-reported (unadjusted) number of shares acquired or disposed */
    readonly netTransacted: number;
    /** Insiders job title per the sourced filing */
    readonly reportedTitle: string;
    /** Total shares purchased */
    readonly totalBought: number;
    /** Total shares sold */
    readonly totalSold: number;
}
