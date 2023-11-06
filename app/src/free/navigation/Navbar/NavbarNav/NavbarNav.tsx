import React from 'react';
import clsx from 'clsx';
import type { NavbarNavProps } from './types';

const MDBNavbarNav: React.FC<NavbarNavProps> = React.forwardRef(
  ({ children, className, right, fullWidth = true, left, tag: Tag = 'ul', ...props }, ref) => {
    const classes = clsx('navbar-nav', fullWidth && 'w-100', right && 'ms-auto', left && 'me-auto', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarNav.displayName = 'MDBNavbarNav';
export default MDBNavbarNav;
