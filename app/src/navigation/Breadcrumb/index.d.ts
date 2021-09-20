import * as React from 'react';

declare const MDBBreadcrumb: React.FunctionComponent<{
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  tag?: React.ReactElement;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'body'
    | 'muted'
    | 'white'
    | 'black-50'
    | 'white-50';
  uppercase?: boolean;
  [rest: string]: any;
}>;

export default MDBBreadcrumb;
