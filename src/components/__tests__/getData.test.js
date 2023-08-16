import { render, screen } from '@testing-library/react';
import Quote from '../getData';

test('renders learn react link', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
