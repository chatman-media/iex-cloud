import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Market Volume (U.S.)](https://iexcloud.io/docs/api/#market-volume-u-s)
 * This endpoint returns real time traded volume on U.S. markets.
 */
export const marketVolume = (): Promise<readonly MarketVolume[]> => {
  return ApiRequest(`stock/market/volume`);
};

export interface MarketVolume {
  /** refers to the Market Identifier Code (MIC). */
  readonly mic: string;
  /** refers to the tape id of the venue. */
  readonly tapeId: string;
  /** refers to name of the venue defined by IEX. */
  readonly venueName: string;
  /** refers to the amount of traded shares reported by the venue. */
  readonly volume: number;
  /** refers to the amount of Tape A traded shares reported by the venue. */
  readonly tapeA: number;
  /** refers to the amount of Tape B traded shares reported by the venue. */
  readonly tapeB: number;
  /** refers to the amount of Tape C traded shares reported by the venue. */
  readonly tapeC: number;
  /** refers to the venue’s percentage of shares traded in the market. */
  readonly marketPercent: number;
  /** refers to the last update time of the data in milliseconds since midnight Jan 1, 1970. */
  readonly lastUpdated: number;
}
