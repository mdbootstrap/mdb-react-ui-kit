import * as React from 'react';

declare const MDBCarousel: React.FunctionComponent<{
  asyncData?: any;
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
}>;

export default MDBCarousel;
