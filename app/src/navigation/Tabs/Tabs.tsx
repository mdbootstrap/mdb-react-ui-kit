import clsx from 'clsx';
import React from 'react';
import type { TabsProps } from './types';

const MDBTabs: React.FC<TabsProps> = React.forwardRef<HTMLUListElement, TabsProps>(
  ({ className, fill, pills, justify, children, ...props }, ref) => {
    const classes = clsx(
      'nav',
      pills ? 'nav-pills' : 'nav-tabs',
      fill && 'nav-fill',
      justify && 'nav-justified',
      className
    );

    return (
      <ul className={classes} ref={ref} {...props}>
        {children}
      </ul>
    );
  }
);

export default MDBTabs;
