import { render, screen } from '@testing-library/react';
import Quote from '../getData';

test('Testing Quote component', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
