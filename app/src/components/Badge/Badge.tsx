import clsx from 'clsx';
import React from 'react';
import type { BadgeProps } from './types';

const MDBBadge: React.FC<BadgeProps> = React.forwardRef<HTMLAllCollection, BadgeProps>(
  ({ className, color = 'primary', pill, light, dot, tag: Tag = 'span', children, notification, ...props }, ref) => {
    const classes = clsx(
      'badge',
      light ? color && `badge-${color}` : color && `bg-${color}`,
      dot && 'badge-dot',
      pill && 'rounded-pill',
      notification && 'badge-notification',
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

export default MDBBadge;
