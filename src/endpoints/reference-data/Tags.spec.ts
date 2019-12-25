import { tags } from './index';

describe('#tags', () => {
    test('call', async () => {
        const result = await tags();
        expect(result?.length).toBeGreaterThan(0);
    });
});
