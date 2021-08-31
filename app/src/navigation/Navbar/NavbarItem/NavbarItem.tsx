import React from 'react';
import clsx from 'clsx';
import type { NavbarItemProps } from './types';

const MDBNavItem: React.FC<NavbarItemProps> = React.forwardRef<HTMLAllCollection, NavbarItemProps>(
  ({ children, className, active, text, tag: Tag, ...props }, ref) => {
    const classes = clsx('nav-item', active && 'active', text && 'navbar-text', className);

    return (
      <Tag {...props} className={classes} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBNavItem.defaultProps = {
  tag: 'li',
};

export default MDBNavItem;
