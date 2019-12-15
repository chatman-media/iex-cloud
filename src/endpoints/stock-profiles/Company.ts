import { ApiRequest } from '../../core/ApiRequest';

/**
 * Company information [docs](https://iexcloud.io/docs/api/#company)
 */
export const company = (symbol: string): Promise<Company> => {
    return ApiRequest(`stock/${symbol}/company`);
};

export interface Company {
    readonly symbol: string;
    /** Name of the company */
    readonly companyName: string;
    readonly exchange: string;
    readonly industry: string;
    readonly website: string;
    readonly description: string;
    readonly CEO: string;
    readonly securityName: string;
    readonly issueType: string;
    readonly sector: string;
    readonly primarySicCode: number;
    /** Number of employees */
    readonly employees: number;
    readonly tags: readonly string[] | null;
    readonly address: string | null;
    readonly address2: string | null;
    readonly state: string | null;
    readonly city: string | null;
    readonly zip: string | null;
    readonly country: string | null;
    readonly phone: string | null;
}
