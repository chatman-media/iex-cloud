import { ApiRequest } from '../../core';

/**
 * [Cash Flow](https://iexcloud.io/docs/api/#cash-flow)
 *
 * Pulls cash flow data. Available quarterly or annually, with the default being the last available quarter.
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param params
 */
export const cashflow = (
    symbol: string,
    params?: Partial<CashFlowParams>,
): Promise<CashFlowResponse> => {
    return ApiRequest(`stock/${symbol}/cash-flow`, { params });
};

export interface CashFlowResponse {
    readonly symbol: string;
    readonly cashflow: readonly CashFlow[];
}

export interface CashFlowParams {
    /** Allows you to specify annual or quarterly balance sheet. Defaults to `quarter`. Values should be `annual` or `quarter` */
    readonly period?: string;
    /** Specify the number of quarters or years to return. One quarter is returned by default. You can specify up to 12 quarters with `quarter`, or up to 4 years with `annual`. */
    readonly last?: number;
}

export interface CashFlow {
    /** The last day of the relevant fiscal period. */
    readonly reportDate: string;
    /** Represents income before extraordinary items and preferred and common dividends, but after operating and non-operating income and expenses, minority interest and equity in earnings. */
    readonly netIncome: number;
    /** Depreciation represents the process of allocating the cost of a depreciable asset to the accounting periods covered during its expected useful life to a business. Depletion refers to cost allocation for natural resources such as oil and mineral deposits. Amortization relates to cost allocation for intangible assets such as patents and leasehold improvements, trademarks, book plates, tools & film costs. This item includes dry-hole expense, abandonments and oil and gas property valuation provision for extractive companies. This item excludes amortization of discounts or premiums on financial instruments owned or outstanding and depreciation on discontinued operations. */
    readonly depreciation: number;
    readonly changesInReceivables: number;
    /** Represents the change in the amount of inventories from one year to the next as reported in the cash flow statement. */
    readonly changesInInventories: number;
    /** Represents the change in cash and short term investments from one year to the next. This item is available only when the Statement of Changes in Financial Position is based on cash and short term investments. */
    readonly cashChange: number;
    /** Returns net cash from operating activities for the period calculated as the sum of funds from operations, extraordinary items, and funds from other operating activities. */
    readonly cashFlow: number;
    /** Returns total capital expenditures for the period calculated as the sum of capital expenditures additions to fixed assets, and additions to other assets. */
    readonly capitalExpenditures: number;
    /** Returns purchase/sale of investments for the period calculated as the sum of the negative of increase in investments, and decrease in investments */
    readonly investments: number;
    /** Represents any other funds employed in investing activities and not included in capital expenditures, net assets from acquisitions, increase in investments, decrease in investments or additions to property. */
    readonly investingActivityOther: number;
    /** Returns net cash from investing activities for the period calculated as (Cash Flow from Investing Activity) - Net. If this is not available, then it is calculated as (Other Uses/(Sources) Investing) + (Disposal of fixed assets) + (decrease in investments) - (net assets from acquisitions) - (capital expenditures other assets) - (increase in investments) - (capital expenditures additions to fixed assets) */
    readonly totalInvestingCashFlows: number;
    /** Represents the total common and preferred dividends paid to shareholders of the company. Excludes dividends paid to minority shareholders. */
    readonly dividendsPaid: number;
    /** Returns net issuance/reduction of debt for the period calculated as (increase/decrease in short term borrowings) + (long term borrowings - reduction in long term debt) */
    readonly netBorrowings: number;
    /** Returns other financing activities for the period. */
    readonly otherFinancingCashFlows: number;
    /** Returns net cash from financing activities for the period. */
    readonly cashFlowFinancing: number;
    /** Represents the effect of translating from one currency to another on the cash flow of the company. */
    readonly exchangeRateEffect: number;
}
