import { ApiRequest } from '../../core';

/**
 * Used to retrieve current system status.
 */
export const status = (): Promise<Status> => {
    return ApiRequest(`status`);
};

export interface Status {
    readonly status: string;
    readonly version: string;
    readonly time: number;
}
