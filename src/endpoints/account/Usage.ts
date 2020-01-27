import { ApiRequest } from '../../core';

/**
 * Used to retrieve current month usage for your account.
 *
 * @param type Used to specify which quota to return.
 */
export const usage = (type?: UsageType): Promise<any> => {
  return ApiRequest(`account/usage/${type || ''}`, { useSecret: true });
};

export type UsageType = 'messages' | 'rules' | 'rule-records' | 'alerts' | 'alert-records' | string;
