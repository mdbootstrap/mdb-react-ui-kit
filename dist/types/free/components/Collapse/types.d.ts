import { ComponentProps, HTMLAttributes, RefObject } from 'react';
interface CollapseProps extends HTMLAttributes<HTMLElement> {
    collapseRef?: RefObject<HTMLElement>;
    open?: boolean;
    tag?: ComponentProps<any>;
    navbar?: boolean;
    direction?: 'vertical' | 'horizontal';
    onOpen?: () => any;
    onClose?: () => any;
}
export type { CollapseProps };
