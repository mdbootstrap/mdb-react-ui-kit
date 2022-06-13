import React from 'react';
import { backgroundColor } from 'src/types/colors';
import { BaseComponent } from 'src/types/baseComponent';

interface ListGroupItemProps extends BaseComponent {
  action?: boolean;
  color?: backgroundColor;
  disabled?: boolean;
  tag?: React.ComponentProps<any>;
}

export { ListGroupItemProps };
