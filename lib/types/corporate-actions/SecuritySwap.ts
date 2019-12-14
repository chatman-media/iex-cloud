import { PaymentType } from '../shared/PaymentType';
import { SecurityType } from '../shared/SecurityType';

export interface SecuritySwap {
    /**  Symbol of the security */
    symbol: string;
    /**  The date that determines which shareholders will be entitled to receive the issue. YYYY-MM-DD */
    exDate: string;
    /**  When the company examines its current list of shareholders to determine who will receive the issue. Only those who are registered as shareholders in the company’s books as of the record date will be entitled to receive the issue. YYYY-MM-DD */
    recordDate: string;
    /**  The date paid to eligible shareholders. YYYY-MM-DD */
    paymentDate: string;
    /**  Number of starting shares */
    fromFactor: number;
    /**  Number of ending shares */
    toFactor: number;
    /**  fromFactor divided by toFactor */
    ratio: number;
    /**  The amount paid. */
    amount: number;
    /**  Security description. */
    description: string;
    /**  The payment type. */
    flag: PaymentType;
    /**  Type of security. */
    securityType: SecurityType;
    /**  Type of security. */
    resultSecurityType: SecurityType;
    /**  Long description */
    notes: string;
    /**  OpenFIGI id for the symbol */
    figi: string;
    /**  Date the record was last changed. YYYY-MM-DD */
    lastUpdated: string;
    /**  refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    countryCode: string;
    /**  Par value is the face value of a bond. Par value is important for a bond or fixed-income instrument because it determines its maturity value as well as the dollar value of coupon payments. Par value for a share refers to the stock value stated in the corporate charter. */
    parValue: number;
    /**  ISO currency code for parValue */
    parValueCurrency: string;
    /**  Unique id representing the record */
    refid: string;
    /**  Date the record was created. YYYY-MM-DD */
    created: string;
}
