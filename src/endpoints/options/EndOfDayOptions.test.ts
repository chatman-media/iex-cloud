import { endOfDayOptions, OptionSide } from './index';

describe('#endOfDayOptions', () => {
  test('call for contract dates', async () => {
    const result = await endOfDayOptions({ symbol: 'AAPL' });
    expect(result).not.toEqual(null);
  });

  test('call for options at specific expiration date', async () => {
    const result = await endOfDayOptions({ expiration: '202011', symbol: 'AAPL' });
    expect(result).not.toEqual(null);
  });

  test('call for options at specific expiration date and specific option side', async () => {
    const result = await endOfDayOptions({
      expiration: '202011',
      optionSide: OptionSide.call,
      symbol: 'AAPL',
    });
    expect(result).not.toEqual(null);
  });
});
