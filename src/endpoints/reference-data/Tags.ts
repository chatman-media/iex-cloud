import { ApiRequest } from '../../core';

/**
 * [Tags](https://iexcloud.io/docs/api/#tags)
 * Returns an array of tags. Tags can be found on each company.
 */
export const tags = (): Promise<ReadonlyArray<{ readonly name: string }>> => {
  return ApiRequest(`ref-data/tags`);
};
