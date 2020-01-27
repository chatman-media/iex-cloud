import { ApiRequest } from '../../core/ApiRequest';

/**
 * Data Points
 *
 * Data points are available per symbol and return individual plain text values. Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed. We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
 * @param symbol
 */
export const dataPoints = (symbol: string, key?: string): Promise<readonly DataPoint[]> => {
  return ApiRequest(`data-points/${symbol}/${key || ''}`);
};

export interface DataPoint {
  /** Data key used to call a specific data point */
  readonly key: string;
  /** Data weight to call the individual data point in number of messages. */
  readonly weight: number;
  /** Description of the data point */
  readonly description: string;
  /** ISO 8601 formatted date time the data point was last updated. */
  readonly lastUpdated: string;
}
