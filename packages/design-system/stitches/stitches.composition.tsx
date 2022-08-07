import React from 'react';

import { styled } from './stitches.config';

const Button = styled('button', {
  p: '$xl',
  backgroundColor: '$primary',
  borderRadius: '8px',
  color: '$white'
})
export const BasicStitches = () => {
  return (
    <Button>hello world!</Button>
  );
}