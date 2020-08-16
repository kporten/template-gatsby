import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from './404';

it('displays the correct message', () => {
  render(<NotFound />);
  expect(screen.getByRole('heading')).toHaveTextContent('404');
});
