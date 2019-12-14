import { ApiRequest } from '../../core/ApiRequest';
import { PaymentType } from '../../shared/PaymentType';
import { SecurityType } from '../../shared/SecurityType';

/**
 * [Security Reclassification](https://iexcloud.io/docs/api/#security-reclassification)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const securityReclassification = (
    symbol?: string,
    refid?: string,
): Promise<readonly SecurityReclassification[]> => {
    return ApiRequest(`time-series/advanced_security_reclassification/${symbol}/${refid}`);
};

export interface SecurityReclassification {
    /**  Symbol of the security */
    readonly symbol: string;
    /**  The date that determines which shareholders will be entitled to receive the issue. YYYY-MM-DD */
    readonly exDate: string;
    /**  Number of starting shares */
    readonly fromFactor: number;
    /**  Number of ending shares */
    readonly toFactor: number;
    /**  fromFactor divided by toFactor */
    readonly ratio: number;
    /**  Security description. */
    readonly description: string;
    /**  The payment type. */
    readonly flag: PaymentType;
    /**  Type of security. */
    readonly securityType: SecurityType;
    /**  Type of security. */
    readonly resultSecurityType: SecurityType;
    /**  Long description */
    readonly notes: string;
    /**  OpenFIGI id for the symbol */
    readonly figi: string;
    /**  Date the record was last changed. YYYY-MM-DD */
    readonly lastUpdated: string;
    /**  refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly countryCode: string;
    /**  Par value is the face value of a bond. Par value is important for a bond or fixed-income instrument because it determines its maturity value as well as the dollar value of coupon payments. Par value for a share refers to the stock value stated in the corporate charter. */
    readonly parValue: number;
    /**  ISO currency code for parValue */
    readonly parValueCurrency: string;
    /**  Unique id representing the record */
    readonly refid: string;
    /**  Date the record was created. YYYY-MM-DD */
    readonly created: string;
}
