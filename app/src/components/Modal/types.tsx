interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  animationDirection?: 'top' | 'bottom' | 'right' | 'left';
  appendToBody?: boolean;
  backdrop?: boolean;
  closeOnEsc?: boolean;
  leaveHiddenModal?: boolean;
  modalRef?: React.RefObject<HTMLElement>;
  show?: boolean;
  setShow?: React.SetStateAction<any>;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
}

export { ModalProps };
