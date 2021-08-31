import React from 'react';
import clsx from 'clsx';
import type { ModalContentProps } from './types';

const MDBModalContent: React.FC<ModalContentProps> = React.forwardRef<HTMLAllCollection, ModalContentProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('modal-content', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalContent.defaultProps = { tag: 'div' };

export default MDBModalContent;
