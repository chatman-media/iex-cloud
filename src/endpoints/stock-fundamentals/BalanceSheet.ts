import { ApiRequest } from '../../core';

/**
 * [Balance Sheet](https://iexcloud.io/docs/api/#balance-sheet)
 *
 * Pulls balance sheet data. Available quarterly or annually with the default being the last available quarter.
 *
 * Only included with paid subscription plans.
 * Financial information is limited for some financial firms.
 *
 * @param symbol
 * @param params
 */
export const balanceSheet = (
    symbol: string,
    params?: Partial<BalanceSheetParams>,
): Promise<BalanceSheetResponse> => {
    return ApiRequest(`stock/${symbol}/balance-sheet`, { params });
};

export interface BalanceSheetResponse {
    readonly symbol: string;
    readonly balancesheet: readonly BalanceSheet[];
}

export interface BalanceSheetParams {
    /** Allows you to specify annual or quarterly balance sheet. Defaults to quarter. Values should be annual or quarter */
    readonly period?: string;
    /** Specify the number of quarters or years to return. One quarter is returned by default. You can specify up to 12 quarters with quarter, or up to 4 years with annual. */
    readonly last?: number;
}

export interface BalanceSheet {
    /**
     * The last day of the relevant fiscal period.
     */
    readonly reportDate: string;
    /**
     * Represents current cash excluding short-term investments. Current cash excludes commercial paper issued by unconsolidated subsidiaries to the parent company, amount due from sale of debentures, checks written by the company but not yet deposited and charged to the company’s bank account, and promissory notes.
     */
    readonly currentCash: number;
    /**
     * Total short-term investments.
     */
    readonly shortTermInvestments: number;
    /**
     * Represents net claims against customers for merchandise sold or services performed in the ordinary course of business. Investopedia
     */
    readonly receivables: number;
    /**
     * Represents tangible items or merchandise net of advances and obsolescence acquired for either resale directly or included in the production of finished goods manufactured for sale in the normal course of operation. Excludes tools that are listed in current assets, supplies and prepaid expenses for companies that lump these items together, advances from customers, and contract billings. For non-U.S. companies, if negative inventories arise from advances from customers greater than costs on long-term contracts, it is reclassified to current liabilities.
     */
    readonly inventory: number;
    /**
     * Represents other current assets for the period. Investopedia
     */
    readonly otherCurrentAssets: number;
    /**
     * Represents cash and other assets that are reasonably expected to be realized in cash, sold or consumed within one year or one operating cycle. Generally, the sum of cash and equivalents, receivables, inventories, prepaid expenses, and other current assets. For non-U.S. companies, long term receivables are excluded from current assets even though included in net receivables. Investopedia
     */
    readonly currentAssets: number;
    /**
     * Represents total investments and advances for the period. Calculated as long term investment minus affiliate companies and other long term investments. Investopedia
     */
    readonly longTermInvestments: number;
    /**
     * Represents gross property, plant, and equipment less accumulated reserves for depreciation, depletion, and ammortization. Investopedia
     */
    readonly propertyPlantEquipment: number;
    /**
     * Represents the excess cost over the fair market value of the net assets purchased. Is excluded from other intangible assets. Investopedia
     */
    readonly goodwill: number;
    /**
     * Represents other assets not having a physical existence. The value of these assets lie in their expected future return. This excludes goodwill. Investopedia
     */
    readonly intangibleAssets: number;
    /**
     * Returns other assets for the period calculated as other assets including intangibles minus intangible other assets.
     */
    readonly otherAssets: number;
    /**
     * Represents the sum of total current assets, long-term receivables, investment in unconsolidated subsidiaries, other investments, net property plant and equipment, deferred tax assets, and other assets.
     */
    readonly totalAssets: number;
    /**
     * Represents the claims of trade creditors for unpaid goods and services that are due within the normal operating cycle of the company. Investopedia
     */
    readonly accountsPayable: number;
    /**
     * Represents the amount of long term debt due within the next twelve months. Excludes notes payable arising from short term borrowings, current maturities of participation and entertainment obligation, contracts payable for broadcast rights, current portion of advances and production payments Bank overdrafts, advances from subsidiaries/associated companies, and current portion of preferred stock of a subsidiary. Investopedia
     */
    readonly currentLongTermDebt: number;
    /**
     * Represents other current liabilities and calculated as the sum of misc current liabilities, dividends payable, and accrued payroll.
     */
    readonly otherCurrentLiabilities: number;
    /**
     * Represents debt or other obligations that the company expects to satisfy within one year.
     */
    readonly totalCurrentLiabilities: number;
    /**
     * Represents all interest-bearing financial obligations, excluding amounts due within one year, net of premium or discount. Excludes current portion of long-term debt, pensions, deferred taxes, and minority interest. Investopedia
     */
    readonly longTermDebt: number;
    /**
     * Returns other liabilities for the period calculated as the sum of other liabilities excluding deferred revenue, deferred income, and deferred tax liability in untaxed reserves.
     */
    readonly otherLiabilities: number;
    /**
     * Represents the portion of earnings/losses of a subsidiary pertaining to common stock not owned by the controlling company or other members of the consolidated group. Minority Interest is subtracted from consolidated net income to arrive at the company’s net income.
     */
    readonly minorityInterest: number;
    /**
     * Represents all short and long term obligations expected to be satisfied by the company. Excludes minority interest preferred stock equity, preferred stock equity, common stock equity, and non-equity reserves.
     */
    readonly totalLiabilities: number;
    /**
     * Number of shares outstanding as the difference between issued shares and treasury shares. Investopedia
     */
    readonly commonStock: number;
    /**
     * Represents the accumulated after tax earnings of the company which have not been distributed as dividends to shareholders or allocated to a reserve amount. Excess involuntary liquidation value over stated value of preferred stock is deducted if there is an insufficient amount in the capital surplus account. Investopedia
     */
    readonly retainedEarnings: number;
    /**
     * Represents the acquisition cost of shares held by the company. For non-U.S. companies treasury stock may be carried at par value. This stock is not entitled to dividends, has no voting rights, and does not share in the profits in the event of liquidation. Investopedia
     */
    readonly treasuryStock: number;
    /**
     * Represents the amount received in excess of par value from the sale of common stock. Along with common stock it is the equity capital received from parties outside the company.
     */
    readonly capitalSurplus: number;
    /**
     * Total shareholders’ equity for the period calculated as the sum of total common equity and preferred stock carrying value.
     */
    readonly shareholderEquity: number;
    /**
     * Calculated as shareholder equity less goodwill and less
     */
    readonly netTangibleAssets: number;
}
