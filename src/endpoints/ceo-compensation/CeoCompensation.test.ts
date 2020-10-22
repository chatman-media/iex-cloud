import { ceoCompensation } from './index';

describe('#ceoCompensation', () => {
  test('call', async () => {
    const result = await ceoCompensation('AAPL');
    expect(result).not.toEqual(null);
  });
});
