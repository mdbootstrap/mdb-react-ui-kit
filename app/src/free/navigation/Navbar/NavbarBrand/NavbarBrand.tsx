import React from 'react';
import clsx from 'clsx';
import type { NavbarBrandProps } from './types';

const MDBNavbarBrand: React.FC<NavbarBrandProps> = React.forwardRef<HTMLAllCollection, NavbarBrandProps>(
  ({ className, children, tag: Tag = 'a', ...props }, ref) => {
    const classes = clsx('navbar-brand', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarBrand.displayName = 'MDBNavbarBrand';
export default MDBNavbarBrand;
