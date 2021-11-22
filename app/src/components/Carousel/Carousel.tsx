import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { CarouselProps } from './types';
import MDBCarouselControl from './CarouselControl/CarouselControl';
import MDBCarouselIndicatorItem from './CarouselIndicatorItem/CarouselIndicatorItem';

import { queueCallback, isRTL, reflow } from './utils';

const MDBCarousel: React.FC<CarouselProps> = ({
  fade,
  className,
  dark,
  children,
  carouselRef,
  interval,
  keyboard,
  touch,
  tag: Tag,
  showControls,
  showIndicators,
  ...props
}) => {
  const items = useRef<Array<HTMLElement> | null>(null);
  const carouselInterval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeElement = useRef<HTMLElement | null>(null);
  const isBlocked = useRef(false);

  const isSliding = useRef(false);
  const isChanging = useRef(false);

  const [active, setActive] = useState(0);
  const [imagesCount, setImagesCount] = useState(0);
  const [clientTouch, setClientTouch] = useState({ initialX: 0, initialY: 0 });

  const carouselInnerRef = useRef<HTMLElement>(null);
  const carouselReference = carouselRef ? carouselRef : carouselInnerRef;

  const classes = clsx('carousel', 'slide', fade && 'carousel-fade', dark && 'carousel-dark', className);

  const directionToOrder = (direction: string) => {
    if (!['right', 'left'].includes(direction)) {
      return direction;
    }

    if (isRTL()) {
      return direction === 'left' ? 'prev' : 'next';
    }

    return direction === 'left' ? 'next' : 'prev';
  };

  const getItemIndex = useCallback(
    (element: HTMLElement) => {
      items.current =
        element && element.parentNode
          ? Array.from(carouselReference.current.querySelectorAll('.carousel-item', element.parentNode))
          : [];

      return items.current?.indexOf(element);
    },
    [carouselReference]
  );

  const pause = () => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = null;
    }
  };

  const getItemByOrder = useCallback(
    (order: string, activeElement: HTMLElement) => {
      const isPrev = order === 'prev';
      const activeIndex = getItemIndex(activeElement) as number;

      const delta = isPrev ? -1 : 1;
      const itemIndex = (activeIndex + delta) % (items.current?.length as number);

      const myItems = items.current;

      if (myItems) {
        if (itemIndex === -1) {
          return myItems[(items.current?.length as number) - 1];
        } else {
          return myItems[itemIndex];
        }
      }
    },
    [getItemIndex]
  );

  const setElementActive = useCallback(
    (order: string) => {
      const next = active === imagesCount - 1 ? 0 : active + 1;
      const prev = active === 0 ? imagesCount - 1 : active - 1;

      setActive(order === 'next' ? next : prev);
    },
    [active, imagesCount]
  );

  const isVisible = (element: any) => {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);

      return (
        elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden'
      );
    }

    return false;
  };

  const slide = useCallback(
    (directionOrOrder: string, element: any) => {
      const order = directionToOrder(directionOrOrder);
      const activeElement = carouselReference.current.querySelector('.active.carousel-item');
      const nextElement = element || getItemByOrder(order, activeElement);

      const isCycling = Boolean(carouselInterval.current);

      const isNext = order === 'next';
      const directionalClassName = isNext ? 'carousel-item-start' : 'carousel-item-end';
      const orderClassName = isNext ? 'carousel-item-next' : 'carousel-item-prev';

      if (nextElement && nextElement.classList.contains('active')) {
        isSliding.current = false;
        return;
      }

      if (element === null) {
        setElementActive(order);
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      isSliding.current = true;

      if (isCycling) {
        pause();
      }

      activeElement.current = nextElement;

      if (carouselReference.current.classList.contains('slide')) {
        nextElement.classList.add(orderClassName);

        reflow(nextElement);

        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add('active');

          activeElement.classList.remove('active', orderClassName, directionalClassName);

          isSliding.current = false;
        };

        queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove('active');
        nextElement.classList.add('active');

        isSliding.current = false;
      }
    },

    [carouselReference, getItemByOrder, setElementActive]
  );

  const next = useCallback(() => {
    if (!isSliding.current) {
      slide('next', null);
    }
  }, [slide]);

  const nextWhenVisible = useCallback(() => {
    if (!document.hidden && isVisible(carouselReference.current)) {
      next();
    }
  }, [next, carouselReference]);

  const to = (index: number) => {
    if (isBlocked.current) {
      return;
    }

    isBlocked.current = true;
    setTimeout(() => {
      isBlocked.current = false;
    }, 700);

    activeElement.current = carouselReference.current.querySelector('.active.carousel-item');
    const activeIndex = getItemIndex(activeElement.current as HTMLElement);

    setActive(index);

    if (index > (items.current?.length as number) - 1 || index < 0) {
      return;
    }

    const order = index > activeIndex ? 'next' : 'prev';

    if (items.current) {
      slide(order, items.current[index]);
    }
  };

  const cycle = useCallback(() => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = null;
    }

    carouselInterval.current = setInterval(document.visibilityState ? nextWhenVisible : next, interval);
  }, [next, nextWhenVisible, interval]);

  const startTouch = (e: TouchEvent) => {
    touch && setClientTouch({ initialX: e.touches[0].clientX, initialY: e.touches[0].clientY });
  };

  const moveTouch = (e: TouchEvent) => {
    isChanging.current = true;

    const { initialX, initialY } = clientTouch;

    if (!initialX || !initialY) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        slide('left', null);
      } else {
        slide('right', null);
      }
    }

    setClientTouch({ initialX: 0, initialY: 0 });
  };

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          slide('right', null);
          break;

        case 'ArrowRight':
          event.preventDefault();
          slide('left', null);
          break;

        default:
      }
    },
    [slide]
  );

  useEffect(() => {
    const imgLength = carouselReference.current.querySelectorAll('.carousel-item').length;

    setImagesCount(imgLength);
  }, [carouselReference]);

  useEffect(() => {
    if (keyboard) {
      document.addEventListener('keydown', handleKeydown);

      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [handleKeydown, keyboard]);

  useEffect(() => {
    cycle();
  }, [cycle]);

  const move = (direction: string) => {
    if (isBlocked.current) {
      return;
    }

    isBlocked.current = true;
    setTimeout(() => {
      isBlocked.current = false;
    }, 600);

    slide(direction, null);
  };

  return (
    <Tag
      onTouchStart={startTouch}
      onTouchMove={!isChanging.current ? moveTouch : null}
      onTouchEnd={() => (isChanging.current = false)}
      onMouseEnter={pause}
      onMouseLeave={cycle}
      className={classes}
      ref={carouselReference}
      {...props}
    >
      {showIndicators && (
        <ol className='carousel-indicators'>
          {Array.from(Array(imagesCount)).map((item, i) => (
            <MDBCarouselIndicatorItem key={i} active={active === i} onClick={() => to(i)} />
          ))}
        </ol>
      )}

      {children}
      {showControls && (
        <>
          <MDBCarouselControl direction='prev' onClick={() => move('right')} />
          <MDBCarouselControl direction='next' onClick={() => move('left')} />
        </>
      )}
    </Tag>
  );
};
MDBCarousel.defaultProps = { tag: 'div', fade: false, interval: 5000, touch: true, keyboard: false };
export default MDBCarousel;
