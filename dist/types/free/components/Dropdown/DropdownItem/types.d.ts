import { BaseComponent } from '../../../../types/baseComponent';
import { ReactNode, ComponentProps } from 'react';
export interface DropdownItemProps extends BaseComponent {
    tag?: ComponentProps<any>;
    childTag?: ComponentProps<any>;
    children?: ReactNode;
    divider?: boolean;
    header?: boolean;
    link?: boolean;
    href?: string;
    disabled?: boolean;
    className?: string;
    preventCloseOnClick?: boolean;
}
