import React from 'react';
import { render } from '@testing-library/react';

import Index from './index';

it('displays the correct message', () => {
  const { getByRole } = render(<Index />);
  expect(getByRole('heading')).toHaveTextContent('Hello');
});
