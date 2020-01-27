import { ApiRequest } from '../../core';

/**
 * [International Exchanges](https://iexcloud.io/docs/api/#)
 */
export const internationalExchanges = (): Promise<readonly InternationalExchange[]> => {
  return ApiRequest(`ref-data/exchanges`);
};

export interface InternationalExchange {
  /** Exchange abbreviation */
  readonly exchange: string;
  /** 2 letter case insensitive string of country codes using ISO 3166-1 alpha-2 */
  readonly region: string;
  /** Full name of the exchange. */
  readonly description: string;
  /** Market Identifier Code using ISO 10383 */
  readonly mic: string;
  /** Exchange Suffix to be added for symbols on that exchange */
  readonly exchangeSuffix: string;
}
