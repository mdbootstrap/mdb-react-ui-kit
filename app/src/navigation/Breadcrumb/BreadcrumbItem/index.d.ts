import * as React from 'react';

declare const MDBBreadcrumbItem: React.FunctionComponent<{
  active?: boolean;
  className?: string;
  tag?: React.ElementType;
  current?: 'page' | 'step' | 'location';
  [rest: string]: any;
}>;

export default MDBBreadcrumbItem;
