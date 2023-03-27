import { ComponentProps, HTMLAttributes, RefObject } from 'react';
interface CollapseProps extends HTMLAttributes<HTMLElement> {
    collapseRef?: RefObject<HTMLElement>;
    show?: boolean;
    tag?: ComponentProps<any>;
    navbar?: boolean;
    direction?: 'vertical' | 'horizontal';
    onShow?: () => any;
    onHide?: () => any;
}
export { CollapseProps };
