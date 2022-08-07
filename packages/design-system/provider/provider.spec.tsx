import React from 'react';
import { render } from '@testing-library/react';
import { BasicProvider } from './provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProvider />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
