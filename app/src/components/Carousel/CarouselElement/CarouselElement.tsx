import clsx from 'clsx';
import React from 'react';
import type { CarouselElementProps } from './types';

const MDBCarouselElement: React.FC<CarouselElementProps> = React.forwardRef<HTMLAllCollection, CarouselElementProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('d-block', 'w-100', className);

    return <Tag className={classes} ref={ref} {...props} />;
  }
);

MDBCarouselElement.defaultProps = { tag: 'img' };

export default MDBCarouselElement;
