import operate from '../../logic/operate';

describe('operate', () => {
  test('adds two numbers correctly', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  test('subtracts two numbers correctly', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });

  test('multiplies two numbers correctly', () => {
    const result = operate(4, 7, 'x');
    expect(result).toBe('28');
  });

  test('divides two numbers correctly', () => {
    const result = operate(10, 2, '÷');
    expect(result).toBe('5');
  });
});