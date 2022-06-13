import clsx from 'clsx';
import React from 'react';
import type { PaginationLinkProps } from './types';

const MDBPaginationLink: React.FC<PaginationLinkProps> = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ children, className, tag: Tag, ...props }, ref) => {
    const classes = clsx('page-link', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBPaginationLink.defaultProps = {
  tag: 'a',
};

export default MDBPaginationLink;
