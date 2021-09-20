import React from 'react';
import clsx from 'clsx';
import type { ModalTitleProps } from './types';

const MDBModalTitle: React.FC<ModalTitleProps> = React.forwardRef<HTMLAllCollection, ModalTitleProps>(
  ({ className, children, tag: Tag, ...props }, ref) => {
    const classes = clsx('modal-title', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalTitle.defaultProps = { tag: 'h5' };

export default MDBModalTitle;
