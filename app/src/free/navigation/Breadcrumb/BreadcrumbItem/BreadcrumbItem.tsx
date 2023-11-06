import React from 'react';
import clsx from 'clsx';
import type { BreadcrumbItemProp } from './types';

const MDBBreadcrumbItem: React.FC<BreadcrumbItemProp> = React.forwardRef<HTMLLIElement, BreadcrumbItemProp>(
  ({ className, active, current = 'page', children, ...props }, ref) => {
    const classes = clsx('breadcrumb-item', active && 'active', className);

    return (
      <li className={classes} ref={ref} aria-current={active && current} {...props}>
        {children}
      </li>
    );
  }
);

MDBBreadcrumbItem.displayName = 'MDBBreadcrumbItem';
export default MDBBreadcrumbItem;
