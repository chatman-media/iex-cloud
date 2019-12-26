import { peerGroups } from './index';

describe('#peerGroups', () => {
    test('call', async () => {
        const result = await peerGroups('AAPL');
        expect(result).not.toEqual(null);
    });
});
