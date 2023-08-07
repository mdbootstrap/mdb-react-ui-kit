import React from 'react';
import clsx from 'clsx';
import type { CardGroupProps } from './types';

const MDBCardGroup: React.FC<CardGroupProps> = React.forwardRef<HTMLAllCollection, CardGroupProps>(
  ({ className, children, tag: Tag = 'div', ...props }, ref) => {
    const classes = clsx('card-group', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBCardGroup;
