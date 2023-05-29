import { ReactPropTypes, SyntheticEvent, useCallback, useEffect } from 'react';
import { isNode } from '../helpers/typeguards';
import { useDropdownContext } from './useDropdownContext';

export const useClickOutside = () => {
  const { isOpenState, setIsOpenState, setActiveIndex, popperElement, referenceElement, onHide } = useDropdownContext();

  const handleClickOutside = useCallback(
    (e: MouseEvent | SyntheticEvent) => {
      onHide?.(e);
      if (
        !isOpenState ||
        !isNode(e.target) ||
        (popperElement && popperElement.contains(e.target)) ||
        (referenceElement && referenceElement.contains(e.target)) ||
        e.defaultPrevented
      ) {
        return;
      }
      setIsOpenState(false);

      setTimeout(() => setActiveIndex(-1), 300);
    },
    [isOpenState, setIsOpenState, setActiveIndex, popperElement, referenceElement, onHide]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
};
