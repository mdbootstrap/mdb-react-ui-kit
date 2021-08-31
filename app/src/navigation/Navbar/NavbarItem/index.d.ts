import * as React from 'react';

declare const MDBNavItem: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  active?: string;
  text?: string;
  tag?: React.ElementType;
  [rest: string]: any;
}>;

export default MDBNavItem;
