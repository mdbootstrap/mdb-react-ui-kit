import React from 'react';
import clsx from 'clsx';
import type { NavbarTogglerProps } from './types';

const MDBNavbarToggler: React.FC<NavbarTogglerProps> = React.forwardRef<HTMLAllCollection, NavbarTogglerProps>(
  ({ children, className, tag: Tag = 'button', ...props }, ref) => {
    const classes = clsx('navbar-toggler', className);

    return (
      <Tag {...props} className={classes} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBNavbarToggler;
