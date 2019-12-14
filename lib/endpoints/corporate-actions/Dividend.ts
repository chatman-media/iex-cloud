import { ApiRequest } from '../../core/ApiRequest';
import { PaymentType } from '../shared/PaymentType';
import { SecurityType } from '../shared/SecurityType';

/**
 * [Dividends](https://iexcloud.io/docs/api/#dividends)
 *
 * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
 * You’ll be provided with:
 *   Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
 *   Gross and net amounts
 *   Details of all currencies in which a dividend can be paid
 *   Tax information
 *   The ability to keep up with the growing number of complex dividend distributions
 *
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const dividends = (symbol?: string, refid?: string): Promise<readonly Dividend[]> => {
    return ApiRequest(`time-series/advanced_dividends/${symbol}/${refid}`);
};

export interface Dividend {
    /**  Symbol of the security */
    readonly symbol: string;
    /**  The date that determines which shareholders will be entitled to receive the dividend. Typically, the ex-dividend date is set two business days before the record date. Only those shareholders who owned their shares at least two full business days before the record date will be entitled to receive the dividend.. YYYY-MM-DD */
    readonly exDate: string;
    /**  When the company examines its current list of shareholders to determine who will receive dividends. Only those who are registered as shareholders in the company’s books as of the record date will be entitled to receive dividends.. YYYY-MM-DD */
    readonly recordDate: string;
    /**  The date when the dividend is actually paid to eligible shareholders. YYYY-MM-DD */
    readonly paymentDate: string;
    /**  This is the date on which the company announces that it will be issuing a dividend in the future. . YYYY-MM-DD */
    readonly announceDate: string;
    /**  ISO currency code for the amount */
    readonly currency: string;
    /**  How often the dividend is paid. */
    readonly frequency: DividendFrequency;
    /**  Dividend rate. The amount paid. */
    readonly amount: number;
    /**  Security description. */
    readonly description: string;
    /**  The payment type. */
    readonly flag: PaymentType;
    /**  Type of security. */
    readonly securityType: SecurityType;
    /**  Long description */
    readonly notes: string;
    /**  OpenFIGI id for the symbol */
    readonly figi: string;
    /**  Date the dividend record was last changed. YYYY-MM-DD */
    readonly lastUpdated: string;
    /**  refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly countryCode: string;
    /**  Par value is the face value of a bond. Par value is important for a bond or fixed-income instrument because it determines its maturity value as well as the dollar value of coupon payments. Par value for a share refers to the stock value stated in the corporate charter. */
    readonly parValue: number;
    /**  ISO currency code for parValue */
    readonly parValueCurrency: string;
    /**  Net amount is the dividend return after tax */
    readonly netAmount: number;
    /**  Gross amount is the dividend return on a stock before any expenses, taxes or deductions are taken into account */
    readonly grossAmount: number;
    /**  Supported values */
    readonly marker: Marker;
    /**  The percent tax rate. Example: 15% tax rate is represented as “15” */
    readonly taxRate: number;
    /**  Number of starting shares */
    readonly fromFactor: number;
    /**  Number of ending shares */
    readonly toFactor: number;
    /**  ADR custody fee amount */
    readonly adrFee: number;
    /**  The coupon payment or interest rate paid */
    readonly coupon: number;
    /**  ISO currency code for certificate of deposit */
    readonly declaredCurrencyCD: string;
    /**  Declared gross amount */
    readonly declaredGrossAmount: number;
    /**  Net investment income (NII) is income received from investment assets (before taxes) such as bonds, stocks, mutual funds, loans and other investments (less related expenses). The individual tax rate on net investment income depends on whether it is interest income, dividend income or capital gains. Investopedia */
    readonly isNetInvestmentIncome: boolean;
    /**  Dividend Advantage Portfolio, a unit investment trust. */
    readonly isDAP: boolean;
    /**  Is approximate */
    readonly isApproximate: boolean;
    /**  Date used for the FX rate. YYYY-MM-DD */
    readonly fxDate: string;
    /**  Second payment date. YYYY-MM-DD */
    readonly secondPaymentDate: string;
    /**  Second ex date. YYYY-MM-DD */
    readonly secondExDate: string;
    /**  Fiscal year end date. YYYY-MM-DD */
    readonly fiscalYearEndDate: string;
    /**  Period end date. YYYY-MM-DD */
    readonly periodEndDate: string;
    /**  Optional election date. YYYY-MM-DD */
    readonly optionalElectionDate: string;
    /**  To Date. YYYY-MM-DD */
    readonly toDate: string;
    /**  Registration date. YYYY-MM-DD */
    readonly registrationDate: string;
    /**  Installment payment date. YYYY-MM-DD */
    readonly installmentPayDate: string;
    /**  This is the date on which the company announces that it will be issuing a dividend in the future. YYYY-MM-DD */
    readonly declaredDate: string;
    /**  Unique id representing the dividend record */
    readonly refid: string;
    /**  Date the dividend record was created. YYYY-MM-DD */
    readonly created: string;
}

export type DividendFrequency =
    | 'Every 35 Days'
    | 'Annual'
    | 'BiMonthly'
    | 'Daily'
    | 'Final'
    | 'Interim'
    | 'Interest on Maturity'
    | 'Interest on Trigger'
    | 'Irregular'
    | 'Monthly'
    | 'Quarterly'
    | 'Semi-Annual'
    | 'Trimesterly'
    | 'Unspecified'
    | 'Weekly'
    | 'Blank';

export type Marker =
    | 'Annual'
    | 'Arrears'
    | 'Capital Gain'
    | 'Capital Gain Long Term'
    | 'Capital Gain Short Term'
    | 'Final'
    | 'Installment'
    | 'Interim'
    | 'Interest on Capital'
    | 'Memorial'
    | 'Regular'
    | 'Special'
    | 'Supplementary'
    | 'Unspecified';
