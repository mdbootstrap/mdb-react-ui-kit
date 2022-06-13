import clsx from 'clsx';
import React from 'react';
import type { BadgeProps } from './types';

const MDBBadge: React.FC<BadgeProps> = React.forwardRef<HTMLAllCollection, BadgeProps>(
  ({ className, color, pill, light, dot, tag: Tag, children, notification, ...props }, ref) => {
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

MDBBadge.defaultProps = { tag: 'span', color: 'primary' };

export default MDBBadge;
