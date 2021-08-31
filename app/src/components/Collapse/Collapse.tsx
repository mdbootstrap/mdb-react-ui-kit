import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import type { CollapseProps } from './types';

const MDBCollapse: React.FC<CollapseProps> = ({
  className,
  center,
  children,
  show,
  navbar,
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
    center && 'justify-content-center',
    className
  );
  const refCollapse = useRef<HTMLDivElement>(null);

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
  }, [collapseHeight, show, showCollapse]);

  useEffect(() => {
    if (showCollapse) {
      setCollapseHeight(refCollapse?.current?.scrollHeight);
    } else {
      setCollapseHeight(0);
    }
  }, [showCollapse]);

  return (
    <div style={{ height: collapseHeight, ...style }} className={classes} {...props} ref={refCollapse}>
      {children}
    </div>
  );
};

export default MDBCollapse;
