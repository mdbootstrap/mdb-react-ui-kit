import React from 'react';
import clsx from 'clsx';
import type { ModalBodyProps } from './types';

const MDBModalBody: React.FC<ModalBodyProps> = React.forwardRef<HTMLAllCollection, ModalBodyProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('modal-body', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalBody.defaultProps = { tag: 'div' };

export default MDBModalBody;
