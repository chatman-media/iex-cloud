import { marketVolume } from './index';

describe('#marketVolume', () => {
    test('call', async () => {
        const result = await marketVolume();
        expect(result?.length).toBeGreaterThan(0);
    });
});
