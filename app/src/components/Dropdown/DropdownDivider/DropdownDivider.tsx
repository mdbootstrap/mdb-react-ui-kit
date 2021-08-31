import React from 'react';
import type { DropdownDividerProps } from './types';

const MDBDropdownDivider: React.FC<DropdownDividerProps> = ({ tag: Tag, ...props }): JSX.Element => {
  return <Tag {...props} className='dropdown-divider' />;
};

MDBDropdownDivider.defaultProps = {
  tag: 'div',
};

export default MDBDropdownDivider;
