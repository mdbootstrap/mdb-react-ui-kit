import * as React from 'react';

declare const MDBRipple: React.FunctionComponent<{
  className?: string;
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  // rippleTag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBRipple;
