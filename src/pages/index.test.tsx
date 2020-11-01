import { render, screen } from '@testing-library/react';
import React from 'react';

import Index from './index';

it('should display the correct message', () => {
  render(<Index />);
  expect(screen.getByRole('heading')).toHaveTextContent('Hello');
});
