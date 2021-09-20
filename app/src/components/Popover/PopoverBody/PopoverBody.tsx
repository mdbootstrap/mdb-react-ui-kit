import clsx from 'clsx';
import React from 'react';
import type { PopoverBodyProps } from './types';

const MDBPopoverBody: React.FC<PopoverBodyProps> = ({ className, children, tag: Tag, ...props }): JSX.Element => {
  const classes = clsx('popover-body', className);

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

MDBPopoverBody.defaultProps = {
  tag: 'div',
};

export default MDBPopoverBody;
