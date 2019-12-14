import { Quote } from './Quote';

// https://iexcloud.io/docs/api/#book
export interface Book {
    quote: Quote;
    bids: BidOrAsk[];
    asks: BidOrAsk[];
    trades: Trade[];
    systemEvent: SystemEvent;
}

export interface BidOrAsk {
    price: number;
    size: number;
    timestamp: number;
}

export interface Trade {
    price: number;
    size: number;
    tradeId: number;
    isISO: boolean;
    isOddLot: boolean;
    isOutsideRegularHours: boolean;
    isSinglePriceCross: boolean;
    isTradeThroughExempt: boolean;
    timestamp: number;
}

export interface SystemEvent {
    systemEvent: string;
    timestamp: number;
}
