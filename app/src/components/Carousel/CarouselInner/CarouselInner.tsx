import clsx from 'clsx';
import React from 'react';
import type { CarouselInnerProps } from './types';

const MDBCarouselInner: React.FC<CarouselInnerProps> = React.forwardRef<HTMLAllCollection, CarouselInnerProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('carousel-inner', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBCarouselInner.defaultProps = { tag: 'div' };

export default MDBCarouselInner;
