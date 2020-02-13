import * as React from 'react';
declare class MDBModal extends React.Component<
  {
    animation?: 'top' | 'bottom' | 'left' | 'right';
    autoFocus?: boolean;
    backdrop?: boolean;
    backdropClassName?: string;
    backdropStyles?: object;
    cascading?: boolean;
    centered?: boolean;
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
    fade?: boolean;
    disableFocusTrap?: boolean;
    frame?: boolean;
    fullHeight?: boolean;
    isOpen?: boolean;
    id?: string;
    labelledBy?: string;
    modalClassName?: string;
    modalStyle?: 'success' | 'info' | 'danger' | 'warning';
    position?: string;
    side?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'fluid';
    role?: string;
    tabIndex?: string;
    wrapClassName?: boolean;
    wrapperStyles?: object;
    keyboard?: boolean;
    toggle?: () => void;
    hiddenModal?: () => void;
    hideModal?: () => void;
    showModal?: () => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBModal;
