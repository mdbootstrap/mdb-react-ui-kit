import clsx from 'clsx';
import React from 'react';
import type { PaginationItemProps } from './types';

const MDBPaginationItem: React.FC<PaginationItemProps> = React.forwardRef<HTMLAllCollection, PaginationItemProps>(
  ({ children, tag: Tag, className, active, disabled, ...props }, ref) => {
    const classes = clsx('page-item', active && 'active', disabled && 'disabled', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBPaginationItem.defaultProps = {
  tag: 'li',
};

export default MDBPaginationItem;
