import * as React from "react";

declare class MDBNotification extends React.Component<{
  autohide?: number;
  bodyClassName?: string;
  bodyColor?: string;
  className?: string;
  children?: React.ReactNode;
  closeClassName?: string;
  fade?: boolean;
  icon?: string;
  iconClassName?: string;
  message?: string;
  show?: boolean;
  tag?: string;
  title?: string;
  text?: string;
  titleColor?: string;
  titleClassName?: string;
  [rest: string]: any;
}, any> {}

export default MDBNotification;
