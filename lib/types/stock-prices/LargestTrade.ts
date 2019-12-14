export interface LargestTrade {
    /** refers to the price of the trade. */
    price: number;
    /** refers to the number of shares of the trade. */
    size: number;
    /** refers to the time of the trade. */
    time: number;
    /** formatted time string as HH:MM:SS */
    timeLabel: string;
    /** refers to the venue where the trade occurred. None refers to a TRF (off exchange) trade. */
    venue: string;
    /** formatted venue name where the trade occurred. */
    venueName: string;
}
