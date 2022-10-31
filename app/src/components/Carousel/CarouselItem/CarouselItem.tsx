import clsx from 'clsx';
import React, { useContext, useEffect, useRef } from 'react';
import { CarouselContext } from '../utils/CarouselContext';
import type { CarouselItemProps } from './types';

const MDBCarouselItem: React.FC<CarouselItemProps> = ({
  className,
  captionClassName,
  children,
  src,
  alt,
  itemId,
  video,
  ...props
}) => {
  const { active } = useContext(CarouselContext);

  const isFirstRender = useRef(true);
  const itemRef = useRef<HTMLDivElement>(null);

  const captionClasses = clsx('carousel-caption d-none d-md-block', captionClassName);

  useEffect(() => {
    if (isFirstRender.current && active === itemId - 1) {
      const itemElement = itemRef.current;

      itemElement?.classList.add('active');
    }

    isFirstRender.current = false;
  }, [active, itemId]);

  return (
    <div className='carousel-item' ref={itemRef}>
      {video ? (
        <video className={className} autoPlay loop muted {...props}>
          <source src={src} type='video/mp4' />
        </video>
      ) : (
        <img className={className} src={src} alt={alt} {...props} />
      )}
      <div className={captionClasses}>{children}</div>
    </div>
  );
};

export default MDBCarouselItem;
