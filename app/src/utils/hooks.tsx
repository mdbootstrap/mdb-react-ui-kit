import { useEffect, useState, useMemo, RefObject } from 'react';

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [observer, setObserver] = useState<any>(null);

  // prettier-ignore
  // const observer = useMemo(() => {
  //   return new IntersectionObserver(([entry]) => {
  //   setIntersecting(entry.isIntersecting)
  // });
  // }, []);

  useEffect(() => {
    setObserver(() => {
      return new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
    });
  }, []);

  useEffect(() => {
    if (!ref.current || !observer) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
};

const useOpenStatus = (openState: boolean, openProp?: boolean) => {
  const isOpen = useMemo(() => {
    if (openProp !== undefined) {
      return openProp;
    }
    return openState;
  }, [openProp, openState]);

  return isOpen;
};

export { useOnScreen, useOpenStatus };
