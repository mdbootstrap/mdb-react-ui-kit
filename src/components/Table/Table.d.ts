import * as React from 'react';

declare const MDBTable: React.FunctionComponent<{
  autoWidth?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  btn?: boolean;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
  fixed?: boolean;
  theadColor?: string;
  hover?: boolean;
  maxHeight?: string;
  responsive?: boolean;
  responsiveSm?: boolean;
  responsiveMd?: boolean;
  responsiveLg?: boolean;
  responsiveXl?: boolean;
  scrollY?: boolean;
  small?: boolean;
  striped?: boolean;
  wrapperClassName ?:string;
  [rest: string]: any;
}>;

export default MDBTable;
