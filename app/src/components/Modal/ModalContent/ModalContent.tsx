import React from 'react';
import clsx from 'clsx';
import type { ModalContentProps } from './types';

const MDBModalContent: React.FC<ModalContentProps> = React.forwardRef<HTMLAllCollection, ModalContentProps>(
  ({ className, children, tag: Tag = 'div', ...props }, ref) => {
    const classes = clsx('modal-content', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default MDBModalContent;
