import clsx from 'clsx';
import React from 'react';
import type { FooterProps } from './types';

const MDBFooter: React.FC<FooterProps> = React.forwardRef<HTMLAllCollection, FooterProps>(
  ({ children, bgColor, color, tag: Tag, className, ...props }, ref) => {
    const classes = clsx(bgColor && `bg-${bgColor}`, color && `text-${color}`, className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBFooter.defaultProps = {
  tag: 'footer',
};

export default MDBFooter;
