import clsx from 'clsx';
import React from 'react';
import type { TabsLinkProps } from './types';

const MDBTabsLink: React.FC<TabsLinkProps> = React.forwardRef<HTMLAnchorElement, TabsLinkProps>(
  ({ className, color, active, children, ...props }, ref) => {
    const classes = clsx('nav-link', active && 'active', color && `bg-${color}`, className);

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

export default MDBTabsLink;
