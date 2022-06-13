import clsx from 'clsx';
import React from 'react';
import type { FooterProps } from './types';

const MDBFooter: React.FC<FooterProps> = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ children, bgColor, color, className, ...props }, ref) => {
    const classes = clsx(bgColor && `bg-${bgColor}`, color && `text-${color}`, className);

    return (
      <footer className={classes} {...props} ref={ref}>
        {children}
      </footer>
    );
  }
);

export default MDBFooter;
