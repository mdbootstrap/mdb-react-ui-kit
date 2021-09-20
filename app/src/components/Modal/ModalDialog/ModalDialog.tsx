import React from 'react';
import clsx from 'clsx';
import type { ModalDialogProps } from './types';

const MDBModalDialog: React.FC<ModalDialogProps> = React.forwardRef<HTMLAllCollection, ModalDialogProps>(
  ({ className, centered, children, size, scrollable, tag: Tag, ...props }, ref) => {
    const classes = clsx(
      'modal-dialog',
      scrollable && 'modal-dialog-scrollable',
      centered && 'modal-dialog-centered',
      size && `modal-${size}`,
      className
    );

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalDialog.defaultProps = { tag: 'div' };

export default MDBModalDialog;
