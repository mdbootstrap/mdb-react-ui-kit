import React from 'react';
import { backgroundColor } from '../../../../types/colors';
import { BaseComponent } from '../../../../types/baseComponent';
interface ListGroupItemProps extends BaseComponent {
    action?: boolean;
    color?: backgroundColor;
    disabled?: boolean;
    noBorders?: boolean;
    tag?: React.ComponentProps<any>;
}
export type { ListGroupItemProps };
