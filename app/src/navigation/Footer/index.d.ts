import * as React from 'react';

declare const MDBFooter: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
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
  tag?: 'footer' | 'div';
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  [rest: string]: any;
}>;

export default MDBFooter;
