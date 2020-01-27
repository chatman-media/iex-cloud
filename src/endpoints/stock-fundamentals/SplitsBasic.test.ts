import { splitsBasic } from './index';

describe('#splitsBasic', () => {
  test('call', async () => {
    const result = await splitsBasic('AAPL');
    expect(result).not.toEqual(null);
  });
});
