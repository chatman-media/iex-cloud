import { ApiRequest } from '../../core';

/**
 * [Pay as you go](https://iexcloud.io/docs/api/#pay-as-you-go)
 * Used to toggle Pay-as-you-go on your account.
 *
 * @param allow Pass true to enable Pay-as-you-go, or false to disable.
 */
export const payAsYouGo = (allow: boolean): Promise<any> => {
    return ApiRequest(`account/payasyougo`, { method: 'POST', useSecret: true, data: { allow } });
};

export interface PayAsYouGoParams {
    /** Your SK API token. */
    readonly token: boolean;
    /** Pass true to enable Pay-as-you-go, or false to disable. */
    readonly allow: boolean;
}
