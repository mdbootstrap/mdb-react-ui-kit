import clsx from 'clsx';
import React from 'react';
import type { PaginationLinkProps } from './types';

const MDBPaginationLink: React.FC<PaginationLinkProps> = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ children, className, tag: Tag = 'a', ...props }, ref) => {
    const classes = clsx('page-link', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBPaginationLink.displayName = 'MDBPaginationLink';
export default MDBPaginationLink;
