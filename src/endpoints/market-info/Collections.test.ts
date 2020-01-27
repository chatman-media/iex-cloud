import { collections } from './index';

describe('#collections', () => {
  test('call', async () => {
    const result = await collections('sector', 'Technology');
    expect(result?.length).toBeGreaterThan(0);
  });
});
