import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Volume by Venue](https://iexcloud.io/docs/api/#volume-by-venue)
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 * @param symbol
 */
export const volumeByVenue = (symbol: string): Promise<VolumeByVenue> => {
  return ApiRequest(`stock/${symbol}/volume-by-venue`);
};

export interface VolumeByVenue {
  /** refers to the current day, 15 minute delayed volume */
  readonly volume: number;
  /** refers to the Market Identifier Code (MIC) */
  readonly venue: string;
  /** refers to a readable version of the venue defined by IEX */
  readonly venueName: string;
  /** refers to the date the data was last updated in the format YYYY-MM-DD */
  readonly date: string;
  /** refers to the 15 minute delayed percent of total stock volume traded by the venue */
  readonly marketPercent: number;
}
