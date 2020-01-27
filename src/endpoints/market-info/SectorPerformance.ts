import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Sector Performance](https://iexcloud.io/docs/api/#sector-performance)
 *
 * This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF.
 * Only included with paid subscription plans
 */
export const sectorPerformance = (): Promise<readonly SectorPerformance[]> => {
  return ApiRequest(`stock/market/sector-performance`);
};

export interface SectorPerformance {
  /** The type of performance data return. Should always be sector */
  readonly type: string;
  /** The name of the sector */
  readonly name: string;
  /** Change percent of the sector for the trading day. */
  readonly performance: number;
  /** Last updated time of the performance metric represented as millisecond epoch. */
  readonly lastUpdated: number;
}
