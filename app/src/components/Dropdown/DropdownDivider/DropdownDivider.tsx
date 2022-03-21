import clsx from 'clsx';
import React from 'react';
import type { DropdownDividerProps } from './types';

const MDBDropdownDivider: React.FC<DropdownDividerProps> = ({ className, tag: Tag, ...props }): JSX.Element => {
  const classes = clsx('dropdown-divider', className);
  return <Tag {...props} className={classes} />;
};

MDBDropdownDivider.defaultProps = {
  tag: 'div',
};

export default MDBDropdownDivider;
