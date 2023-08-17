import { render, screen } from '@testing-library/react';
import Calculator from '../calculator';

test('Testing Calculator component', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
