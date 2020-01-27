import { ApiRequest } from '../../core';

/**
 * [Income Statement](https://iexcloud.io/docs/api/#income-statement)
 *
 * Pulls income statement data. Available quarterly or annually with the default being the last available quarter.
 * Only included with paid subscription plans
 *
 * @param symbol
 */
export const incomeStatement = (
  symbol: string,
  params?: IncomeStatementParams,
): Promise<IncomeStatementResponse> => {
  return ApiRequest(`stock/${symbol}/income`, { params });
};

export interface IncomeStatementParams {
  /** Allows you to specify annual or quarterly income statement. Defaults to `quarter`. Values should be `annual` or `quarter` */
  readonly period?: string;
  /** Specify the number of quarters or years to return. One quarter is returned by default. You can specify up to 12 quarters with quarter, or up to 4 years with annual. */
  readonly last?: number;
}

export interface IncomeStatementResponse {
  /** refers to the dividend ex-date */
  readonly symbol: string;
  readonly income: ReadonlyArray<Partial<IncomeStatement>>;
}

export interface IncomeStatement {
  /** The last day of the relevant fiscal period. */
  readonly reportDate: string;
  /** Refers to the sum of both operating and non-operating revenues . Investopedia */
  readonly totalRevenue: number;
  /** Represents the cost of goods sold for the period including depletion and amortization. Investopedia */
  readonly costOfRevenue: number;
  /** Represents the difference between sales or revenues and cost of goods sold and depreciation. Investopedia */
  readonly grossProfit: number;
  /** Represents all direct and indirect costs related to the creation and development of new processes, techniques, applications and products with commercial possibilities. Excludes customer or government sponsored research, purchase of mineral rights (for oil, gas, coal, drilling and mining companies), engineering expense, and contributions by government, customers, partnerships or other corporations to the company’s research and development expense */
  readonly researchAndDevelopment: number;
  /** Represents expenses not directly attributable to the production process but relating to selling, general and administrative functions. Excludes research and development. */
  readonly sellingGeneralAndAdmin: number;
  /** Calculated as cost of revenue minus selling, general & administrative expense. Investopedia */
  readonly operatingExpense: number;
  /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. */
  readonly operatingIncome: number;
  /** Calculated as income before tax minus operating income. */
  readonly otherIncomeExpenseNet: number;
  /** Represents operating income for the period calculated as (net sales or revenue) - (cost of goods sold) - (selling, general & administrative expenses) - (other operating expenses). This will only return for industrial companies. Investopedia */
  readonly ebit: number;
  /** Represents interest expense, net of interest capitalized for the period calculated as (interest expense on debt) - (interest capitalized) Investopedia */
  readonly interestIncome: number;
  /** Represents all income/loss before any federal, state or local taxes. Extraordinary items reported net of taxes are excluded. */
  readonly pretaxIncome: number;
  /** Represents all income taxes levied on the income of a company by federal, state and foreign governments. Excludes domestic international sales corporation taxes, ad valorem taxes, excise taxes, windfall profit taxes, taxes other than income, and general and services taxes. */
  readonly incomeTax: number;
  /** Represents the portion of earnings/losses of a subsidiary pertaining to common stock not owned by the controlling company or other members of the consolidated group. */
  readonly minorityInterest: number;
  /** Represents income before extraordinary items and preferred and common dividends, but after operating and non-operating income and expenses, minority interest and equity in earnings. Investopedia */
  readonly netIncome: number;
  /** Represents net income available to common basic EPS before extraordinaries for the period calculated as (net income after preferred dividends) - (discontinued operations) */
  readonly netIncomeBasic: number;
}
