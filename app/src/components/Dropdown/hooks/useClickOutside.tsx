import { useCallback, useEffect } from 'react';
import { isNode } from '../helpers/typeguards';
import { useDropdownContext } from './useDropdownContext';

export const useClickOutside = () => {
  const { isOpenState, setIsOpenState, setActiveIndex, popperElement, referenceElement, onHide } = useDropdownContext();

  const handleClickOutside = useCallback(
    ({ target }: MouseEvent) => {
      if (
        !isOpenState ||
        !isNode(target) ||
        (popperElement && popperElement.contains(target)) ||
        (referenceElement && referenceElement.contains(target))
      )
        return;

      setIsOpenState(false);
      onHide?.();
      setTimeout(() => setActiveIndex(-1), 300);
    },
    [isOpenState, setIsOpenState, setActiveIndex, popperElement, referenceElement, onHide]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
};
