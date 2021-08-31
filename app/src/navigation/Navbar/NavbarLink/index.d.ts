import * as React from 'react';

declare const MDBNavbarLink: React.FunctionComponent<{
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  tag?: React.ElementType;
  [rest: string]: any;
  link?: boolean;
}>;

export default MDBNavbarLink;
