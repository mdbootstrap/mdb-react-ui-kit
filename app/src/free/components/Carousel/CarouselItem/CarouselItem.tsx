'use client';

import clsx from 'clsx';
import React, { useContext, useEffect, useRef } from 'react';
import { CarouselContext } from '../utils/CarouselContext';
import type { CarouselItemProps } from './types';

const MDBCarouselItem: React.FC<CarouselItemProps> = ({ className, children, itemId, ...props }) => {
  const { active } = useContext(CarouselContext);

  const isFirstRender = useRef(true);
  const itemRef = useRef<HTMLDivElement>(null);
  const classes = clsx('carousel-item', className);

  useEffect(() => {
    if (isFirstRender.current && active === itemId - 1) {
      const itemElement = itemRef.current;

      itemElement?.classList.add('active');
    }

    isFirstRender.current = false;
  }, [active, itemId]);

  return (
    <div className={classes} ref={itemRef} {...props}>
      {children}
    </div>
  );
};

export default MDBCarouselItem;
