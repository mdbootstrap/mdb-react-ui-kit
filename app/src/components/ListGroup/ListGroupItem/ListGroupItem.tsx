import clsx from 'clsx';
import React from 'react';
import type { ListGroupItemProps } from './types';

const MDBListGroupItem: React.FC<ListGroupItemProps> = React.forwardRef<HTMLAllCollection, ListGroupItemProps>(
  ({ className, tag: Tag, active, disabled, action, color, children, ...props }, ref) => {
    const isButton = Tag === 'button';

    const classes = clsx(
      'list-group-item',
      active && 'active',
      disabled && !isButton && 'disabled',
      action && 'list-group-item-action',
      color && `list-group-item-${color}`,
      className
    );

    return (
      <Tag className={classes} disabled={isButton && disabled} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBListGroupItem.defaultProps = { tag: 'li' };

export default MDBListGroupItem;
