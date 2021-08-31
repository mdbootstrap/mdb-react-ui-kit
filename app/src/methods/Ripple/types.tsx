import React from 'react';

type RippleProps = {
  className?: string;
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  // rippleTag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { RippleProps };
