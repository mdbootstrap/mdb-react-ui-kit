import React from 'react';
import { BaseComponent } from '../../../../types/baseComponent';
interface ScrollspyNavLinkProps extends BaseComponent {
    collapsible?: boolean;
    onActivate?: (id?: string) => void;
    subsections?: Array<React.MutableRefObject<any>>;
    targetRef: React.MutableRefObject<any>;
}
export { ScrollspyNavLinkProps };
