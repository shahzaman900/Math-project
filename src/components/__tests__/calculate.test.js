import calculate from '../../logic/calculate';

describe('calculate', () => {
  test('clears the calculator when AC button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('handles decimal point correctly when decimal button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, '.');

    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

});