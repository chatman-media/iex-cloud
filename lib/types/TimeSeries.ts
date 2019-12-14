export type TimeSeriesRange =
    | 'today' // Returns data for today
    | 'yesterday' // Returns data for yesterday
    | 'ytd' // Returns data for the current year
    | 'last-week' // Returns data for Sunday-Saturday last week
    | 'last-month' // Returns data for the last month
    | 'last-quarter' // Returns data for the last quarter
    | 'd' //Use the short hand d to return a number of days. Example: 2d returns 2 days.
    // If calendar=true, data is returned from today forward.
    | 'w' // Use the short hand w to return a number of weeks. Example: 2w returns 2 weeks.
    // If calendar=true, data is returned from today forward.
    | 'm' // Use the short hand m to return a number of months. Example: 2m returns 2 months.
    // If calendar=true, data is returned from today forward.
    | 'q' // Use the short hand q to return a number of quarters. Example: 2q returns 2 quarters.
    // If calendar=true, data is returned from today forward.
    | 'y' // Use the short hand y to return a number of years. Example: 2y returns 2 years.
    // If calendar=true, data is returned from today forward.
    | 'tomorrow' // Calendar data for tomorrow. Requires calendar=true
    | 'this-week' // Calendar data for Sunday-Saturday this week. Requires calendar=true
    | 'this-month' // Calendar data for current month. Requires calendar=true
    | 'this-quarter' // Calendar data for current quarter. Requires calendar=true
    | 'next-week' // Calendar data for Sunday-Saturday next week. Requires calendar=true
    | 'next-month' // Calendar data for next month. Requires calendar=true
    | 'next-quarter' // Calendar data for next quarter. Requires calendar=true
    | string;

export interface TimeSeriesQSParams {
    /**  Returns data for a given range. Supported ranges described below. */
    range: TimeSeriesRange;
    /**  Used in conjunction with range to return data in the future. */
    calendar: boolean;
    /**  Limits the number of results returned. Defaults to 1. */
    limit: number;
    /**
     * Allows you to query time series by any field in the result set. All time series data is stored by ID, then key, then subkey. If you want to query by any other field in the data, you can use subattribute.
     *   For example, news may be stored as /news/{symbol}/{newsId}, and the result data returns the keys id, symbol, date, sector, hasPaywall
     *   By default you can only query by symbol or id. Maybe you want to query all news where the sector is Technology. Your query would be:
     *   /time-series/news?subattribute=sector|Technology
     *   The syntax is subattribute={keyName}|{value}. Both the key name and the value are case sensitive. A pipe symbol is used to represent ‘equal to’.
     */
    subattribute: string;
    /**
     * All time series data is stored by a single date field, and that field is used for any range or date parameters. You may want to query time series data by a different date in the result set. To change the date field used by range queries, pass the case sensitive field name with this parameter.
     *  For example, corporate buy back data may be stored by announce date, but also contains an end date which you’d rather query by. To query by end date you would use dateField=endDate&range=last-week
     */
    dateField: string;
    /**  Returns data on or after the given from date. Format YYYY-MM-DD */
    from: string;
    /**  Returns data on or before the given to date. Format YYYY-MM-DD */
    to: string;
    /**  Returns data on the given date. Format YYYY-MM-DD */
    on: string;
    /**  Returns the latest n number of records in the series */
    last: string;
    /**  Returns the first n number of records in the series */
    first: string;
    /**  The standard filter parameter. Filters return data to the specified comma delimited list of keys (case-sensitive) */
    filter: string;
    /**  The standard format parameter. Returns data as JSON by default. See the data format section for supported types. */
    format: string;
}

export interface TimeSeries {
    /**  The dataset ID */
    id: string;
    /**  source of the data if available */
    source: string;
    /**  The requested dataset key */
    key: string;
    /**  The requested dataset subkey */
    subkey: string;
    /**  The date field of the time series as epoch timestamp */
    date: number;
}

export interface TimeSeriesById {
    /**  Dataset ID */
    id: string;
    /**  Description of the dataset */
    description: string;
    /**  Dataset key */
    key: string;
    /**  Dataset subkey */
    subkey: string;
    /**  Data weight to call the individual data point in number of messages. */
    schema: object;
    /**  Data weight to call the time series in number of messages per array item (row) returned. */
    weight: number;
    /**  ISO 8601 formatted date time the time series dataset was created. */
    created: string;
    /**  ISO 8601 formatted date time the time series dataset was last updated. */
    lastUpdated: string;
}
