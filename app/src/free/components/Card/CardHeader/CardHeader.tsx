import React from 'react';
import clsx from 'clsx';
import type { CardHeaderProps } from './types';

const MDBCardHeader: React.FC<CardHeaderProps> = React.forwardRef<HTMLAllCollection, CardHeaderProps>(
  ({ className, children, border, background, tag: Tag = 'div', ...props }, ref) => {
    const classes = clsx('card-header', border && `border-${border}`, background && `bg-${background}`, className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardHeader.displayName = 'MDBCardHeader';
export default MDBCardHeader;
