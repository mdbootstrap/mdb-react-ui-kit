import clsx from 'clsx';
import React from 'react';
import type { DropdownHeaderProps } from './types';

const MDBDropdownHeader: React.FC<DropdownHeaderProps> = ({ tag: Tag, children, className, ...props }): JSX.Element => {
  return (
    <Tag {...props} className={clsx('dropdown-header', className)}>
      {children}
    </Tag>
  );
};

MDBDropdownHeader.defaultProps = {
  tag: 'h6',
};

export default MDBDropdownHeader;
