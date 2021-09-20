import React from 'react';
import clsx from 'clsx';
import type { BreadcrumbItemProp } from './types';

const MDBBreadcrumbItem: React.FC<BreadcrumbItemProp> = React.forwardRef<HTMLAllCollection, BreadcrumbItemProp>(
  ({ className, active, tag: Tag, current, children, ...props }, ref) => {
    const classes = clsx('breadcrumb-item', active && 'active', className);

    return (
      <Tag className={classes} ref={ref} aria-current={active && current} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBBreadcrumbItem.defaultProps = {
  tag: 'li',
  current: 'page',
};

export default MDBBreadcrumbItem;
