import React from 'react';
import clsx from 'clsx';
import type { CardTitleProps } from './types';

const MDBCardTitle: React.FC<CardTitleProps> = React.forwardRef<HTMLAllCollection, CardTitleProps>(
  ({ className, children, tag: Tag = 'h5', ...props }, ref) => {
    const classes = clsx('card-title', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardTitle.displayName = 'MDBCardTitle';
export default MDBCardTitle;
