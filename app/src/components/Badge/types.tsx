import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';
import { backgroundColor } from 'src/types/colors';

interface BadgeProps extends BaseComponent {
  color?: backgroundColor;
  dot?: boolean;
  notification?: boolean;
  pill?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { BadgeProps };
