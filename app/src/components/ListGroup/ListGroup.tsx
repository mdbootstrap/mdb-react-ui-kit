import clsx from 'clsx';
import React from 'react';
import type { ListGroupProps } from './types';

const MDBListGroup: React.FC<ListGroupProps> = React.forwardRef<HTMLAllCollection, ListGroupProps>(
  ({ className, tag: Tag = 'ul', horizontal, horizontalSize, light, numbered, children, small, ...props }, ref) => {
    const classes = clsx(
      'list-group',
      horizontal && (horizontalSize ? `list-group-horizontal-${horizontalSize}` : 'list-group-horizontal'),
      light && 'list-group-light',
      numbered && 'list-group-numbered',
      small && 'list-group-small',
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

export default MDBListGroup;
