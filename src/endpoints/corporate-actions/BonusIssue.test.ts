import { bonusIssue } from './index';

describe('#bonusIssue', () => {
  test('call', async () => {
    const result = await bonusIssue('AAPL');
    expect(result).not.toEqual(null);
  });
});
