export interface OHLC {
    open: {
        price: number;
        time: number;
    };
    close: {
        price: number;
        time: number;
    };
    high: number;
    low: number;
}
