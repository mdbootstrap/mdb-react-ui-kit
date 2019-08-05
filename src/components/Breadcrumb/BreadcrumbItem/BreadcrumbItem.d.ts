import * as React from 'react';

declare const MDBBreadcrumbItem: React.FunctionComponent<{
  active?: boolean;
  appendIcon?: boolean;
  bold?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: string;
  iconBrand?: boolean;
  iconClassName?: string;
  iconLight?: boolean;
  iconRegular?: boolean;
  iconSize?:  "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  [rest: string]: any;
}>

export default MDBBreadcrumbItem;