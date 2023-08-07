import React from 'react';
import clsx from 'clsx';
import type { NavbarLinkProps } from './types';

const MDBNavbarLink: React.FC<NavbarLinkProps> = React.forwardRef<HTMLAllCollection, NavbarLinkProps>(
  ({ children, className = '', disabled = false, active = false, tag: Tag = 'a', ...props }, ref) => {
    const classes = clsx('nav-link', disabled ? 'disabled' : active ? 'active' : '', className);

    return (
      <Tag data-test='nav-link' className={classes} style={{ cursor: 'pointer' }} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

export default MDBNavbarLink;
