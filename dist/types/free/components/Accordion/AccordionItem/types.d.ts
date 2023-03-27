import React from 'react';
import { BaseComponent } from '../../../../types/baseComponent';
interface AccordionItemProps extends BaseComponent {
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
    collapseId: number;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    headerTitle?: React.ReactNode;
    btnClassName?: React.ReactNode;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export { AccordionItemProps };
