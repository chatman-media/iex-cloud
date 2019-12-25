import { sectors } from './index';

describe('#sectors', () => {
    test('call', async () => {
        const result = await sectors();
        expect(result?.length).toBeGreaterThan(0);
    });
});
