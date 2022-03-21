import React from 'react';

interface ListGroupItemProps extends Omit<React.AllHTMLAttributes<HTMLLIElement>, 'action'> {
  active?: boolean;
  action?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';
  disabled?: boolean;
  tag?: React.ComponentProps<any>;
}

export { ListGroupItemProps };
