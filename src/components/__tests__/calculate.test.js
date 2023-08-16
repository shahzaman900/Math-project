import calculate from '../../logic/calculate';

describe('calculate', () => {
  const obj = {
    total: 10,
    next: 2,
    operation: '+',
  };
  const total = {
    total: '12',
    next: null,
    operation: '+',
  };

  test('adds two numbers correctly', () => {
    const result = calculate(obj, '+');
    expect(result).toEqual(total);
  });
});
