import * as React from "react";

declare const MDBCarouselControl: React.FunctionComponent<{
  className?: string;
  direction?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  multiItem?: boolean;
  tag?: string;
  testimonial?: boolean;
  onClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}>;

export default MDBCarouselControl;
