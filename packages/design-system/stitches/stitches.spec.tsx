import React from 'react';
import { render } from '@testing-library/react';
import { BasicStitches } from './stitches.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStitches />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
