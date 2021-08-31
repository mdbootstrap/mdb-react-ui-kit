import * as React from 'react';

declare const MDBListGroupItem: React.FunctionComponent<{
  className?: string;
  tag?: React.ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  color?: string;
  [rest: string]: any;
}>;

export default MDBListGroupItem;
