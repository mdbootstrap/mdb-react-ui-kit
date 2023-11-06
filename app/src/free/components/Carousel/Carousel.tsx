'use client';

import clsx from 'clsx';
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import type { CarouselProps } from './types';

import CarouselIndicators from './CarouselIndicators/CarouselIndicators';
import CarouselControls from './CarouselControls/CarouselControls';
import { CarouselContext } from './utils/CarouselContext';
import { getCarouselItems, isVisible, queueCallback, reflow } from './utils/utils';

const MDBCarousel: React.FC<CarouselProps> = ({
  fade = false,
  className,
  carouselInnerClassName,
  dark,
  children,
  interval = 5000,
  keyboard = false,
  touch = true,
  showControls,
  showIndicators,
  onSlide,
  ...props
}) => {
  const items = useRef<HTMLDivElement[] | null>([]);
  const carouselInterval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevIndex = useRef(0);

  const isBlocked = useRef(false);

  const [active, setActive] = useState(0);
  const [itemsLength, setItemsLength] = useState(0);
  const [clientTouch, setClientTouch] = useState({ initialX: 0, initialY: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const classes = clsx('carousel', 'slide', fade && 'carousel-fade', dark && 'carousel-dark', className);
  const carouselInnerClasses = clsx('carousel-inner', carouselInnerClassName);

  const setElementActive = useCallback(
    (direction: string, newIndex?: number) => {
      if (newIndex !== undefined) {
        prevIndex.current = newIndex;
        setActive(newIndex);
      } else {
        const next = active === itemsLength - 1 ? 0 : active + 1;
        const prev = active === 0 ? itemsLength - 1 : active - 1;

        prevIndex.current = direction === 'next' ? next : prev;
        setActive(direction === 'next' ? next : prev);
      }
    },
    [active, itemsLength]
  );

  const pauseInterval = useCallback(() => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);

      carouselInterval.current = null;
    }
  }, []);

  const slide = useCallback(
    (direction: string, nextElement: HTMLDivElement, index?: number) => {
      if (!items.current || items.current.length < 2) return;
      setIsTransitioning(true);
      const carouselElements = items.current as HTMLDivElement[];
      const activeElement = carouselElements[active];

      const isCycling = Boolean(carouselInterval.current);
      const isNext = direction === 'next';

      const directionalClassName = isNext ? 'carousel-item-start' : 'carousel-item-end';
      const orderClassName = isNext ? 'carousel-item-next' : 'carousel-item-prev';

      if (nextElement.classList.contains('active')) {
        isBlocked.current = false;

        return;
      }

      setElementActive(direction, index);

      if (!activeElement || !nextElement) return;

      isBlocked.current = true;

      if (isCycling) {
        pauseInterval();
      }

      if (carouselRef.current?.classList.contains('slide')) {
        nextElement.classList.add(orderClassName);

        reflow(nextElement);

        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          setIsTransitioning(false);
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add('active');

          activeElement.classList.remove('active', orderClassName, directionalClassName);

          isBlocked.current = false;
        };

        queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove('active');
        nextElement.classList.add('active');

        isBlocked.current = false;
      }
    },

    [carouselRef, active, setElementActive, pauseInterval]
  );

  const block = (timer: number) => {
    if (isBlocked.current) {
      return;
    }

    isBlocked.current = true;

    setTimeout(() => {
      isBlocked.current = false;
    }, timer);
  };

  const getNextElement = useCallback(
    (direction: 'prev' | 'next' | 'to') => {
      const isPrev = direction === 'prev';
      const activeIndex = prevIndex.current;

      const delta = isPrev ? -1 : 1;
      const itemIndex = (activeIndex + delta) % itemsLength;
      const carouselItems = items.current as HTMLDivElement[];

      if (itemIndex === -1) {
        return carouselItems[itemsLength - 1];
      } else {
        return carouselItems[itemIndex];
      }
    },
    [itemsLength]
  );

  const getToElement = (index: number) => {
    const activeIndex = prevIndex.current;

    const direction = index > activeIndex ? 'next' : 'prev';
    const carouselItems = items.current as HTMLDivElement[];

    return { direction, nextElement: carouselItems[index] };
  };

  const changeTo = (index: number) => {
    if (isBlocked.current) return;

    block(700);

    if (index > itemsLength - 1 || index < 0) return;

    const { direction, nextElement } = getToElement(index);

    slide(direction as 'prev' | 'next', nextElement, index);
  };

  const changeStep = useCallback(
    (direction: 'prev' | 'next') => {
      if (isBlocked.current) return;

      block(600);

      const nextElement = getNextElement(direction);

      slide(direction, nextElement);
    },
    [getNextElement, slide]
  );

  const changeNext = useCallback(() => {
    const { visibilityState, hidden } = document;

    if (visibilityState) {
      if (hidden || !isVisible(carouselRef.current as HTMLDivElement)) return;

      return changeStep('next');
    }

    changeStep('next');
  }, [carouselRef, changeStep]);

  const startInterval = useCallback(() => {
    const individualInterval = (children as ReactElement[])?.[active]?.props?.interval;
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);

      carouselInterval.current = null;
    }

    carouselInterval.current = setInterval(changeNext, individualInterval || interval);
  }, [changeNext, interval, children, active]);

  const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touch) return;

    setClientTouch({ initialX: e.touches[0].clientX, initialY: e.touches[0].clientY });
  };

  const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    isBlocked.current = true;

    const { initialX, initialY } = clientTouch;

    if (!initialX || !initialY) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        changeStep('prev');
      } else {
        changeStep('next');
      }
    }

    setClientTouch({ initialX: 0, initialY: 0 });
  };

  const endTouch = () => {
    isBlocked.current = false;
  };

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          changeStep('prev');
          break;

        case 'ArrowRight':
          event.preventDefault();
          changeStep('next');
          break;

        default:
      }
    },
    [changeStep]
  );

  useEffect(() => {
    if (keyboard) {
      window.addEventListener('keydown', handleKeydown);

      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [handleKeydown, keyboard]);

  useEffect(() => {
    const carouselElement = carouselRef.current as HTMLDivElement;
    const itemsArray = getCarouselItems(carouselElement);

    items.current = itemsArray;
    setItemsLength(itemsArray.length);
  }, [carouselRef]);

  useEffect(() => {
    isTransitioning && onSlide?.();
  }, [isTransitioning, onSlide]);

  useEffect(() => {
    startInterval();

    return () => {
      pauseInterval();
    };
  }, [startInterval, pauseInterval]);

  return (
    <div
      onTouchStart={startTouch}
      onTouchMove={moveTouch}
      onTouchEnd={endTouch}
      onMouseEnter={pauseInterval}
      onMouseLeave={startInterval}
      className={classes}
      ref={carouselRef}
      {...props}
    >
      <div className={carouselInnerClasses}>
        <CarouselContext.Provider value={{ active }}>
          {showIndicators && <CarouselIndicators to={changeTo} imagesCount={itemsLength} />}
          {children}
          {showControls && <CarouselControls move={changeStep} />}
        </CarouselContext.Provider>
      </div>
    </div>
  );
};

export default MDBCarousel;
