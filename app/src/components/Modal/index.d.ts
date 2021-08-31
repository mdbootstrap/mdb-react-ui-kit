import * as React from 'react';

declare const MDBModal: React.FunctionComponent<{
  animationDirection?: string;
  backdrop?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  tabIndex?: string;
  show?: boolean;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
  modalRef?: React.RefObject<HTMLElement>;
  [rest: string]: any;
}>;

export default MDBModal;
