import { ApiRequest } from '../../core/ApiRequest';

/**
 * [CEO Compensation](https://iexcloud.io/docs/api/#ceo-compensation)
 *
 * Provides CEO compensation for a company by symbol
 *
 * @remark Only available to paid plans.
 *
 * @param symbol Symbol name.
 */
export const ceoCompensation = (symbol: string): Promise<CeoCompensation> => {
  return ApiRequest(`stock/${symbol}/ceo-compensation`);
};

export interface CeoCompensation {
  /** Symbol of the company */
  readonly symbol: string;
  /** CEO name */
  readonly name: string;
  /** Name of the company */
  readonly companyName: string;
  /** Location of the company */
  readonly location: string;
  /** Salary of the company CEO */
  readonly salary: number;
  /** Bonus amount of the company CEO */
  readonly bonus: number;
  /** Stock Awards of the company CEO */
  readonly stockAwards: number;
  /** Option Awards of the company CEO */
  readonly optionAwards: number;
  /** Non-Equity Incentives of the company CEO */
  readonly nonEquityIncentives: number;
  /** Pension And Deferred of the company CEO */
  readonly pensionAndDeferred: number;
  /** Other compensation of the company CEO */
  readonly otherComp: number;
  /** Total compensation of the company CEO */
  readonly total: number;
  /** Fiscal year for the compensation data */
  readonly year: string;
}
