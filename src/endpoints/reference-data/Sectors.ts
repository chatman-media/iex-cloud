import { ApiRequest } from '../../core';

/**
 * [Sectors](https://iexcloud.io/docs/api/#sectors)
 * Returns an array of sectors.
 */
export const sectors = (): Promise<ReadonlyArray<Sector>> => {
  return ApiRequest(`ref-data/sectors`);
};

interface Sector {
  readonly name: string;
}
