type ModalProps = {
  animationDirection?: string;
  backdrop?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  leaveHiddenModal?: boolean;
  appendToBody?: boolean;
  tabIndex?: string;
  show?: boolean;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
  modalRef?: React.RefObject<HTMLElement>;
  [rest: string]: any;
};

export { ModalProps };
