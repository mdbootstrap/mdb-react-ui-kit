import clsx from 'clsx';
import React from 'react';
import type { PaginationItemProps } from './types';

const MDBPaginationItem: React.FC<PaginationItemProps> = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ children, className, active, disabled, ...props }, ref) => {
    const classes = clsx('page-item', active && 'active', disabled && 'disabled', className);

    return (
      <li className={classes} {...props} ref={ref}>
        {children}
      </li>
    );
  }
);

export default MDBPaginationItem;
