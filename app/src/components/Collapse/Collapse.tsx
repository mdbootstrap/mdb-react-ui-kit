import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import type { CollapseProps } from './types';

const MDBCollapse: React.FC<CollapseProps> = ({
  className,
  center,
  children,
  show,
  id,
  navbar,
  tag: Tag,
  style,
  ...props
}): JSX.Element => {
  const [showCollapse, setShowCollapse] = useState<boolean | undefined>(false);
  const [showCollapseString, setShowCollapseString] = useState<string | undefined>('');
  const [statement, setStatement] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState<string | number | undefined>(undefined);
  const [transition, setTransition] = useState(false);

  const classes = clsx(
    transition ? 'collapsing' : 'collapse',
    !transition && (showCollapse || statement) && 'show',
    navbar && 'navbar-collapse',
    center && 'justify-content-center',
    className
  );
  const refCollapse = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof show === 'string') {
      setShowCollapseString(show);
      setStatement(showCollapseString === id);
    } else {
      setShowCollapse(show);
    }

    if (statement || showCollapse) {
      setTransition(true);
    }

    const timer = setTimeout(() => {
      setTransition(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [collapseHeight, show, showCollapse, id, showCollapseString, statement]);

  useEffect(() => {
    if (showCollapse || statement) {
      setCollapseHeight(refCollapse?.current?.scrollHeight);
    } else {
      setCollapseHeight(0);
    }
  }, [showCollapse, statement]);

  return (
    <Tag style={{ height: collapseHeight, ...style }} id={id} className={classes} {...props} ref={refCollapse}>
      {children}
    </Tag>
  );
};

MDBCollapse.defaultProps = { tag: 'div' };

export default MDBCollapse;
