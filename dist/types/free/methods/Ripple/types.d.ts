import React from 'react';
interface RippleProps extends React.AllHTMLAttributes<HTMLElement> {
    rippleUnbound?: boolean;
    rippleColor?: string;
    rippleRadius?: number;
    rippleDuration?: number;
    rippleCentered?: boolean;
    ref?: React.ForwardedRef<any>;
    rippleTag?: React.ComponentProps<any>;
}
export type { RippleProps };
