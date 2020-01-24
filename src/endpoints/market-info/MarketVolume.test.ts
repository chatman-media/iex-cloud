import { marketVolume } from './index';

describe('#marketVolume', () => {
    test('call', async () => {
        const result = await marketVolume();
        console.log(result);

        expect(result?.length).toBeGreaterThan(0);
    });
});
