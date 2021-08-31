import clsx from 'clsx';
import React from 'react';
import type { ScrollspyNavListProps } from './types';

const MDBScrollspyNavList: React.FC<ScrollspyNavListProps> = React.forwardRef<HTMLAllCollection, ScrollspyNavListProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('nav', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBScrollspyNavList.defaultProps = { tag: 'ul' };

export default MDBScrollspyNavList;
