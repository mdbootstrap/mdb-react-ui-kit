import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { CollapseProps } from './types';

const MDBCollapse: React.FC<CollapseProps> = ({
  className,
  children,
  show,
  id,
  navbar,
  tag: Tag,
  collapseRef,
  style,
  ...props
}): JSX.Element => {
  const [showCollapse, setShowCollapse] = useState<boolean | undefined>(false);
  const [collapseHeight, setCollapseHeight] = useState<string | number | undefined>(undefined);
  const [transition, setTransition] = useState(false);

  const classes = clsx(
    transition ? 'collapsing' : 'collapse',
    !transition && showCollapse && 'show',
    navbar && 'navbar-collapse',
    className
  );
  const collapseEl = useRef<HTMLElement>(null);
  const refCollapse = collapseRef ?? collapseEl;

  const handleResize = useCallback(() => {
    if (showCollapse) {
      setCollapseHeight(undefined);
    }
  }, [showCollapse]);

  useEffect(() => {
    if (collapseHeight === undefined && showCollapse) {
      setCollapseHeight(refCollapse?.current?.scrollHeight);
    }
  }, [collapseHeight, showCollapse, refCollapse]);

  useEffect(() => {
    setShowCollapse(show);

    if (showCollapse) {
      setTransition(true);
    }

    const timer = setTimeout(() => {
      setTransition(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [show, showCollapse]);

  useEffect(() => {
    if (showCollapse) {
      setCollapseHeight(refCollapse?.current?.scrollHeight);
    } else {
      setCollapseHeight(0);
    }
  }, [showCollapse, refCollapse]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Tag style={{ height: collapseHeight, ...style }} id={id} className={classes} {...props} ref={refCollapse}>
      {children}
    </Tag>
  );
};

MDBCollapse.defaultProps = { tag: 'div' };

export default MDBCollapse;
