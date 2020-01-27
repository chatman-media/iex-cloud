import { messageBudget } from './index';

describe('#messageBudget', () => {
  test('#messageBudget', async () => {
    const result = await messageBudget(20000);
    expect(result).toEqual(null);
  });
});
