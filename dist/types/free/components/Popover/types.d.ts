import { placement } from '../../../types/placement';
import { ButtonProps } from '../Button/types';
interface PopoverProps extends ButtonProps {
    btnChildren?: React.ReactNode;
    btnClassName?: string;
    dismiss?: boolean;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    poperStyle?: React.CSSProperties;
    popperTag?: React.ComponentProps<any>;
    tag?: React.ComponentProps<any>;
    onShow?: () => any;
    onHide?: () => any;
}
export { PopoverProps };
