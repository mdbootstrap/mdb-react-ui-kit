import * as React from "react";

declare class MDBIframe extends React.Component<
  {
    allowFullScreen?: boolean;
    className?: string;
    height?: number;
    id?: string;
    name?: string;
    ratio?: "1by1" | "4by3" | "16by9" | "21by9";
    sandbox?: boolean;
    src: string;
    styles?: {};
    title?: string;
    width?: number;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onLoad?: () => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBIframe;
