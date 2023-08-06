import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button' 

test('renders button with text', () => {
  render(<Button label="Click Me" />);
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});
