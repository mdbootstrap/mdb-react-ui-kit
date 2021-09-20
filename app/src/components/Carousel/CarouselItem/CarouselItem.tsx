import clsx from 'clsx';
import React, { useContext, useState, useEffect, useRef } from 'react';
import type { CarouselItemProps } from './types';
import { CarouselContext } from '../CarouselContext';
import './style.css';

const MDBCarouselItem: React.FC<CarouselItemProps> = ({
  carouselRef,
  className,
  itemId,
  interval,
  tag: Tag,
  children,
  ...props
}) => {
  const { activeItem, imagesCount, fade, prev, setPrev, clicked, setActiveInterval } = useContext(CarouselContext);

  const carouselInnerRef = useRef<HTMLElement>(null);
  const carouselReference = carouselRef ? carouselRef : carouselInnerRef;
  const [activeState, setActiveState] = useState(activeItem);

  const classes = clsx(
    'carousel-item-react',
    activeState === itemId && 'active',
    prev === itemId && activeState !== itemId && 'active',
    className
  );

  const [style, setStyle] = useState({});

  useEffect(() => {
    if (activeState === itemId) {
      setActiveInterval(interval);
    }
  }, [activeState, interval, itemId, setActiveInterval]);

  useEffect(() => {
    if (!fade) {
      const isLastElement = itemId === 0 && activeItem === 0;
      const isFirstElement = itemId === imagesCount && activeItem === imagesCount && prev !== imagesCount - 1;

      if (clicked === 'prev' && isFirstElement) {
        setStyle({ transition: '0s', transform: 'translateX(-100%)' });
      } else if (clicked === 'next' && isLastElement) {
        setStyle({ transition: '0s', transform: 'translateX(100%)' });
      } else if (clicked === 'indicator' && isLastElement) {
        setStyle({ transition: '0s', transform: 'translateX(-100%)' });
      } else if (clicked === 'indicator' && isFirstElement) {
        setStyle({ transition: '0s', transform: 'translateX(100%)' });
      }

      if (imagesCount === 1) {
        if (clicked !== 'prev' && activeItem === 1 && itemId === 1) {
          setStyle({ transition: '0s', transform: 'translateX(100%)' });
        }
        if (clicked === 'prev' && activeItem === 0 && itemId === 0) {
          setStyle({ transition: '0s', transform: 'translateX(-100%)' });
        }
        if (clicked === 'prev' && activeItem === 1 && itemId === 1) {
          setStyle({ transition: '0s', transform: 'translateX(-100%)' });
        }
      }
    }
    setTimeout(() => {
      setActiveState(activeItem);
    }, 40);
  }, [clicked, activeItem, imagesCount, fade, itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (itemId !== undefined) {
      if (fade) {
        if (activeState === itemId) {
          setStyle({ opacity: 1 });
        } else {
          setStyle({ opacity: 0 });
        }
      } else {
        const isLastElement = activeState === imagesCount && itemId === 0;
        const isFirstElement = activeState === 0 && itemId === imagesCount;

        if (clicked === 'prev' && isLastElement) {
          setStyle({ transform: 'translateX(100%)' });
        } else if (clicked === 'next' && isFirstElement) {
          setStyle({ transform: 'translateX(-100%)' });
        } else if (activeState < itemId) {
          setStyle({ transform: 'translateX(100%)' });
        } else if (activeState > itemId) {
          setStyle({ transform: 'translateX(-100%)' });
        } else if (activeState === itemId) {
          setStyle({ transform: 'translateX(0)' });
        }
      }
    }
  }, [activeState, itemId, imagesCount, fade]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (prev === itemId) {
      carouselReference.current.addEventListener('transitionend', () => {
        setPrev(activeState);
      });
    }
  }, [activeState, carouselReference, itemId, prev, setPrev]);

  return (
    <Tag className={classes} ref={carouselReference} {...props} style={style}>
      {children}
    </Tag>
  );
};

MDBCarouselItem.defaultProps = { tag: 'div', interval: 5000 };

export default MDBCarouselItem;
