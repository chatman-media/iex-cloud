import { ApiRequest } from '../../core';

/**
 * [U.S. Exchanges](https://iexcloud.io/docs/api/#u-s-exchanges)
 * Returns an array of U.S. exchanges.
 */
export const uSExchanges = (): Promise<readonly USExchange[]> => {
  return ApiRequest(`ref-data/market/us/exchanges`);
};

export interface USExchange {
  /** Short name of the exchange. */
  readonly name: string;
  /** Full name of the exchange. */
  readonly longName: string;
  /** Market identifier code for the exchange. */
  readonly mic: string;
  /** ID used to identify the exchange on the Consolidated Tape. */
  readonly tapeId: string;
  /** FINRA OATS exchange participant ID. */
  readonly oatsId: string;
  /** ID used to map exchange across individual markets. Useful when mapping ISIN */
  readonly refId: string;
  /** Type of securities traded by the exchange */
  readonly type: string;
}
