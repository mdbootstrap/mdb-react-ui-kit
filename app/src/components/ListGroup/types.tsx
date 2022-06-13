import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ListGroupProps extends BaseComponent {
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ListGroupProps };
