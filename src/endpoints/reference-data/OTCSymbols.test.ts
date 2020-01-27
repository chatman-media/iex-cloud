import { otcSymbols } from './index';

describe('#otcSymbols', () => {
  test('call', async () => {
    const result = await otcSymbols();
    expect(result?.length).toBeGreaterThan(0);
  });
});
