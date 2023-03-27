import { BaseComponent } from '../../../../types/baseComponent';
import { ReactElement, ComponentProps } from 'react';
export interface DropdownMenuProps extends BaseComponent {
    appendToBody?: boolean;
    dark?: boolean;
    responsive?: '' | 'start' | 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start' | 'sm-end' | 'md-end' | 'lg-end' | 'xl-end' | 'xxl-end';
    tag?: ComponentProps<any>;
    children: ReactElement[] | ReactElement;
    alwaysOpen?: boolean;
}
