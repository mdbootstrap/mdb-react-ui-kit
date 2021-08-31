import clsx from 'clsx';
import React from 'react';
import type { CarouselCaptionProps } from './types';

const MDBCarouselCaption: React.FC<CarouselCaptionProps> = React.forwardRef<HTMLAllCollection, CarouselCaptionProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('carousel-caption', 'd-none', 'd-md-block', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBCarouselCaption.defaultProps = { tag: 'div' };

export default MDBCarouselCaption;
