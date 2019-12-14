import { PaymentType } from '../shared/PaymentType';
import { SecurityType } from '../shared/SecurityType';

export interface Dividend {
    /**  Symbol of the security */
    symbol: string;
    /**  The date that determines which shareholders will be entitled to receive the dividend. Typically, the ex-dividend date is set two business days before the record date. Only those shareholders who owned their shares at least two full business days before the record date will be entitled to receive the dividend.. YYYY-MM-DD */
    exDate: string;
    /**  When the company examines its current list of shareholders to determine who will receive dividends. Only those who are registered as shareholders in the company’s books as of the record date will be entitled to receive dividends.. YYYY-MM-DD */
    recordDate: string;
    /**  The date when the dividend is actually paid to eligible shareholders. YYYY-MM-DD */
    paymentDate: string;
    /**  This is the date on which the company announces that it will be issuing a dividend in the future. . YYYY-MM-DD */
    announceDate: string;
    /**  ISO currency code for the amount */
    currency: string;
    /**  How often the dividend is paid. */
    frequency: DividendFrequency;
    /**  Dividend rate. The amount paid. */
    amount: number;
    /**  Security description. */
    description: string;
    /**  The payment type. */
    flag: PaymentType;
    /**  Type of security. */
    securityType: SecurityType;
    /**  Long description */
    notes: string;
    /**  OpenFIGI id for the symbol */
    figi: string;
    /**  Date the dividend record was last changed. YYYY-MM-DD */
    lastUpdated: string;
    /**  refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    countryCode: string;
    /**  Par value is the face value of a bond. Par value is important for a bond or fixed-income instrument because it determines its maturity value as well as the dollar value of coupon payments. Par value for a share refers to the stock value stated in the corporate charter. */
    parValue: number;
    /**  ISO currency code for parValue */
    parValueCurrency: string;
    /**  Net amount is the dividend return after tax */
    netAmount: number;
    /**  Gross amount is the dividend return on a stock before any expenses, taxes or deductions are taken into account */
    grossAmount: number;
    /**  Supported values */
    marker: Marker;
    /**  The percent tax rate. Example: 15% tax rate is represented as “15” */
    taxRate: number;
    /**  Number of starting shares */
    fromFactor: number;
    /**  Number of ending shares */
    toFactor: number;
    /**  ADR custody fee amount */
    adrFee: number;
    /**  The coupon payment or interest rate paid */
    coupon: number;
    /**  ISO currency code for certificate of deposit */
    declaredCurrencyCD: string;
    /**  Declared gross amount */
    declaredGrossAmount: number;
    /**  Net investment income (NII) is income received from investment assets (before taxes) such as bonds, stocks, mutual funds, loans and other investments (less related expenses). The individual tax rate on net investment income depends on whether it is interest income, dividend income or capital gains. Investopedia */
    isNetInvestmentIncome: boolean;
    /**  Dividend Advantage Portfolio, a unit investment trust. */
    isDAP: boolean;
    /**  Is approximate */
    isApproximate: boolean;
    /**  Date used for the FX rate. YYYY-MM-DD */
    fxDate: string;
    /**  Second payment date. YYYY-MM-DD */
    secondPaymentDate: string;
    /**  Second ex date. YYYY-MM-DD */
    secondExDate: string;
    /**  Fiscal year end date. YYYY-MM-DD */
    fiscalYearEndDate: string;
    /**  Period end date. YYYY-MM-DD */
    periodEndDate: string;
    /**  Optional election date. YYYY-MM-DD */
    optionalElectionDate: string;
    /**  To Date. YYYY-MM-DD */
    toDate: string;
    /**  Registration date. YYYY-MM-DD */
    registrationDate: string;
    /**  Installment payment date. YYYY-MM-DD */
    installmentPayDate: string;
    /**  This is the date on which the company announces that it will be issuing a dividend in the future. YYYY-MM-DD */
    declaredDate: string;
    /**  Unique id representing the dividend record */
    refid: string;
    /**  Date the dividend record was created. YYYY-MM-DD */
    created: string;
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
