import clsx from 'clsx';
import React from 'react';
import type { CarouselIndicatorItemProps } from './types';

const MDBCarouselIndicatorItem: React.FC<CarouselIndicatorItemProps> = React.forwardRef<
  HTMLAllCollection,
  CarouselIndicatorItemProps
>(({ active, className, tag: Tag, ...props }, ref) => {
  const classes = clsx(active && 'active', className);

  return <Tag className={classes} ref={ref} {...props} />;
});

MDBCarouselIndicatorItem.defaultProps = { tag: 'li' };

export default MDBCarouselIndicatorItem;
