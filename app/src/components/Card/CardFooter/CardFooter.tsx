import React from 'react';
import clsx from 'clsx';
import type { CardFooterProps } from './types';

const MDBCardFooter: React.FC<CardFooterProps> = React.forwardRef<HTMLAllCollection, CardFooterProps>(
  ({ className, children, border, background, tag: Tag, ...props }, ref) => {
    const classes = clsx('card-footer', border && `border-${border}`, background && `bg-${background}`, className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardFooter.defaultProps = { tag: 'div' };

export default MDBCardFooter;
