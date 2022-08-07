import React from 'react';
import { render } from '@testing-library/react';
import { BasicDitto } from './ditto.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDitto />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
