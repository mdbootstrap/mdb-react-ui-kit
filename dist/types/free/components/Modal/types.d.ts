/// <reference types="react" />
import { BaseComponent } from '../../../types/baseComponent';
interface FocusableElement {
    element: HTMLElement;
    focused: boolean;
}
interface ModalProps extends BaseComponent {
    animationDirection?: 'top' | 'bottom' | 'right' | 'left';
    appendToBody?: boolean;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    leaveHiddenModal?: boolean;
    modalRef?: React.RefObject<HTMLDivElement>;
    onClose?: () => void;
    onClosePrevented?: () => any;
    onOpen?: () => void;
    open?: boolean;
    defaultOpen?: boolean;
    staticBackdrop?: boolean;
    nonInvasive?: boolean;
    tag?: React.ComponentProps<any>;
    animationVariants?: {
        initial?: Record<string, any>;
        animate?: Record<string, any>;
        exit?: Record<string, any>;
    };
}
export type { ModalProps, FocusableElement };
