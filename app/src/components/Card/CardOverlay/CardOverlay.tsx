import React from 'react';
import clsx from 'clsx';
import type { CardOverlayProps } from './types';

const MDBCardOverlay: React.FC<CardOverlayProps> = React.forwardRef<HTMLAllCollection, CardOverlayProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('card-img-overlay', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardOverlay.defaultProps = { tag: 'div' };

export default MDBCardOverlay;
