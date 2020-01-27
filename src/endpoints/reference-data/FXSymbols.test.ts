import { fxSymbols } from './index';

describe('#fxSymbols', () => {
  test('call', async () => {
    const result = await fxSymbols();
    expect(result?.currencies?.length).toBeGreaterThanOrEqual(0);
    expect(result?.pairs?.length).toBeGreaterThanOrEqual(0);
  });
});
