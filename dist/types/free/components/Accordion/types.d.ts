import React from 'react';
import { BaseComponent } from '../../../types/baseComponent';
interface AccordionProps extends BaseComponent {
    alwaysOpen?: boolean;
    borderless?: boolean;
    flush?: boolean;
    initialActive?: number;
    onChange?: (id: number) => void;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export { AccordionProps };
