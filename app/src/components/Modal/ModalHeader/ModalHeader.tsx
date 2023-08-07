import React from 'react';
import clsx from 'clsx';
import type { ModalHeaderProps } from './types';

const MDBModalHeader: React.FC<ModalHeaderProps> = React.forwardRef<HTMLAllCollection, ModalHeaderProps>(
  ({ className, children, tag: Tag = 'div', ...props }, ref) => {
    const classes = clsx('modal-header', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBModalHeader;
