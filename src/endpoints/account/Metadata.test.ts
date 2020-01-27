import { metadata } from './index';

describe('#metadata', () => {
  test('call', async () => {
    const result = await metadata();
    expect(result.messageLimit).toBeGreaterThan(0);
  });
});
