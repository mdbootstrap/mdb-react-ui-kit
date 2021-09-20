import clsx from 'clsx';
import React from 'react';
import type { PopoverHeaderProps } from './types';

const MDBPopoverHeader: React.FC<PopoverHeaderProps> = ({ className, children, tag: Tag, ...props }): JSX.Element => {
  const classes = clsx('popover-header', className);
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

MDBPopoverHeader.defaultProps = {
  tag: 'h3',
};

export default MDBPopoverHeader;
