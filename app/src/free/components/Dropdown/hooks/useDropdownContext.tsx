'use client';

import { useContext } from 'react';
import { DropdownContext } from '../contexts/DropdownContext';

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);

  if (!ctx) {
    throw new Error('Missing context data');
  }

  return ctx;
};
