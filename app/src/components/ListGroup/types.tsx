import React from 'react';

interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ListGroupProps };
