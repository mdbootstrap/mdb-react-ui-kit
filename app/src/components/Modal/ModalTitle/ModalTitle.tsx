import React from 'react';
import clsx from 'clsx';
import type { ModalTitleProps } from './types';

const MDBModalTitle: React.FC<ModalTitleProps> = React.forwardRef<HTMLAllCollection, ModalTitleProps>(
  ({ className, children, tag: Tag = 'h5', ...props }, ref) => {
    const classes = clsx('modal-title', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBModalTitle;
