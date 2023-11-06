import React from 'react';
import { BaseComponent } from '../../../types/baseComponent';
interface ListGroupProps extends BaseComponent {
    horizontal?: boolean;
    horizontalSize?: string;
    light?: boolean;
    numbered?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    small?: boolean;
    tag?: React.ComponentProps<any>;
}
export type { ListGroupProps };
