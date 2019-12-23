import { ApiRequest } from '../../core/ApiRequest';

/**
 * [IPO Calendar](https://iexcloud.io/docs/api/#ipo-calendar)
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures: `rawData` and `viewData`. `rawData` represents all available data for an IPO. `viewData` represents data structured for display to a user.
 *
 * Only included with paid subscription plans
 * @param today true if only for today
 */
export const ipoCalendar = (today?: boolean): Promise<IPOCalendar> => {
    return ApiRequest(`stock/market/${today ? `today` : `upcoming`}-ipos`);
};

export interface IPOCalendar {
    readonly rawData: readonly IPORawData[];
    readonly viewData: readonly IPOViewData[];
    /** Date */
    readonly lastUpdate: string;
}

export interface IPORawData {
    /** refers to the IPO symbol. */
    readonly symbol: string;
    /** refers to the name of the IPO company. */
    readonly companyName: string;
    /** refers to the date the IPO is expected to start trading. */
    readonly expectedDate: string;
    /** refers to the list of investment banks leading the IPO. */
    readonly leadUnderwriters: readonly string[];
    /** refers to the list of investment banks underwriting the IPO. */
    readonly underwriters: readonly string[];
    /** refers to the list of legal firms representing the company. */
    readonly companyCounsel: readonly string[];
    /** refers to the list of legal firms representing the underwriter. */
    readonly underwriterCounsel: readonly string[];
    /** refers to the auditing firm for the company. */
    readonly auditor: string;
    /** refers to the exchange listing the IPO. */
    readonly market: string;
    /** refers to the Central Index Key assigned by the SEC to identify filings. */
    readonly cik: string;
    /** refers to the company address. */
    readonly address: string;
    /** refers to the company city. */
    readonly city: string;
    /** refers to the company state. */
    readonly state: string;
    /** refers to the company zip code. */
    readonly zip: string;
    /** refers to the company phone number. */
    readonly phone: string;
    /** refers to the name of the company CEO. */
    readonly ceo: string;
    /** refers to the number of employees in the company. */
    readonly employees: number;
    /** refers to the URL of the company website. */
    readonly url: string;
    /** refers to the filing status of the SEC Form S-1. */
    readonly status: string;
    /** refers to the number of shares offered in the IPO. */
    readonly sharesOffered: number;
    /** refers to the low end estimate of IPO share price. On the day of the IPO, this will be the syndicate price which is used similarly to previousClose to determine change versus current price. */
    readonly priceLow: number;
    /** refers to the high end estimate of IPO share price. On the day of the IPO, this value may be null. */
    readonly priceHigh: number;
    /** refers to the notional value of the IPO in dollars. */
    readonly offerAmount: number;
    /** refers to company total expenses in dollars. */
    readonly totalExpenses: number;
    /** refers to number of shares alloted by underwriters in excess of IPO offering. */
    readonly sharesOverAlloted: number;
    /** refers to number of shares offered by existing shareholders. */
    readonly shareholderShares: number;
    /** refers to the total number of company shares outstanding. */
    readonly sharesOutstanding: number;
    /** refers to the date of insider lockup period expiration. */
    readonly lockupPeriodExpiration: string;
    /** refers to the date following IPO when company quiet period expires. */
    readonly quietPeriodExpiration: string;
    /** refers to company revenue in dollars. */
    readonly revenue: number;
    /** refers to company net income in dollars. */
    readonly netIncome: number;
    /** refers to company total assets in dollars. */
    readonly totalAssets: number;
    /** refers to company total liabilities in dollars. */
    readonly totalLiabilities: number;
    /** refers to stock holder equity in dollars. */
    readonly stockholderEquity: number;
    /** description of the company. */
    readonly companyDescription: string;
    /** description of the company’s business. */
    readonly businessDescription: string;
    /** description of the company’s planned use of proceeds from the IPO. */
    readonly useOfProceeds: string;
    /** description of the company’s competition. */
    readonly competition: string;
    /** refers to the notional value of shares offered * average share price in dollars. */
    readonly amount: number;
    /** refers to the percent of outstanding shares being offered as a whole number. */
    readonly percentOffered: string;
    /** same as companyName */
}

export interface IPOViewData {
    readonly Company: string;
    /** same as symbol */
    readonly Symbol: string;
    /** formatted as $priceLow - priceHigh */
    readonly Price: string;
    /** same as sharesOffered */
    readonly Shares: string;
    /** same as amount */
    readonly Amount: string;
    /** same as sharesOutstanding */
    readonly Float: string;
    /** same as percentOffered */
    readonly Percent: string;
    /** same as market */
    readonly Market: string;
    /** same as expectedDate */
    readonly Expected: string;
}
