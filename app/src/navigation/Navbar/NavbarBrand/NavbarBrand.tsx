import React from 'react';
import clsx from 'clsx';
import type { NavbarBrandProps } from './types';

const MDBNavbarBrand: React.FC<NavbarBrandProps> = React.forwardRef<HTMLAllCollection, NavbarBrandProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('navbar-brand', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBNavbarBrand.defaultProps = {
  tag: 'a',
};

export default MDBNavbarBrand;
