import clsx from 'clsx';
import React, { useEffect, useCallback, useState } from 'react';
import type { DropdownProps } from './types';
import { DropdownContext } from './context';
import { usePopper } from 'react-popper';
import { flip } from '@popperjs/core';

const MDBDropdown: React.FC<DropdownProps> = ({
  className,
  tag: Tag,
  group,
  isOpen,
  children,
  dropup,
  dropright,
  dropleft,
  options,
  animation,
  placement,
  ...props
}): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState<undefined | boolean | any>(isOpen);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const [isPlacement, setIsPlacement] = useState(placement);
  // eslint-disable-next-line prefer-const
  let [activeIndex, setActiveIndex] = useState<number>(-1);
  const [countLength, setCountLength] = useState<number>(-1);

  useEffect(() => {
    if (dropup) {
      setIsPlacement('top-start');
    } else if (dropright) {
      setIsPlacement('right-start');
    } else if (dropleft) {
      setIsPlacement('left-start');
    } else {
      setIsPlacement('bottom-start');
    }
  }, [dropleft, dropright, dropup]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: isPlacement,
    modifiers: [flip],
    ...options,
  });

  const classes = clsx(
    group ? 'btn-group' : 'dropdown',
    dropup && 'dropup',
    dropright && 'dropend',
    dropleft && 'dropstart',
    className
  );

  const handleOpenClose = (): void => setIsOpenState(!isOpenState);
  const handleClose = (): void => setIsOpenState(false);
  const getCounter = (el: any): void => setCountLength(el);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (popperElement && popperElement !== null && isOpenState && referenceElement && referenceElement !== null) {
        if (!popperElement.contains(event.target as Node) && !referenceElement.contains(event.target as Node)) {
          setIsOpenState(false);
        }
      }
    },
    [isOpenState, popperElement, referenceElement]
  );

  useEffect(() => {
    const wo = document.body.scrollTop;
    console.log(wo);
  });

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isOpenState) {
      setActiveIndex(countLength);
    }
  }, [countLength, isOpenState]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (isOpenState) {
      setIsFadeIn(true);

      timer = setTimeout(() => {
        setIsFadeIn(false);
      }, 300);
    } else {
      setIsFadeOut(true);

      secondTimer = setTimeout(() => {
        setIsFadeOut(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [isOpenState]);

  return (
    <DropdownContext.Provider
      value={{
        animation,
        activeIndex,
        handleClose,
        handleOpenClose,
        isOpenState,
        setReferenceElement,
        setPopperElement,
        styles,
        attributes,
        animatedFadeIn: isFadeIn,
        animatedFadeOut: isFadeOut,
        getCount: (el) => getCounter(el),
      }}
    >
      <Tag className={classes} {...props}>
        {children}
      </Tag>
    </DropdownContext.Provider>
  );
};

MDBDropdown.defaultProps = {
  tag: 'div',
  animation: true,
};

export default MDBDropdown;
