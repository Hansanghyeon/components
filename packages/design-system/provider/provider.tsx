import React, { ReactNode } from 'react';

export type ProviderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
