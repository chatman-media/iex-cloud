import { search } from './index';

describe('#search', () => {
    test('call', async () => {
        const result = await search('AA');
        expect(result?.length).toBeGreaterThan(0);
    });
});
