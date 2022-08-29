import React, { createContext, useState } from 'react';
import { usePopper } from 'react-popper';
import { flip } from '@popperjs/core';
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
  onHide,
  onShow,
}: DropdownProviderProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const calculatePlacement = () => {
    if (dropup) {
      return 'top-start';
    }

    if (dropright) {
      return 'right-start';
    }

    if (dropleft) {
      return 'left-start';
    }

    return 'bottom-start';
  };

  const { styles } = usePopper(referenceElement, popperElement, {
    placement: calculatePlacement(),
    modifiers: [flip],
    ...options,
  });

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
        styles,
        setIsOpenState,
        referenceElement,
        onHide,
        onShow,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
