/**
 * Company information [docs](https://iexcloud.io/docs/api/#company)
 */
export interface Company {
    symbol: string;
    /** Name of the company */
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;
    securityName: string;
    issueType: string;
    sector: string;
    primarySicCode: number;
    /** Number of employees */
    employees: number;
    tags: string[] | null;
    address: string | null;
    address2: string | null;
    state: string | null;
    city: string | null;
    zip: string | null;
    country: string | null;
    phone: string | null;
}
