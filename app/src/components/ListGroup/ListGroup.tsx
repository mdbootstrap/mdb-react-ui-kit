import clsx from 'clsx';
import React from 'react';
import type { ListGroupProps } from './types';

const MDBListGroup: React.FC<ListGroupProps> = React.forwardRef<HTMLAllCollection, ListGroupProps>(
  ({ className, tag: Tag, horizontal, horizontalSize, flush, children, ...props }, ref) => {
    const classes = clsx(
      'list-group',
      horizontal && (horizontalSize ? `list-group-horizontal-${horizontalSize}` : 'list-group-horizontal'),
      flush && 'list-group-flush',
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBListGroup.defaultProps = { tag: 'ul' };

export default MDBListGroup;
