import React from 'react';
import clsx from 'clsx';
import type { NavbarLinkProps } from './types';

const MDBNavbarLink: React.FC<NavbarLinkProps> = React.forwardRef<HTMLAllCollection, NavbarLinkProps>(
  ({ children, className, disabled, active, tag: Tag, ...props }, ref) => {
    const classes = clsx('nav-link', disabled ? 'disabled' : active ? 'active' : '', className);

    return (
      <Tag data-test='nav-link' className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarLink.defaultProps = {
  tag: 'a',
  active: false,
  className: '',
  disabled: false,
};

export default MDBNavbarLink;
