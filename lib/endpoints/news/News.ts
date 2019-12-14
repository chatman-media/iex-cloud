import { ApiRequest } from '../../core/ApiRequest';

/**
 * Provides intraday news from over 3,000 global news sources including major publications, regional media, and social.. This endpoint returns up to the last 50 articles. Use the historical news endpoint to fetch news as far back as January 2019
 * @param symbol
 * @param last Number between 1 and 50. Default is 10. (i.e. .../news/last/1)
 */
export const news = (symbol: string, last: number = 10): Promise<readonly News[]> => {
    return ApiRequest(`stock/${symbol}/news/last/${last}`);
};

export interface News {
    /**  Millisecond epoch of time of article */
    readonly datetime: Date;
    readonly headline: string;
    /**  Source of the news article. Make sure to always attribute the source. */
    readonly source: string;
    /**  URL to IEX Cloud for associated news image. Note: You will need to append your token before calling. */
    readonly url: string;
    readonly summary: string;
    /**  Comma-delimited list of tickers associated with this news article. Not all tickers are available on the API. Make sure to check against available ref-data */
    readonly related: string;
    /**  URL to IEX Cloud for associated news image. Note: You will need to append your token before calling. */
    readonly image: string;
    /**  Language of the source article */
    readonly lang: string;
    /**  Whether the news source has a paywall */
    readonly hasPaywall: boolean;
}
