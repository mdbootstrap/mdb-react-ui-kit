'use client';

import React from 'react';
import { DropdownProvider } from './contexts/DropdownContext';
import { DropdownBody } from './DropdownBody/DropdownBody';
import type { DropdownProps } from './types';

const MDBDropdown = ({ animation, onClose, onOpen, ...props }: DropdownProps) => {
  return (
    <DropdownProvider animation={animation} onClose={onClose} onOpen={onOpen} {...props}>
      <DropdownBody {...props} />
    </DropdownProvider>
  );
};

export default MDBDropdown;
