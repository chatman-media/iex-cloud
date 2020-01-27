import { ApiRequest } from '../../core';
import { Quote } from './Quote';

/**
 * [Book](https://iexcloud.io/docs/api/#book)
 */
export const book = (symbol: string): Promise<Book> => {
  return ApiRequest(`stock/${symbol}/book`);
};

export interface Book {
  readonly quote: Quote;
  readonly bids: readonly BidOrAsk[];
  readonly asks: readonly BidOrAsk[];
  readonly trades: readonly Trade[];
  readonly systemEvent: SystemEvent;
}

export interface BidOrAsk {
  readonly price: number;
  readonly size: number;
  readonly timestamp: number;
}

export interface Trade {
  readonly price: number;
  readonly size: number;
  readonly tradeId: number;
  readonly isISO: boolean;
  readonly isOddLot: boolean;
  readonly isOutsideRegularHours: boolean;
  readonly isSinglePriceCross: boolean;
  readonly isTradeThroughExempt: boolean;
  readonly timestamp: number;
}

export interface SystemEvent {
  readonly systemEvent: string;
  readonly timestamp: number;
}
