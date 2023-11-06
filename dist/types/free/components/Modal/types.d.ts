import { BaseComponent } from '../../../types/baseComponent';
interface ModalProps extends BaseComponent {
    animationDirection?: 'top' | 'bottom' | 'right' | 'left';
    appendToBody?: boolean;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    leaveHiddenModal?: boolean;
    modalRef?: React.RefObject<HTMLElement>;
    onClose?: () => void;
    onClosePrevented?: () => any;
    onOpen?: () => void;
    open?: boolean;
    setOpen?: React.SetStateAction<any>;
    staticBackdrop?: boolean;
    nonInvasive?: boolean;
    tag?: React.ComponentProps<any>;
}
export type { ModalProps };
