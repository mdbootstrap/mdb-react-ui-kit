import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ScrollspySubListProps extends BaseComponent {
  collapsible?: Array<React.MutableRefObject<any>>;
}

export { ScrollspySubListProps };
