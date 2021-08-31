import * as React from 'react';

declare const MDBCollapse: React.FunctionComponent<{
  className?: string;
  navbar?: boolean;
  show?: boolean | string;
  center?: boolean;
  style?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBCollapse;
