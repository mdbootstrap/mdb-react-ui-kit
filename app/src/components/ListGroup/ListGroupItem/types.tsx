import React from 'react';

type ListGroupItemProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  color?: string;
  [rest: string]: any;
};

export { ListGroupItemProps };
