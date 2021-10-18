import clsx from 'clsx';
import React, { useRef } from 'react';
import type { CarouselItemProps } from './types';

const MDBCarouselItem: React.FC<CarouselItemProps> = ({ carouselRef, className, tag: Tag, children, ...props }) => {
  const carouselInnerRef = useRef<HTMLElement>(null);
  const carouselReference = carouselRef ? carouselRef : carouselInnerRef;

  const classes = clsx('carousel-item', className);

  return (
    <Tag className={classes} ref={carouselReference} {...props}>
      {children}
    </Tag>
  );
};

MDBCarouselItem.defaultProps = { tag: 'div' };

export default MDBCarouselItem;
