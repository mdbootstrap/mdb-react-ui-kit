import React, { useEffect, useCallback } from 'react';
import type { ScrollspyProps } from './types';

const MDBScrollspy: React.FC<ScrollspyProps> = React.forwardRef<HTMLAllCollection, ScrollspyProps>(
  ({ className, offset, onElement, setActive, targets, tag: Tag, children, ...props }, ref) => {
    const handleScroll = useCallback(
      (e: any) => {
        if (targets && offset) {
          let scrollTop: number;

          if (onElement) {
            scrollTop = e.target.scrollTop;
          } else {
            scrollTop = window.pageYOffset;
          }

          const lastIndex = targets.length - 1;

          if (scrollTop < targets[0].offsetTop) {
            setActive(0);
          }

          targets.forEach((target: any, i: number) => {
            const nextTarget = targets[i + 1];

            if (scrollTop > target.offsetTop - offset && scrollTop < nextTarget?.offsetTop - offset) {
              setActive(i + 1);
            }
          });

          if (scrollTop > targets[lastIndex].offsetTop - offset) {
            setActive(lastIndex + 1);
          }
        }
      },
      [targets, offset, onElement, setActive]
    );

    useEffect(() => {
      if (!onElement) {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [targets, onElement, handleScroll]);

    return (
      <Tag className={className} ref={ref} {...props} onScroll={onElement ? handleScroll : null}>
        {children}
      </Tag>
    );
  }
);

MDBScrollspy.defaultProps = { tag: 'div', onElement: false, offset: 10 };

export default MDBScrollspy;
