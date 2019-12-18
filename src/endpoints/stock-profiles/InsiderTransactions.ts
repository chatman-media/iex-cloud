import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Insider Transactions](https://iexcloud.io/docs/api/#insider-transactions)
 * Returns insider transactions.
 *
 * Only included with paid subscription plans
 * Insider transactions for the last 12 months on a rolling basis
 */
export const insiderTransactions = (symbol: string): Promise<readonly InsiderTransactions[]> => {
    return ApiRequest(`stock/${symbol}/insider-transactions`);
};

export interface InsiderTransactions {
    /** Effective date of the transaction. */
    readonly effectiveDate: number;
    /** Full name of the individual. This field concatenates the individuals First Name, Middle Name, Last Name and Suffix. */
    readonly fullName: string;
    /** Insiders job title per the sourced filing */
    readonly reportedTitle: string;
    /** As-reported (unadjusted) unit price at which shares were acquired or disposed, represented in USD. */
    readonly tranPrice: number;
    /** As-reported (unadjusted) number of shares acquired or disposedValue of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions. */
    readonly tranShares: number;
    /** Value of the transaction, calculated as Tran_Shares * Tran_Price, represented in USD. This value is not adjusted for corporate actions. */
    readonly tranValue: number;
    /** (D)irect or (I)ndirect */
    readonly directIndirect: string;
    /** [Transaction Codes](Transaction Codes) */
    readonly tranCode: string;
}
