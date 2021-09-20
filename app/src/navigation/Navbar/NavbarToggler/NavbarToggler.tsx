import React from 'react';
import clsx from 'clsx';
import type { NavbarTogglerProps } from './types';

const MDBNavbarToggler: React.FC<NavbarTogglerProps> = React.forwardRef<HTMLAllCollection, NavbarTogglerProps>(
  ({ children, className, tag: Tag, ...props }, ref) => {
    const classes = clsx('navbar-toggler', className);

    return (
      <Tag {...props} className={classes} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarToggler.defaultProps = {
  tag: 'button',
};

export default MDBNavbarToggler;
