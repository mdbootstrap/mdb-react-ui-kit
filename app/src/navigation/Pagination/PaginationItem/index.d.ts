import * as React from 'react';

declare const MDBPaginationItem: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ReactElement;
  [rest: string]: any;
}>;

export default MDBPaginationItem;
