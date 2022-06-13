import clsx from 'clsx';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ScrollspyContext } from '../ScrollspyContext';
import type { ScrollspySubListProps } from './types';

const MDBScrollspySubList: React.FC<ScrollspySubListProps> = ({
  collapsible,
  className,
  children,
  style,
  ...props
}) => {
  const [listHeight, setListHeight] = useState('0px');

  const { activeElement } = useContext(ScrollspyContext);

  const classes = clsx('nav flex-column', className);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const isActive = () => collapsible?.some((element) => element.current.id === activeElement?.id);
    const ul = listRef.current;

    if (isActive()) {
      setListHeight(`${ul?.scrollHeight}px`);
    } else {
      setListHeight('0px');
    }
  }, [activeElement, collapsible]);

  const collapsibleStyle: React.CSSProperties = {
    overflow: 'hidden',
    height: listHeight,
    transition: 'height .5s ease',
    flexWrap: 'nowrap',
    ...style,
  };

  return (
    <ul className={classes} ref={listRef} style={collapsible ? collapsibleStyle : style} {...props}>
      {children}
    </ul>
  );
};

MDBScrollspySubList.defaultProps = {};

export default MDBScrollspySubList;
