import clsx from 'clsx';
import React from 'react';
import type { TabsItemProps } from './types';

const MDBTabsItem: React.FC<TabsItemProps> = React.forwardRef<HTMLLIElement, TabsItemProps>(
  ({ className, children, style, tag: Tag = 'li', ...props }, ref) => {
    const classes = clsx('nav-item', className);

    return (
      <Tag className={classes} style={{ cursor: 'pointer', ...style }} role='presentation' ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTabsItem.displayName = 'MDBTabsItem';
export default MDBTabsItem;
