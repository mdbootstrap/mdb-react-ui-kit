import * as React from 'react';

declare const MDBNavbar: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  tag?: 'nav' | 'div';
  [rest: string]: any;
  light?: boolean;
  dark?: boolean;
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
  expand?: string | boolean;
  bgColor?: 'white' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  fixed?: string;
  sticky?: boolean;
}>;

export default MDBNavbar;
