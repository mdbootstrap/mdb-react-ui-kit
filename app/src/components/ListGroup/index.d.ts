import * as React from 'react';

declare const ListGroup: React.FunctionComponent<{
  className?: string;
  tag?: React.ComponentProps<any>;
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  [rest: string]: any;
}>;

export default ListGroup;
