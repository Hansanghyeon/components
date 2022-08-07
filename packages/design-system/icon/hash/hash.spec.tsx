import React from 'react';
import { render } from '@testing-library/react';
import { BasicHash } from './hash.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHash />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
