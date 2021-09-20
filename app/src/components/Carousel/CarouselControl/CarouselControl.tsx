import clsx from 'clsx';
import React from 'react';
import type { CarouselControlProps } from './types';

const MDBCarouselControl: React.FC<CarouselControlProps> = React.forwardRef<HTMLAllCollection, CarouselControlProps>(
  ({ className, direction, tag: Tag, ...props }, ref) => {
    const classes = clsx(`carousel-control-${direction}`, className);

    return (
      <Tag role='button' className={classes} ref={ref} {...props}>
        <span className={`carousel-control-${direction}-icon`}></span>
        {direction === 'prev' ? (
          <span className='visually-hidden'>Previous</span>
        ) : (
          <span className='visually-hidden'>Next</span>
        )}
      </Tag>
    );
  }
);

MDBCarouselControl.defaultProps = { tag: 'a' };

export default MDBCarouselControl;
