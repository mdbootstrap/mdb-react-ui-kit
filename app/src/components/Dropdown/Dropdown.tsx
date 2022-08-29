import React from 'react';
import { DropdownProvider } from './contexts/DropdownContext';
import { DropdownBody } from './DropdownBody/DropdownBody';
import type { DropdownProps } from './types';

const MDBDropdown = ({ animation, onHide, onShow, ...props }: DropdownProps) => {
  return (
    <DropdownProvider animation={animation} onHide={onHide} onShow={onShow} {...props}>
      <DropdownBody {...props} />
    </DropdownProvider>
  );
};

export default MDBDropdown;
