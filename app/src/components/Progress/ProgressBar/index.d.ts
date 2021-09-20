import * as React from 'react';

declare const MDBProgressBar: React.FunctionComponent<{
  animated?: boolean;
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  className?: string;
  striped?: boolean;
  style?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  width?: string | number;
  [rest: string]: any;
}>;

export default MDBProgressBar;
