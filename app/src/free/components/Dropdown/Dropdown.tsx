'use client';

import React from 'react';
import { DropdownProvider } from './contexts/DropdownContext';
import { DropdownBody } from './DropdownBody/DropdownBody';
import type { DropdownProps } from './types';

const MDBDropdown = ({ animation, onClose, onOpen, wrapper = true, ...props }: DropdownProps) => {
  return (
    <DropdownProvider animation={animation} onClose={onClose} onOpen={onOpen} {...props}>
      <DropdownBody wrapper={wrapper} {...props} />
    </DropdownProvider>
  );
};

export default MDBDropdown;
