import { render, screen } from '@testing-library/react';
import React from 'react';

import Index from './index';

it('displays the correct message', () => {
  render(<Index />);
  expect(screen.getByRole('heading')).toHaveTextContent('Hello');
});
