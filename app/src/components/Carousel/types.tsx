import React from 'react';

type CarouselProps = {
  activeItem?: number;
  className?: string;
  fade?: boolean;
  keyboard?: boolean;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { CarouselProps };
