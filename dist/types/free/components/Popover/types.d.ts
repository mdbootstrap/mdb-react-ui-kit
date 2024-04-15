/// <reference types="react" />
import { placement } from '../../../types/placement';
import { ButtonProps } from '../Button/types';
interface PopoverProps extends ButtonProps {
    btnChildren?: React.ReactNode;
    btnClassName?: string;
    dismiss?: boolean;
    open?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    poperStyle?: React.CSSProperties;
    popperTag?: React.ComponentProps<any>;
    tag?: React.ComponentProps<any>;
    disablePortal?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
export type { PopoverProps };
