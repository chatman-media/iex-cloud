import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Analyst Recommendations](https://iexcloud.io/docs/api/#analyst-recommendations)
 * Pulls data from the last four months.
 */
export const analystRecommendations = (
  symbol: string,
): Promise<ReadonlyArray<Partial<AnalystRecommendation>>> => {
  return ApiRequest(`stock/${symbol}/recommendation-trends`);
};

export interface AnalystRecommendation {
  /** Date that represents the last date the consensus value was effective. A NULL value indicates the consensus value is considered current. Represented as millisecond epoch time */
  readonly consensusEndDate: number;
  /** Date that represents the earliest date the consensus value was effective Represented as millisecond epoch time */
  readonly consensusStartDate: number;
  /** Date through which corporate actions have been applied Represented as millisecond epoch time */
  readonly corporateActionsAppliedDate: number;
  /** Number of recommendations that fall into the Buy category */
  readonly ratingBuy: number;
  /** Number of recommendations that fall into the Overweight category */
  readonly ratingOverweight: number;
  /** Number of recommendations that fall into the Hold category */
  readonly ratingHold: number;
  /** Number of recommendations that fall into the Underweight category */
  readonly ratingUnderweight: number;
  /** Number of recommendations that fall into the Sell category */
  readonly ratingSell: number;
  /** Number of brokers where no recommendation is available */
  readonly ratingNone: number;
  /**
   * Numeric value based on a standardized scale representing the consensus of broker recommendations.
   * Recommendations are divided into five categories: Buy, Overweight, Hold, Underweight, and Sell. Each is rated between 1 and 3 as shown in the table below.
   */
  readonly ratingScaleMark: RecommendationRating;
}

/**
 * Recommendation Ratings
 *   RATING   CATEGORY        DESCRIPTION
 *   1        Buy             Also known as ‘strong buy’, is a recommendation to purchase a specific security.
 *   1.5      Overweight      Also known as ‘outperform’ or ‘moderate buy’, overweight means a stock is expected to do slightly better than the overall market return.
 *   2        Hold            A security is expected to perform at the same pace as comparable companies or in-line with the market.
 *   2.5      Underweight     Also known as ‘underperform’ or ‘moderate sell’, underweight means a stock is expected to do slightly worse than the overall market return.
 *   3        Sell            Also known as ‘strong sell’, is a recommendation to sell a security or to liquidate an asset.
 */
export type RecommendationRating = 1 | 1.5 | 2 | 2.5 | 3;
