'use client';

import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { CollapseProps } from './types';
import useHeight from './hooks/useHeight';

const MDBCollapse: React.FC<CollapseProps> = ({
  className,
  children,
  open = false,
  id,
  navbar,
  tag: Tag = 'div',
  collapseRef,
  style,
  onOpen,
  onClose,
  ...props
}): JSX.Element => {
  const [showCollapse, setShowCollapse] = useState<boolean | undefined>(false);
  const [collapseHeight, setCollapseHeight] = useState<string | undefined>(undefined);
  const [transition, setTransition] = useState(false);

  const classes = clsx(
    transition ? 'collapsing' : 'collapse',
    !transition && showCollapse && 'show',
    navbar && 'navbar-collapse',
    className
  );
  const collapseEl = useRef<HTMLElement>(null);
  const refCollapse = collapseRef ?? collapseEl;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (showCollapse) {
      setCollapseHeight(undefined);
    }
  }, [showCollapse]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useHeight({ showCollapse, setCollapseHeight, refCollapse, contentRef });

  useEffect(() => {
    if (showCollapse !== open) {
      open ? onOpen?.() : onClose?.();
      setShowCollapse(open);
    }

    if (showCollapse) {
      setTransition(true);
    }

    const timer = setTimeout(() => {
      setTransition(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [open, showCollapse, onOpen, onClose]);

  return (
    <Tag style={{ height: collapseHeight, ...style }} id={id} className={classes} {...props} ref={refCollapse}>
      <div ref={contentRef} className='collapse-content'>
        {children}
      </div>
    </Tag>
  );
};

export default MDBCollapse;
