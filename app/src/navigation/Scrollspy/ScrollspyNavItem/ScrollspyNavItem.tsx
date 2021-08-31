import clsx from 'clsx';
import React from 'react';
import type { ScrollspyNavItemProps } from './types';

const MDBScrollspyNavItem: React.FC<ScrollspyNavItemProps> = React.forwardRef<HTMLAllCollection, ScrollspyNavItemProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('nav-item', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBScrollspyNavItem.defaultProps = { tag: 'li' };

export default MDBScrollspyNavItem;
