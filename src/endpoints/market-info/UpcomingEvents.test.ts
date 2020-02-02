import { upcomingEvents } from './index';

describe('#upcomingEvents', () => {
  test('call for market', async () => {
    const result = await upcomingEvents('earnings');
    expect(result?.length).toBeGreaterThan(0);
  });
  test('call for symbol', async () => {
    const result = await upcomingEvents('earnings', 'aapl');
    expect(result?.length).toBeGreaterThan(0);
  });
});
