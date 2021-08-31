import * as React from 'react';

declare const MDBBadge: React.FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBBadge;
