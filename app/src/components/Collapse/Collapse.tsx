import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import type { CollapseProps } from './types';

const MDBCollapse: React.FC<CollapseProps> = ({
  className,
  children,
  show,
  id,
  navbar,
  tag: Tag,
  collapseRef,
  ...props
}): JSX.Element => {
  const classes = clsx('collapse', navbar && 'navbar-collapse', className);
  const collapseEl = useRef<HTMLElement>(null);

  const isFirstRender = useRef(show);

  const refCollapse = collapseRef ?? collapseEl;

  useEffect(() => {
    if (isFirstRender.current && show) {
      isFirstRender.current = false;
      refCollapse?.current?.classList.add('show');

      return;
    }
  }, [refCollapse, show]);

  useEffect(() => {
    const collapseElement = refCollapse.current;

    if (!collapseElement || isFirstRender.current) {
      return;
    }

    const toggleCollapse = () => {
      collapseElement.classList.toggle('collapsing');
      collapseElement.classList.toggle('collapse');
    };

    if (show) {
      toggleCollapse();
      collapseElement.style.height = `${collapseElement.scrollHeight}px`;

      setTimeout(() => {
        toggleCollapse();

        collapseElement.classList.toggle('show');
        collapseElement.style.height = '';
      }, 350);
    } else {
      collapseElement.style.height = `${collapseElement.scrollHeight}px`;

      setTimeout(() => {
        toggleCollapse();

        collapseElement.style.height = '';
        collapseElement.classList.toggle('show');
      });

      setTimeout(() => {
        toggleCollapse();
      }, 350);
    }
  }, [show, refCollapse]);

  return (
    <Tag id={id} className={classes} {...props} ref={refCollapse}>
      {children}
    </Tag>
  );
};

MDBCollapse.defaultProps = { tag: 'div' };

export default MDBCollapse;
