import clsx from 'clsx';
import React, { useEffect } from 'react';
import type { TabsLinkProps } from './types';

const MDBTabsLink: React.FC<TabsLinkProps> = React.forwardRef<HTMLAnchorElement, TabsLinkProps>(
  ({ className, color, active, onShow, onHide, children, ...props }, ref) => {
    const classes = clsx('nav-link', active && 'active', color && `bg-${color}`, className);

    useEffect(() => {
      if (active) {
        onShow?.();
      } else {
        onHide?.();
      }
      // eslint-disable-next-line
    }, [active]);

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

export default MDBTabsLink;
