import React from 'react';
import clsx from 'clsx';
import type { CardBodyProps } from './types';

const MDBCardBody: React.FC<CardBodyProps> = React.forwardRef<HTMLAllCollection, CardBodyProps>(
  ({ className, children, tag: Tag = 'div', ...props }, ref) => {
    const classes = clsx('card-body', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBCardBody;
