import { ApiRequest } from '../../core/ApiRequest';

/**
 * [ohlc](https://iexcloud.io/docs/api/#ohlc)
 * Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices.
 *
 * Only available to paid subscribers
 */
export const ohlc = (symbol: string): Promise<OHLC> => {
    return ApiRequest(`stock/${symbol}/ohlc`);
};

export interface OHLC {
    readonly open: {
        readonly price: number;
        readonly time: number;
    };
    readonly close: {
        readonly price: number;
        readonly time: number;
    };
    readonly high: number;
    readonly low: number;
}
