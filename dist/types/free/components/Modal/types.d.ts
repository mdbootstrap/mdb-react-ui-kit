import { BaseComponent } from '../../../types/baseComponent';
interface ModalProps extends BaseComponent {
    animationDirection?: 'top' | 'bottom' | 'right' | 'left';
    appendToBody?: boolean;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    leaveHiddenModal?: boolean;
    modalRef?: React.RefObject<HTMLElement>;
    onHide?: () => void;
    onHidePrevented?: () => any;
    onShow?: () => void;
    show?: boolean;
    setShow?: React.SetStateAction<any>;
    staticBackdrop?: boolean;
    nonInvasive?: boolean;
    tag?: React.ComponentProps<any>;
}
export { ModalProps };
