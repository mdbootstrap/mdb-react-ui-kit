import { ReactNode, ComponentProps } from 'react';
export interface ItemChildProps {
    childTag?: ComponentProps<any>;
    children?: ReactNode;
    disabled?: boolean;
    link?: boolean;
    divider?: boolean;
    header?: boolean;
    href?: string;
}
