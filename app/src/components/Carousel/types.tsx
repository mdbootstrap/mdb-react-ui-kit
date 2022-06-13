import React from 'react';

type CarouselProps = {
  className?: string;
  fade?: boolean;
  interval?: number;
  keyboard?: boolean;
  onSlide?: () => any;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { CarouselProps };
