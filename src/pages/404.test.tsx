import React from 'react';
import { render } from '@testing-library/react';

import NotFound from './404';

it('displays the correct message', () => {
  const { getByRole } = render(<NotFound />);
  expect(getByRole('heading')).toHaveTextContent('404');
});
