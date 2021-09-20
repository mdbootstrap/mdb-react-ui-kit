import * as React from 'react';

declare const MDBPagination: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: string;
  tag?: React.ComponentProps<any>;
  circle?: boolean;
  [rest: string]: any;
}>;

export default MDBPagination;
