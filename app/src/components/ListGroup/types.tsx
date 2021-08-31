import React from 'react';

type ListGroupProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  [rest: string]: any;
};

export { ListGroupProps };
