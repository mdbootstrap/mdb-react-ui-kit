import React from 'react';

interface BadgeProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'color'> {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info';
  dot?: boolean;
  notification?: boolean;
  pill?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { BadgeProps };
