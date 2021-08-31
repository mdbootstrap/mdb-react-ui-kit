import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import type { TabsPaneProps } from './types';

const MDBTabsPane: React.FC<TabsPaneProps> = React.forwardRef<HTMLAllCollection, TabsPaneProps>(
  ({ className, tag: Tag, show, children, ...props }, ref) => {
    const [isReadyToHide, setIsReadyToHide] = useState(false);

    const classes = clsx('tab-pane', 'fade', isReadyToHide && 'show', show && 'active', className);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;

      if (show) {
        timer = setTimeout(() => {
          setIsReadyToHide(true);
        }, 100);
      } else {
        setIsReadyToHide(false);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [show]);

    return (
      <Tag className={classes} role='tabpanel' ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTabsPane.defaultProps = { tag: 'div' };

export default MDBTabsPane;
