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

  test('modulus of two numbers correctly', () => {
    const result = operate(36, 4, '%');
    expect(result).toBe('0');
  });

  test('modulo of a number by zero', () => {
    const result = operate(10, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('divide a number by zero', () => {
    const result = operate(20, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});
