import * as React from 'react';

declare const MDBDropdown: React.FunctionComponent<{
  className?: string;
  group?: boolean;
  isOpen?: boolean;
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
    | 'left-end'
    | undefined;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  options?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
  animation?: boolean;
}>;

export default MDBDropdown;
