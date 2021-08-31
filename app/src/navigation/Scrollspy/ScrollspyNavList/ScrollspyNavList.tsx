import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import type { ScrollspyNavListProps } from './types';

const MDBScrollspyNavList: React.FC<ScrollspyNavListProps> = ({
  className,
  collapsible,
  active,
  tag: Tag,
  children,
  ...props
}) => {
  const classes = clsx('nav', className);

  const [listHeight, setListHeight] = useState(0);

  const listReference = useRef<HTMLElement>(null);

  useEffect(() => {
    if (listReference.current) {
      setListHeight(listReference.current?.scrollHeight);
    }
  }, [listReference]);

  return (
    <Tag
      className={classes}
      ref={listReference}
      {...props}
      style={{
        overflow: collapsible && 'hidden',
        height: collapsible && (active ? `${listHeight}px` : '0px'),
        transition: collapsible && 'height .5s ease',
        flexWrap: collapsible && 'nowrap',
      }}
    >
      {children}
    </Tag>
  );
};

MDBScrollspyNavList.defaultProps = { tag: 'ul' };

export default MDBScrollspyNavList;
