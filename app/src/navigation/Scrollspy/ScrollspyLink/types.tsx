import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ScrollspyNavLinkProps extends BaseComponent {
  collapsible?: boolean;
  onActivate?: (id?: string) => void;
  subsections?: Array<React.MutableRefObject<any>>;
  targetRef: React.MutableRefObject<any>;
}

export { ScrollspyNavLinkProps };
