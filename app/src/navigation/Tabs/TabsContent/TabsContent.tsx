import clsx from 'clsx';
import React from 'react';
import type { TabsContentProps } from './types';

const MDBTabsContent: React.FC<TabsContentProps> = React.forwardRef<HTMLAllCollection, TabsContentProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('tab-content', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTabsContent.defaultProps = { tag: 'div' };

export default MDBTabsContent;
