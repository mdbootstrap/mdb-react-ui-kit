import React from 'react';
import { BaseComponent } from '../../../types/baseComponent';
interface ScrollspyProps extends BaseComponent {
    container?: Window | React.MutableRefObject<any>;
    offset?: number;
}
export type { ScrollspyProps };
