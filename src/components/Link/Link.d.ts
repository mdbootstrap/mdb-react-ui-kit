import * as React from 'react';

declare const MDBLink: React.FunctionComponent<{
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  to?: string;
  [rest: string]: any;
}>;

export default MDBLink;
