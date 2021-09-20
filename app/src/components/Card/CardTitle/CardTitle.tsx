import React from 'react';
import clsx from 'clsx';
import type { CardTitleProps } from './types';

const MDBCardTitle: React.FC<CardTitleProps> = React.forwardRef<HTMLAllCollection, CardTitleProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('card-title', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardTitle.defaultProps = { tag: 'h5' };

export default MDBCardTitle;
