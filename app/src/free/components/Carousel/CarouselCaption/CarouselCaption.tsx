import React from 'react';
import { CarouselCaptionProps } from './types';
import clsx from 'clsx';

const MDBCarouselCaption: React.FC<CarouselCaptionProps> = ({ className, children, ...props }) => {
  const classes = clsx('carousel-caption d-none d-md-block', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default MDBCarouselCaption;
