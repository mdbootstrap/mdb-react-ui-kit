import { BaseComponent } from '../../../types/baseComponent';
import { ReactNode, ComponentProps, SyntheticEvent } from 'react';
export interface DropdownProps extends BaseComponent {
    animation?: boolean;
    group?: boolean;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    children?: ReactNode;
    tag?: ComponentProps<any>;
    onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
}
