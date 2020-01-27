import { rightsIssue } from './index';

describe('#rightsIssue', () => {
  test('call', async () => {
    const result = await rightsIssue('AAPL');
    expect(result).not.toEqual(null);
  });
});
