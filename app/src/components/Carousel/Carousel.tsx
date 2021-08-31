import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { CarouselProps } from './types';
import MDBCarouselControl from './CarouselControl/CarouselControl';
import MDBCarouselIndicatorItem from './CarouselIndicatorItem/CarouselIndicatorItem';
import { CarouselContext } from './CarouselContext';
const MDBCarousel: React.FC<CarouselProps> = ({
  fade,
  className,
  dark,
  children,
  carouselRef,
  keyboard,
  pause,
  touch,
  tag: Tag,
  showControls,
  showIndicators,
  ...props
}) => {
  const [isChanging, setIsChanging] = useState(false);
  const [imagesCount, setImagesCount] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [prevState, setPrevState] = useState(0);
  const [clicked, setClicked] = useState('');
  const [startInterval, setStartInterval] = useState(true);
  const [clientTouch, setClientTouch] = useState({ initialX: 0, initialY: 0 });
  const [activeInterval, setActiveInterval] = useState(5000);

  const carouselInnerRef = useRef<HTMLElement>(null);
  const carouselReference = carouselRef ? carouselRef : carouselInnerRef;

  const classes = clsx('carousel', 'slide', fade && 'carousel-fade', dark && 'carousel-dark', className);

  const setPrev = useCallback(() => {
    const prevIndex = activeItem === 0 ? imagesCount : activeItem - 1;

    setClicked('prev');
    setActiveItem(prevIndex);
  }, [activeItem, imagesCount]);

  const setNext = useCallback(() => {
    const nextIndex = activeItem === imagesCount ? 0 : activeItem + 1;

    setActiveItem(nextIndex);
    setClicked('next');
  }, [activeItem, imagesCount]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          setPrev();
          break;

        case 'ArrowRight':
          event.preventDefault();
          setNext();
          break;

        default:
      }
    },
    [setPrev, setNext]
  );

  const handleControlClick = (isNext: boolean) => {
    if (!isChanging && !isNext) {
      setPrev();
      setIsChanging(true);

      setTimeout(() => {
        setIsChanging(false);
      }, 900);
    } else if (!isChanging && isNext) {
      setNext();
      setIsChanging(true);

      setTimeout(() => {
        setIsChanging(false);
      }, 900);
    } else {
      return;
    }
  };

  const handleIndicatorClick = (i: number, e: any) => {
    if (e.target) {
      if (!isChanging && !e.target.classList.contains('active')) {
        setClicked('indicator');
        setActiveItem(i);
        setIsChanging(true);

        setTimeout(() => {
          setIsChanging(false);
        }, 700);
      }
    }
  };

  useEffect(() => {
    if (keyboard) {
      document.addEventListener('keydown', handleKeydown);

      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [handleKeydown, keyboard]);

  useEffect(() => {
    if (activeInterval && startInterval) {
      const cycleInterval = setInterval(setNext, activeInterval);

      return () => {
        clearInterval(cycleInterval);
      };
    }
  }, [activeInterval, setNext, startInterval]);

  useEffect(() => {
    const carouselImgList = carouselReference.current.querySelectorAll('.carousel-item-react img');

    setImagesCount(carouselImgList.length - 1);
  }, [carouselReference, showIndicators]);

  const startTouch = (e: TouchEvent) => {
    touch && setClientTouch({ initialX: e.touches[0].clientX, initialY: e.touches[0].clientY });
  };

  const moveTouch = (e: TouchEvent) => {
    setIsChanging(true);

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
        setNext();
      } else {
        setPrev();
      }
    }

    setClientTouch({ initialX: 0, initialY: 0 });
  };

  return (
    <CarouselContext.Provider
      value={{
        activeItem: activeItem ? activeItem : 0,
        imagesCount: imagesCount,
        fade: fade ? true : false,
        prev: prevState,
        setPrev: setPrevState,
        clicked: clicked,
        setActiveInterval: setActiveInterval,
      }}
    >
      <Tag
        onTouchStart={startTouch}
        onTouchMove={!isChanging ? moveTouch : null}
        onTouchEnd={() => setIsChanging(false)}
        onMouseEnter={pause ? () => setStartInterval(false) : null}
        onMouseLeave={pause ? () => setStartInterval(true) : null}
        className={classes}
        ref={carouselReference}
        {...props}
      >
        {showIndicators && (
          <ol className='carousel-indicators'>
            {Array.from(Array(imagesCount + 1)).map((item, i) => (
              <MDBCarouselIndicatorItem
                key={i}
                active={activeItem === i}
                onClick={(e: MouseEvent) => handleIndicatorClick(i, e)}
              />
            ))}
          </ol>
        )}
        {children}
        {showControls && (
          <>
            <MDBCarouselControl direction='prev' onClick={() => handleControlClick(false)} />
            <MDBCarouselControl direction='next' onClick={() => handleControlClick(true)} />
          </>
        )}
      </Tag>
    </CarouselContext.Provider>
  );
};
MDBCarousel.defaultProps = { tag: 'div', fade: false, pause: true, touch: true, keyboard: false };
export default MDBCarousel;
