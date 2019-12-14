import { ApiRequest } from '../../core';

/**
 * Used to retrieve current month usage for your account.
 *
 * @param type Optional. Used to specify which quota to return. Ex: `messages`, `rules`, `rule-records`, `alerts`, `alert-records`
 */
export const Usage = (type: string = ''): Promise<any> => {
    return ApiRequest(`account/usage/${type}`);
};
