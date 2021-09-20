import * as React from 'react';

declare const MDBPopover: React.FunctionComponent<{
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  tag?: React.ComponentProps<any>;
  className?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?:
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  poperStyle?: Record<string, unknown>;
  popperTag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBPopover;
