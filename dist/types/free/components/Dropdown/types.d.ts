import { BaseComponent } from '../../../types/baseComponent';
import { ReactNode, ComponentProps } from 'react';
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
    onHide?: () => any;
    onShow?: () => any;
}
