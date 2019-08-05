import * as React from "react";

declare class MDBCarouselItem extends React.Component<{
  active?: boolean;
  activeItem?: any;
  length?: any;
  slide?: any;
  className?: string;
  children?: React.ReactNode;
  tag?: string;
  itemId?: number | string;
  [rest: string]: any;
}, any> {}

export default MDBCarouselItem;
