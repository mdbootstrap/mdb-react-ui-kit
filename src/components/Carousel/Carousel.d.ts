import * as React from 'react';

declare class MDBCarousel extends React.Component<
  {
    activeItem?: number;
    className?: string;
    children?: React.ReactNode;
    mobileGesture?: boolean;
    multiItem?: boolean;
    interval?: number;
    thumbnails?: boolean;
    testimonial?: boolean;
    showControls?: boolean;
    showIndicators?: boolean;
    slide?: boolean;
    length?: number;
    tab?: string;
    onHoverStop?: boolean;
    [rest: string]: any;
  },
  any
> {}

export default MDBCarousel;
