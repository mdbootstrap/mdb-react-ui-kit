import * as React from 'react';

declare const MDBNavbarItem: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  text?: boolean;
  tag?: React.ElementType;
  [rest: string]: any;
}>;

export default MDBNavbarItem;
