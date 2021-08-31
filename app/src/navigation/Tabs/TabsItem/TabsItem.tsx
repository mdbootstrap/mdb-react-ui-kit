import clsx from 'clsx';
import React from 'react';
import type { TabsItemProps } from './types';

const MDBTabsItem: React.FC<TabsItemProps> = React.forwardRef<HTMLLIElement, TabsItemProps>(
  ({ className, children, style, ...props }, ref) => {
    const classes = clsx('nav-item', className);

    return (
      <li className={classes} style={{ cursor: 'pointer', ...style }} role='presentation' ref={ref} {...props}>
        {children}
      </li>
    );
  }
);

export default MDBTabsItem;
