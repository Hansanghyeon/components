import { styled } from '@hansanghyeon/design-system.stitches';
import { animated } from 'react-spring';

export const Wrap = styled('div', {
  color: '$text0',
  position: 'relative',
  zIndex: '0',
  transition: 'z-index 0.45s',
  willChange: 'z-index',
  '&:hover': {
    zIndex: '200',
  },
});

export const Thumbnail = styled('div', {
  position: 'absolute',
  w: '80px',
  h: '100%',
  zIndex: '100',
  transition: 'all 0.45s ease-in-out',
  willChange:
    'width, background-color, margin-right, background-size, height, transform',
  borderRadius: '6px',
  overflow: 'hidden',
  img: {
    position: 'absolute',
    w: '100%',
    h: '100%',
    objectFit: 'cover',
  },
});

export const MainInner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  jc: 'space-between',
  w: '100%',
  pt: '0.5rem',
  pb: '0.5rem',
  backgroundColor: '$bg0',
  position: 'relative',
  zIndex: '200',
  borderRadius: '6px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  willChange: 'padding-left, z-index, transform, margin-left, box-shadow',
  variants: {
    isThumbnail: {
      true: {
        ml: 'calc(80px - 1rem)',
      },
    },
  },
});

export const MainOverlay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  w: '100%',
  h: '100%',
  bc: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  zIndex: 900,
  p: '1rem',
});

export const Body = styled('div', {
  p: '0.5rem 1rem',
});

export const Content = styled('div', {
  lineClamp: '3',
  color: '$text0',
  h: '4rem',
  fontSize: '0.875rem',
  transition: 'max-width 0.45s',
});

export const Date = styled('div', {
  color: '$text0',
  opacity: '0.5',
  fontSize: '0.5rem',
  p: '0.25rem 0',
});

export const Category = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  '> *': {
    bc: '#f6f8ff',
    borderRadius: '6px',
    p: '0.25rem 8px',
    gap: '8px',
  },
});

export const Title = styled('div', {
  mb: '8px',
  fontWeight: '600',
  wordBreak: 'keep-all',
  fs: '16px',
  a: {
    textDecoration: 'none',
    color: '$text1',
  },
});

export const Footer = styled('div', {
  display: 'flex',
  p: '0.5rem 1rem',
  jc: 'space-between',
  ai: 'flex-end',
  fs: '0.75rem',
});

export const FooterMore = styled('div', {
  display: 'grid',
  gridAutoColumns: 'main-content',
  gridAutoFlow: 'column',
  ai: 'center',
  gap: '8px',
});

export const FooterMoreBtn = styled('button', {
  color: '#02ff49',
});

export const Main = styled('div', {
  h: '100%',
  borderRadius: '6px',
  // box-shadow: 0 22px 24px -28px rgba(var(--RGB-gd4), 0.2);
  boxShadow: '0 22px 24px -28px rgba(37, 40, 54, 0.2)',
  transition: 'box-shadow 0.45s ease-in-out',
  willChange: 'box-shadow, transform',
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  variants: {
    isThumbnail: {
      true: {
        '&:hover': {
          boxShadow: 'none',
          [`${Thumbnail}`]: {
            width: '120px',
            bc: 'transparent',
            ml: '0',
            zIndex: '200',
            boxShadow: '2px 0 22px -8px rgba(0, 0, 0, 0.4)',
          },
          [`${MainInner}`]: {
            zIndex: 100,
            transform: 'scale(0.96)',
            boxShadow: '0 22px 24px -28px rgba(0, 0, 0, 0.2)',
            ml: 'calc(80px + 2rem)',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
          },
        },
      },
    },
  },
  compoundVariants: [],
});

export const AnimatedMainOverLay = styled(animated.div, {
  display: 'flex',
  ai: 'flex-end',
  position: 'absolute',
  top: 0,
  left: 0,
  w: '100%',
  h: '100%',
  bc: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  zIndex: 100,
  p: '1rem',
  boxSizing: 'border-box',
});
