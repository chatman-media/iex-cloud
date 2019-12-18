import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Insider Roster](https://iexcloud.io/docs/api/#insider-roster)
 * Returns the top 10 insiders, with the most recent information.
 */
export const insiderRoster = (symbol: string): Promise<readonly InsiderRoster[]> => {
    return ApiRequest(`stock/${symbol}/insider-roster`);
};

export interface InsiderRoster {
    /** Name of the entity */
    readonly entityName: string;
    /** refers to the update time of report_date in milliseconds since midnight Jan 1, 1970. */
    readonly reportDate: number;
    /** Number of shares held, adjusted for corporate actions */
    readonly position: number;
}
