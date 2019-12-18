import { ApiRequest } from '../../core/ApiRequest';
import { PaymentType } from '../../shared/PaymentType';
import { SecurityType } from '../../shared/SecurityType';

/**
 * [Spinoff](https://iexcloud.io/docs/api/#spinoff)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const spinoff = (symbol?: string, refid?: string): Promise<readonly Spinoff[]> => {
    return ApiRequest(`time-series/advanced_spinoff/${symbol}/${refid}`);
};

export interface Spinoff {
    /** Symbol of the security */
    readonly symbol: string;
    /** The date that determines which shareholders will be entitled to receive the issue. YYYY-MM-DD */
    readonly exDate: string;
    /** When the company examines its current list of shareholders to determine who will receive the issue. Only those who are registered as shareholders in the company’s books as of the record date will be entitled to receive the issue. YYYY-MM-DD */
    readonly recordDate: string;
    /** The date paid to eligible shareholders. YYYY-MM-DD */
    readonly paymentDate: string;
    /** YYYY-MM-DD */
    readonly withdrawalFromDate: string;
    /** YYYY-MM-DD */
    readonly withdrawalToDate: string;
    /** YYYY-MM-DD */
    readonly electionDate: string;
    /** YYYY-MM-DD */
    readonly effectiveDate: string;
    /** Minimum price */
    readonly minPrice: number;
    /** Maximum price */
    readonly maxPrice: number;
    /** Security description. */
    readonly description: string;
    /** The payment type. */
    readonly flag: PaymentType;
    /** Type of security. */
    readonly securityType: SecurityType;
    /** 0 or 1 */
    readonly hasWithdrawalRights: boolean;
    /** ISO currency code for the amount */
    readonly currency: string;
    /** Long description */
    readonly notes: string;
    /** OpenFIGI id for the symbol */
    readonly figi: string;
    /** Date the record was last changed. YYYY-MM-DD */
    readonly lastUpdated: string;
    /** refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly countryCode: string;
    /** Par value is the face value of a bond. Par value is important for a bond or fixed-income instrument because it determines its maturity value as well as the dollar value of coupon payments. Par value for a share refers to the stock value stated in the corporate charter. */
    readonly parValue: number;
    /** ISO currency code for parValue */
    readonly parValueCurrency: string;
    /** Unique id representing the record */
    readonly refid: string;
    /** Date the record was created. YYYY-MM-DD */
    readonly created: string;
}
