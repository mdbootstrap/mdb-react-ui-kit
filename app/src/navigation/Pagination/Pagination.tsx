import clsx from 'clsx';
import React from 'react';
import type { PaginationProps } from './types';

const MDBPagination: React.FC<PaginationProps> = React.forwardRef<HTMLUListElement, PaginationProps>(
  ({ children, size, circle, center, end, start, className, ...props }, ref) => {
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
      <ul className={classes} {...props} ref={ref}>
        {children}
      </ul>
    );
  }
);

export default MDBPagination;
