'use client';

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import type { TabsPaneProps } from './types';

const MDBTabsPane: React.FC<TabsPaneProps> = React.forwardRef<HTMLAllCollection, TabsPaneProps>(
  ({ className, tag: Tag = 'div', open, children, ...props }, ref) => {
    const [isReadyToHide, setIsReadyToHide] = useState(false);

    const classes = clsx('tab-pane', 'fade', isReadyToHide && 'show', open && 'active', className);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;

      if (open) {
        timer = setTimeout(() => {
          setIsReadyToHide(true);
        }, 100);
      } else {
        setIsReadyToHide(false);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [open]);

    return (
      <Tag className={classes} role='tabpanel' ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTabsPane.displayName = 'MDBTabsPane';
export default MDBTabsPane;
