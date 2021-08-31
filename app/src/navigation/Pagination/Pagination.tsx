import clsx from 'clsx';
import React from 'react';
import type { PaginationProps } from './types';

const MDBPagination: React.FC<PaginationProps> = React.forwardRef<HTMLAllCollection, PaginationProps>(
  ({ children, size, circle, tag: Tag, center, end, start, className, ...props }, ref) => {
    const classes = clsx(
      'pagination',
      center && 'justify-content-center',
      circle && 'pagination-circle',
      end && 'justify-content-end',
      size && `pagination-${size}`,
      start && 'justify-content-start',
      className
    );

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBPagination.defaultProps = {
  tag: 'ul',
};

export default MDBPagination;
