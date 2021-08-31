import clsx from 'clsx';
import React, { useContext, useState, useEffect, useRef } from 'react';
import type { CarouselItemProps } from './types';
import { CarouselContext } from '../CarouselContext';
import './style.css';

const MDBCarouselItem: React.FC<CarouselItemProps> = ({
  carouselRef,
  className,
  itemId,
  tag: Tag,
  children,
  ...props
}) => {
  const { activeItem, imagesCount, fade, prev, setPrev } = useContext(CarouselContext);

  const carouselInnerRef = useRef<HTMLElement>(null);
  const carouselReference = carouselRef ? carouselRef : carouselInnerRef;

  const classes = clsx(
    'carousel-item-react',
    activeItem === itemId && 'active',
    prev === itemId && activeItem !== itemId && 'active',
    className
  );

  const [style, setStyle] = useState({});

  useEffect(() => {
    if (itemId !== undefined) {
      if (fade) {
        if (activeItem === itemId) {
          setStyle({ opacity: 1 });
        } else {
          setStyle({ opacity: 0 });
        }
      } else {
        const isLastElement = activeItem === imagesCount && itemId === 0;
        const isFirstElement = activeItem === 0 && itemId === imagesCount;

        if (activeItem < itemId && !isFirstElement && !isLastElement) {
          setStyle({ transform: 'translateX(100%)' });
        } else if (activeItem > itemId && !isFirstElement && !isLastElement) {
          setStyle({ transform: 'translateX(-100%)' });
        } else if (isFirstElement) {
          setStyle({ transform: 'translateX(-100%)' });
        } else if (isLastElement) {
          setStyle({ transform: 'translateX(100%)' });
        } else {
          setStyle({ transform: 'translateX(0)' });
        }
      }
    }
  }, [activeItem, itemId, imagesCount, fade]);

  useEffect(() => {
    if (prev === itemId) {
      carouselReference.current.addEventListener('transitionend', () => {
        setPrev(activeItem);
      });
    }
  }, [activeItem, carouselReference, itemId, prev, setPrev]);

  return (
    <Tag className={classes} ref={carouselReference} {...props} style={style}>
      {children}
    </Tag>
  );
};

MDBCarouselItem.defaultProps = { tag: 'div' };

export default MDBCarouselItem;
