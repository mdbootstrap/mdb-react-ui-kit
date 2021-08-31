import React from 'react';

type CarouselItemProps = {
  className?: string;
  interval?: number;
  itemId?: number;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { CarouselItemProps };
