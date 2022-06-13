import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollspyContext } from './ScrollspyContext';
import type { ScrollspyProps } from './types';

const MDBScrollspy: React.FC<ScrollspyProps> = ({ container, className, children, offset, ...props }) => {
  const classes = clsx('sticky-top', className);

  const [activeElement, setActiveElement] = useState(null);
  const [targets, setTargets] = useState<Array<React.MutableRefObject<any>>>([]);

  const isWindow = container instanceof Window;

  const handleScroll = useCallback(() => {
    if (!targets.length) return;

    const scrollTop = isWindow ? window.pageYOffset : container?.current?.scrollTop;
    const offsetValue = Number(offset);
    const lastItem = targets[targets.length - 1]?.current;
    const firstItem = targets[0]?.current;

    if (scrollTop + offsetValue < firstItem.offsetTop) {
      setActiveElement(null);
    }

    targets.forEach((target, i) => {
      const nextTarget = targets[i + 1]?.current;
      const currentTarget = target.current;
      const isBetweenElement =
        scrollTop > currentTarget.offsetTop - offsetValue && scrollTop < nextTarget?.offsetTop - offsetValue;

      if (isBetweenElement) {
        setActiveElement(currentTarget);

        return;
      }
    });

    const isLastElement = scrollTop > lastItem.offsetTop - offsetValue;

    if (isLastElement) {
      setActiveElement(lastItem);
    }
  }, [offset, targets, isWindow, container]);

  useEffect(() => {
    const spyElement = isWindow ? container : container?.current;

    handleScroll();

    spyElement?.addEventListener('scroll', handleScroll);

    return () => {
      spyElement?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, container, isWindow]);

  return (
    <div className={classes} {...props}>
      <ul className='nav flex-column nav-pills menu-sidebar'>
        <ScrollspyContext.Provider value={{ activeElement, setTargets }}>{children}</ScrollspyContext.Provider>
      </ul>
    </div>
  );
};

MDBScrollspy.defaultProps = { offset: 10, container: window };

export default MDBScrollspy;
