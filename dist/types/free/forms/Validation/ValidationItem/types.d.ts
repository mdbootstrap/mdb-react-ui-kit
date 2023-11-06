import React from 'react';
import { BaseComponent } from '../../../../types/baseComponent';
interface ValidationItemProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    invalid?: boolean;
    feedback?: React.ReactNode;
    tooltip?: boolean;
}
export type { ValidationItemProps };
