import clsx from 'clsx';
import React from 'react';
import type { ListGroupItemProps } from './types';

const MDBListGroupItem: React.FC<ListGroupItemProps> = React.forwardRef<HTMLAllCollection, ListGroupItemProps>(
  ({ className, tag: Tag = 'li', active, disabled, action, color, children, noBorders, ...props }, ref) => {
    const isButton = Tag === 'button';

    const classes = clsx(
      'list-group-item',
      active && 'active',
      disabled && !isButton && 'disabled',
      action && 'list-group-item-action',
      color && `list-group-item-${color}`,
      noBorders && 'border-0',
      className
    );

    return (
      <Tag className={classes} disabled={isButton && disabled} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

export default MDBListGroupItem;
