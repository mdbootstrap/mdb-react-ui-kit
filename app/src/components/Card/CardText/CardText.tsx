import React from 'react';
import clsx from 'clsx';
import type { CardTextProps } from './types';

const MDBCardText: React.FC<CardTextProps> = React.forwardRef<HTMLAllCollection, CardTextProps>(
  ({ className, children, tag: Tag = 'p', ...props }, ref) => {
    const classes = clsx('card-text', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBCardText;
