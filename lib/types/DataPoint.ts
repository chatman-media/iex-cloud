export interface DataPoint {
    /**  Data key used to call a specific data point */
    key: string;
    /**  Data weight to call the individual data point in number of messages. */
    weight: number;
    /**  Description of the data point */
    description: string;
    /**  ISO 8601 formatted date time the data point was last updated. */
    lastUpdated: string;
}
