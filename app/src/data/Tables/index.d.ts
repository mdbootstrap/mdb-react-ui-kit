import * as React from 'react';

declare const MDBTable: React.FunctionComponent<{
  className?: string;
  align?: 'top' | 'bottom' | 'middle';
  borderColor?:
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
  bordered?: boolean;
  borderless?: boolean;
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
  hover?: boolean;
  small?: boolean;
  striped?: boolean;
  tag?: React.ElementType;
  [rest: string]: any;
}>;

export default MDBTable;
