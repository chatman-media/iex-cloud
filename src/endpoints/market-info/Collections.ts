import { ApiRequest } from '../../core/ApiRequest';
import { Quote } from '../stock-prices';

export type CollectionType = 'sector' | 'tag' | 'list';

/**
 * [Collections](https://iexcloud.io/docs/api/#collections)
 * Returns an array of `quote` objects for a given collection type. Currently supported collection types are `sector`, `tag`, and `list`
 *
 * @param collectionType
 * @param collectionName
 *   Name of the sector, tag, or list to return and is case sensitive.
 *   Supported lists can be found under the [list](https://iexcloud.io/docs/api/#list) section.
 *   Supported sectors can be found in the [sector ref data](https://iexcloud.io/docs/api/#sectors).
 *   Supported tags can be found in the [tag ref data](https://iexcloud.io/docs/api/#tags).
 *   You must URL encode the collection name before sending
 */
export const collections = (
  collectionType: CollectionType,
  collectionName: string,
): Promise<readonly Quote[]> => {
  return ApiRequest(`stock/market/collection/${collectionType}`, { params: { collectionName } });
};
