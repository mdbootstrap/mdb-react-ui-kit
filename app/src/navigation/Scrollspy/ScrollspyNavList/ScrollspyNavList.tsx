import clsx from 'clsx';
import React from 'react';
import type { ScrollspyNavListProps } from './types';

const MDBScrollspyNavList: React.FC<ScrollspyNavListProps> = React.forwardRef<HTMLAllCollection, ScrollspyNavListProps>(
  ({ className, collapsible, active, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('nav', className);

    return (
      <Tag
        className={classes}
        ref={ref}
        {...props}
        style={{
          overflow: collapsible && 'hidden',
          height: collapsible && (active ? '46px' : '0px'),
          transition: collapsible && 'height .5s ease',
          flexWrap: collapsible && 'nowrap',
        }}
      >
        {children}
      </Tag>
    );
  }
);

MDBScrollspyNavList.defaultProps = { tag: 'ul' };

export default MDBScrollspyNavList;
