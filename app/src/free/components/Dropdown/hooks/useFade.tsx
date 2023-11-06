'use client';

import { useEffect, useState } from 'react';
import { useDropdownContext } from './useDropdownContext';

export const useFade = () => {
  const { isOpenState } = useDropdownContext();

  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [open, setOpen] = useState(isOpenState);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isOpenState) {
      setIsFadeOut(true);
      setIsFadeIn(false);

      timer = setTimeout(() => {
        setIsFadeOut(false);
        setOpen(false);
      }, 300);
    }

    if (isOpenState) {
      setIsFadeIn(true);
      setIsFadeOut(false);
      setOpen(true);

      timer = setTimeout(() => {
        setIsFadeIn(false);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [isOpenState]);

  return { open, isFadeIn, isFadeOut };
};
