import { ApiRequest } from '../../core';
import { SearchSecurityType } from '../reference-data';

/**
 * [International Symbols](https://iexcloud.io/docs/api/#international-symbols)
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 */
export const internationalSymbols = ({
  region,
  exchange,
}: Input): Promise<readonly InternationalSymbol[]> => {
  const path = region ? `region/${region}` : exchange ? `exchange/${exchange}` : null;
  return ApiRequest(`ref-data/${path}/symbols`);
};

interface Input {
  /** 2 letter case insensitive string of country codes using ISO 3166-1 alpha-2 */
  readonly region?: string;
  /** Case insensitive string of Exchange using [IEX Supported Exchanges list](https://cloud.iexapis.com/stable/ref-data/exchanges) */
  readonly exchange?: string;
}

export type CommonIssueType = SearchSecurityType;

export interface InternationalSymbol {
  /** refers to the symbol */
  readonly symbol: string;
  /** refers to Exchange using IEX Supported Exchanges list */
  readonly exchange: string;
  /** refers to the name of the company or security. */
  readonly name: string;
  /** refers to the date the symbol reference data was generated. */
  readonly date: string;
  /** will be true if the symbol is trading. */
  readonly isEnabled: boolean;
  /** refers to the common issue type */
  readonly type: CommonIssueType;
  /** refers to the region of the world the symbol is in */
  readonly region: string;
  /** refers to the currency the symbol is traded in */
  readonly currency: string;
  /** unique ID applied by IEX to track securities through symbol changes. */
  readonly iexId: string;
}
