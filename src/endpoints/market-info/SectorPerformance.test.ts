import { sectorPerformance } from './index';

describe('#sectorPerformance', () => {
  test('call', async () => {
    const result = await sectorPerformance();
    console.log(result);

    expect(result?.length).toBeGreaterThan(0);
  });
});
