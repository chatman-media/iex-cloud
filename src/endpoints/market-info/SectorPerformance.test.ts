import { sectorPerformance } from './index';

describe('#sectorPerformance', () => {
  test('call', async () => {
    const result = await sectorPerformance();
    expect(result?.length).toBeGreaterThan(0);
  });
});
