'use client';

import React, { createContext, useState } from 'react';
import { Dropdown, DropdownProviderProps } from './types';

export const DropdownContext = createContext<Dropdown | null>(null);

export const DropdownProvider = ({
  children,
  isOpen = false,
  options,
  animation = true,
  dropup,
  dropright,
  dropleft,
  onClose,
  onOpen,
}: DropdownProviderProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <DropdownContext.Provider
      value={{
        animation,
        activeIndex,
        isOpenState,
        setReferenceElement,
        setPopperElement,
        setActiveIndex,
        popperElement,
        setIsOpenState,
        referenceElement,
        onClose,
        onOpen,
        dropup,
        options,
        dropright,
        dropleft,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
