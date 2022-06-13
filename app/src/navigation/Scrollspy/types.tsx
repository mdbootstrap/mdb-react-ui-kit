import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ScrollspyProps extends BaseComponent {
  container?: Window | React.MutableRefObject<any>;
  offset?: number;
}

export { ScrollspyProps };
