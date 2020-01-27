import { ApiRequest } from '../../core/ApiRequest';
import { KeyStat } from './KeyStats';

/**
 * [AdvancedStats](https://iexcloud.io/docs/api/#advanced-stats)
 *
 * Returns everything in key stats plus additional advanced stats such as EBITDA, ratios, key financial data, and more.
 */
export const advancedStats = (symbol: string): Promise<AdvancedStats> => {
  return ApiRequest(`stock/${symbol}/advanced-stats`);
};

export interface AdvancedStats extends KeyStat {
  /** Cash on hand */
  readonly totalCash: number;
  /** The current debt */
  readonly currentDebt: number;
  /** In accounting, revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers */
  readonly revenue: number;
  /** Gross profit is the profit a company makes after deducting the costs associated with making and selling its products, or the costs associated with providing its services */
  readonly grossProfit: number;
  /** Calculated as the sum of gross income (the difference between sales or revenues and cost of goods sold and depreciation) and cost of goods sold for the period */
  readonly totalRevenue: number;
  /** Earnings before interest, tax, depreciation and amoritzation */
  readonly EBITDA: number;
  /** Amount of revenue over common shares outstanding */
  readonly revenuePerShare: number;
  /** Net Income per employee (NIPE) is a company’s net income divided by the number of employees */
  readonly revenuePerEmployee: number;
  /** The debt-to-equity (D/E) ratio is calculated by dividing a company’s total liabilities by its shareholder equity */
  readonly debtToEquity: number;
  /** A measure of profitability by finding the net profit as a percentage of the revenue */
  readonly profitMargin: number;
  /** Enterprise value (EV) is a measure of a company’s total value, often used as a more comprehensive alternative to equity market capitalization */
  readonly enterpriseValue: number;
  /** The enterprise value-to-revenue multiple (EV/R) is a measure of the value of a stock that compares a company’s enterprise value to its revenue */
  readonly enterpriseValueToRevenue: number;
  /** Price–sales ratio, P/S ratio, or PSR, is a valuation metric for stocks. It is calculated by dividing the company’s market capitalization by the revenue in the most recent year; or, equivalently, divide the per-share stock price by the per-share revenue */
  readonly priceToSales: number;
  /** The price-to-book ratio, or P/B ratio, is a financial ratio used to compare a company’s current market price to its book value */
  readonly priceToBook: number;
  /** Forward price-to-earnings (forward P/E) is a version of the ratio of price-to-earnings (P/E) that uses forecasted earnings for the P/E calculation */
  readonly forwardPERatio: number;
  /** The PEG ratio is calculated easily and represents the ratio of the P/E to the expected future earnings per share (EPS) growth rate of a company */
  readonly pegRatio: number;
  /** Beta is a measure used in fundamental analysis to determine the volatility of an asset or portfolio in relation to the overall market. Levered beta calculated with 1 year historical data and compared to SPY. */
  readonly beta: number;
  /** 52 week high of the symbol’s PE Ratio. */
  readonly peHigh: string;
  /** 52 week low of the symbol’s PE Ratio. */
  readonly peLow: string;
  /** Date of 52 week high */
  readonly week52highDate: string;
  /** Date of 52 week low */
  readonly week52lowDate: string;
  /** The security’s total put volume relative to its total call volume over all available option contract dates. Investopedia */
  readonly putCallRatio: number;
}
