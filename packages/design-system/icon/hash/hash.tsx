import React, { HTMLAttributes } from 'react';

export interface HashIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  width?: string;
  height?: string;
};

export function HashIcon({ width = '1em', height = '1em', ...props }: HashIconProps) {
  return (
    <svg viewBox="0 0 497 497" {...{ width, height }} {...props}>
      <path d="m459.5 113.5h-30v75h30c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5z" fill="currentColor" />
      <path d="m459.5 308.5h-30v75h30c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5z" fill="currentColor" />
      <path d="m467 346c0-20.625-16.875-37.5-37.5-37.5h-46v-120h46c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5h-46v-76c0-20.625-16.875-37.5-37.5-37.5s-37.5 16.875-37.5 37.5v76h-120v-76c0-20.625-16.875-37.5-37.5-37.5s-37.5 16.875-37.5 37.5v76h-76c-20.625 0-37.5 16.875-37.5 37.5s16.875 37.5 37.5 37.5h76v120h-76c-20.625 0-37.5 16.875-37.5 37.5s16.875 37.5 37.5 37.5h76v76c0 20.625 16.875 37.5 37.5 37.5s37.5-16.875 37.5-37.5v-76h120v76c0 20.625 16.875 37.5 37.5 37.5s37.5-16.875 37.5-37.5v-76h46c20.625 0 37.5-16.875 37.5-37.5zm-158.5-37.5h-120v-120h120z" fill="currentColor" />
    </svg>
  );
}
