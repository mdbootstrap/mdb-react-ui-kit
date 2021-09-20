import React from 'react';
import clsx from 'clsx';
import type { ModalFooterProps } from './types';

const MDBModalFooter: React.FC<ModalFooterProps> = React.forwardRef<HTMLAllCollection, ModalFooterProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('modal-footer', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalFooter.defaultProps = { tag: 'div' };

export default MDBModalFooter;
