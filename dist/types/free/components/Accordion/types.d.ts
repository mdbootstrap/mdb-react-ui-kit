import React from 'react';
import { BaseComponent } from '../../../types/baseComponent';
interface AccordionProps extends BaseComponent {
    alwaysOpen?: boolean;
    borderless?: boolean;
    flush?: boolean;
    active?: number | number[];
    initialActive?: number | number[];
    onChange?: (id: number | number[]) => void;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { AccordionProps };
