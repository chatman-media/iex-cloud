import { dividendsBasic } from './index';

describe('#dividendsBasic', () => {
  test('call', async () => {
    const result = await dividendsBasic('AAPL');
    expect(result).not.toEqual(null);
  });
});
