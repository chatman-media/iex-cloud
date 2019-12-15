import { ApiRequest } from '../../core/ApiRequest';

/**
 * [Message Budget](https://iexcloud.io/docs/api/#message-budget)
 *
 * Used to set an upper limit, “message budget”, on pay as you go messages where you want to make sure not to go above a certain amount. Set the total messages you wish to consume for the month, and once that limit is reached, all API calls will stop until the limit is removed or increased.
 */
export const messageBudget = (totalMessages: number): Promise<any> => {
    return ApiRequest(`account/messagebudget`, {
        data: { totalMessages },
        method: 'POST',
        useSecret: true,
    });
};
