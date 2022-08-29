import { useEffect, useState } from 'react';
import { useDropdownContext } from './useDropdownContext';

export const useFade = () => {
  const { isOpenState } = useDropdownContext();

  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [show, setShow] = useState(isOpenState);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isOpenState) {
      setIsFadeOut(true);
      setIsFadeIn(false);

      timer = setTimeout(() => {
        setIsFadeOut(false);
        setShow(false);
      }, 300);
    }

    if (isOpenState) {
      setIsFadeIn(true);
      setIsFadeOut(false);
      setShow(true);

      timer = setTimeout(() => {
        setIsFadeIn(false);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [isOpenState]);

  return { show, isFadeIn, isFadeOut };
};
