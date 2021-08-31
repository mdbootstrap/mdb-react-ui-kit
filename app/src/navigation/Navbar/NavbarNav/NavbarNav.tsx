import React from 'react';
import clsx from 'clsx';
import type { NavbarNavProps } from './types';

const MDBNavbarNav: React.FC<NavbarNavProps> = React.forwardRef(
  ({ children, className, right, left, tag: Tag, ...props }, ref) => {
    const classes = clsx(
      'navbar-nav',
      right ? 'me-auto' : left ? 'ms-auto' : 'justify-content-around w-100',
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarNav.defaultProps = {
  tag: 'ul',
};

export default MDBNavbarNav;
