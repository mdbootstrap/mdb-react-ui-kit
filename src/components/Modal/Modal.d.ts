import * as React from 'react';
declare class MDBModal extends React.Component<
  {
    [rest: string]: any;
    animation?: 'top' | 'bottom' | 'left' | 'right';
    autoFocus?: boolean;
    backdrop?: boolean;
    backdropClassName?: string;
    backdropStyles?: object;
    backdropTransitionTimeout?: number;
    cascading?: boolean;
    centered?: boolean;
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    disableBackdrop?: boolean;
    disableFocusTrap?: boolean;
    fade?: boolean;
    frame?: boolean;
    fullHeight?: boolean;
    hiddenModal?: () => void;
    hideModal?: () => void;
    id?: string;
    inline: boolean;
    isOpen?: boolean;
    keyboard?: boolean;
    modalClassName?: string;
    modalStyle?: 'success' | 'info' | 'danger' | 'warning';
    modalStylesWithoutBackdrop?: React.ReactNode;
    modalTransitionTimeout?: number;
    noClickableBodyWithoutBackdrop: boolean;
    overflowScroll: boolean;
    position?: string;
    role?: string;
    showModal?: () => void;
    side?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'fluid';
    tabIndex?: string;
    toggle?: () => void;
    wrapClassName?: boolean;
    wrapperStyles?: object;
  },
  any
> {}

export default MDBModal;
