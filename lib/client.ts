import {
    IEXCloudConfig,
    Quote,
    OHLC,
    Company,
    Logo,
    News,
    Range,
    HistoricalPrice,
    HistoricalPriceParams,
    IntradayPriceParams,
    IntradayPrice,
    LargestTrade,
    Stat,
    PriceTarget,
    Distribution,
    Dividend,
    ReturnOfCapital,
    RightsIssue,
    RightsToPurchase,
    SecurityReclassification,
    BonusIssue,
    SecuritySwap,
    Spinoff,
    Split,
    TimeSeries,
    TimeSeriesById,
    DataPoint,
    Metadata,
} from './types';
import fetch from 'node-fetch';
import { isString } from 'util';
import { paramsToQuery } from './utils';

export class IEXCloudClient {
    private request: (
        endpoint: string,
        secret?: boolean,
        method?: string,
        data?: any,
    ) => Promise<any>;

    public constructor(config: IEXCloudConfig = { sandbox: false, version: 'beta' }) {
        const apiToken = process.env.IEX_API_TOKEN;
        const secretToken = process.env.IEX_API_SECRET_TOKEN;
        if (!apiToken) throw new Error('IEX_API_TOKEN not found');

        const { sandbox, version } = config;
        const baseUrl = `https://${sandbox ? 'sandbox' : 'cloud'}.iexapis.com/${version}/`;

        this.request = async (
            endpoint: string,
            secret: boolean = false,
            method: string = 'GET',
            data: any = {},
        ): Promise<any> => {
            let url = `${baseUrl}${endpoint}`;
            console.log(secret, data);

            if (!(method === 'POST' && secret)) {
                url = `${url}${endpoint.includes('?') ? '&' : '?'}token=${
                    !secret ? apiToken : secretToken
                }`;
            }
            let response;
            try {
                console.log(url);
                if (method === 'GET') {
                    response = await fetch(url);
                } else {
                    let body: any = {};
                    if (secret) body.token = secretToken;
                    if (data) body = { ...body, ...data };
                    console.log(body);
                    response = await fetch(url, { method, body });
                }
                const json = await response.json();
                return json;
            } catch (error) {
                console.log(error?.message);
                console.log(response?.statusText);
                return null;
            }
        };
    }

    /**
     * Time Series
     *
     * Time series is the most common type of data available, and consists of a
     *   collection of data points over a period of time. Time series data is
     *   indexed by a single date field, and can be retrieved by any portion of time.
     * To use this endpoint, you’ll first make a free call to get an inventory
     *    of available time series data.
     */
    public timeSeries(): Promise<TimeSeries[]> {
        return this.request(`time-series`);
    }

    /**
     * Time Series by Id
     *
     * @param id ID used to identify a time series dataset.
     * @param key Key used to identify data within a dataset. A common example is a symbol such as AAPL.
     * @param subkey The optional subkey can used to further refine data for a particular key if available.
     */
    public timeSeriesById(id: string, key: string, subkey?: string): Promise<TimeSeriesById> {
        return this.request(`time-series/${id}/${key}/${subkey || ''}`);
    }

    /**
     * Data Points
     *
     * Data points are available per symbol and return individual plain text values. Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed. We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
     * @param symbol
     */
    public dataPoints(symbol: string, key?: string): Promise<DataPoint[]> {
        return this.request(`data-points/${symbol}/${key || ''}`);
    }

    /**
     * [Message Budget](https://iexcloud.io/docs/api/#message-budget)
     *
     * Used to set an upper limit, “message budget”, on pay as you go messages where you want to
     *   make sure not to go above a certain amount. Set the total messages you wish to consume
     *   for the month, and once that limit is reached, all API calls will stop until the limit
     *   is removed or increased.
     */
    public messageBudget(totalMessages: number): Promise<any> {
        return this.request(`account/messagebudget`, true, 'POST', { totalMessages });
    }

    /**
     * [Metadata](https://iexcloud.io/docs/api/#metadata)
     *
     * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
     */
    public metadata(): Promise<Metadata> {
        return this.request(`/account/metadata`, true);
    }

    public price(symbol: string): Promise<number> {
        return this.request(`stock/${symbol}/price`);
    }

    public quote(symbol: string): Promise<Quote> {
        return this.request(`stock/${symbol}/quote`);
    }

    public ohlc(symbol: string): Promise<OHLC> {
        return this.request(`stock/${symbol}/ohlc`);
    }

    public company(symbol: string): Promise<Company> {
        return this.request(`stock/${symbol}/company`);
    }

    public logo(symbol: string): Promise<Logo> {
        return this.request(`stock/${symbol}/logo`);
    }

    public news(symbol: string, last: number = 10): Promise<News[]> {
        return this.request(`stock/${symbol}/news/last/${last}`);
    }

    public historicalPrices(
        symbol: string,
        range?: Range,
        date?: string,
        params?: Partial<HistoricalPriceParams>,
    ): Promise<HistoricalPrice[]> {
        const path = `stock/${symbol}/chart/${[range, date].filter(x => isString(x)).join('/')}`;
        return this.request(path + paramsToQuery(params));
    }

    public intradayPrices(
        symbol: string,
        params?: Partial<IntradayPriceParams>,
    ): Promise<IntradayPrice[]> {
        return this.request(`stock/${symbol}/intraday-prices` + paramsToQuery(params));
    }

    public largestTrades(symbol: string): Promise<LargestTrade[]> {
        return this.request(`stock/${symbol}/largest-trades`);
    }

    public stats(symbol: string, stat?: string): Promise<Stat | string | number | null> {
        return this.request(`stock/${symbol}/stats/${stat || ''}`);
    }

    public priceTarget(symbol: string): Promise<PriceTarget> {
        return this.request(`stock/${symbol}/price-target`);
    }

    /**
     *  Corporate Actions
     */

    /**
     * [Bonus Issue](https://iexcloud.io/docs/api/#bonus-issue)
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public bonusIssue(symbol?: string, refid?: string): Promise<BonusIssue[]> {
        return this.request(`time-series/advanced_bonus/${symbol}/${refid}`);
    }

    /**
     * [Distribution](https://iexcloud.io/docs/api/#distribution)
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public distribution(symbol?: string, refid?: string): Promise<Distribution[]> {
        return this.request(`time-series/advanced_distribution/${symbol}/${refid}`);
    }

    /**
     * [Dividends](https://iexcloud.io/docs/api/#dividends)
     *
     * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
     * You’ll be provided with:
     *   Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
     *   Gross and net amounts
     *   Details of all currencies in which a dividend can be paid
     *   Tax information
     *   The ability to keep up with the growing number of complex dividend distributions
     *
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public dividends(symbol?: string, refid?: string): Promise<Dividend[]> {
        return this.request(`time-series/advanced_dividends/${symbol}/${refid}`);
    }

    /**
     * [Return of Capital](https://iexcloud.io/docs/api/#return-of-capital)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public returnOfCapital(symbol?: string, refid?: string): Promise<ReturnOfCapital[]> {
        return this.request(`time-series/advanced_return_of_capital/${symbol}/${refid}`);
    }

    /**
     * [Rights Issue](https://iexcloud.io/docs/api/#rights-issue)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public rightsIssue(symbol?: string, refid?: string): Promise<RightsIssue[]> {
        return this.request(`time-series/advanced_rights/${symbol}/${refid}`);
    }

    /**
     * [Right to Purchase](https://iexcloud.io/docs/api/#right-to-purchase)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public rightsToPurchase(symbol?: string, refid?: string): Promise<RightsToPurchase[]> {
        return this.request(`time-series/advanced_right_to_purchase/${symbol}/${refid}`);
    }

    /**
     * [Security Reclassification](https://iexcloud.io/docs/api/#security-reclassification)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public securityReclassification(
        symbol?: string,
        refid?: string,
    ): Promise<SecurityReclassification[]> {
        return this.request(`time-series/advanced_security_reclassification/${symbol}/${refid}`);
    }

    /**
     * [SecuritySwap](https://iexcloud.io/docs/api/#security-swap)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public securitySwap(symbol?: string, refid?: string): Promise<SecuritySwap[]> {
        return this.request(`time-series/advanced_security_swap/${symbol}/${refid}`);
    }

    /**
     * [Spinoff](https://iexcloud.io/docs/api/#spinoff)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public spinoff(symbol?: string, refid?: string): Promise<Spinoff[]> {
        return this.request(`time-series/advanced_spinoff/${symbol}/${refid}`);
    }

    /**
     * [Splits](https://iexcloud.io/docs/api/#splits)
     *
     * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
     * @remark Only available to paid plans.
     *
     * @param symbol Optional. Symbol name.
     * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
     */
    public splits(symbol?: string, refid?: string): Promise<Split[]> {
        return this.request(`time-series/advanced_splits/${symbol}/${refid}`);
    }
}
