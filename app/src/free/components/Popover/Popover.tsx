'use client';

import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import MDBBtn from '../Button/Button';
import type { PopoverProps } from './types';
import { usePopper } from 'react-popper';
import { useOpenStatus } from '../../../utils/hooks';
import Portal from '../../../../src/utils/Portal';

const MDBPopover: React.FC<PopoverProps> = ({
  className,
  btnClassName,
  btnChildren,
  children,
  tag: Tag = MDBBtn,
  onOpen,
  onClose,
  popperTag: PopperTag = 'div',
  open,
  placement = 'bottom',
  dismiss,
  options,
  poperStyle,
  onClick,
  disablePortal = false,
  ...props
}): JSX.Element => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement, ...options });
  const [isOpenState, setIsOpenState] = useState<boolean>(open ?? false);
  const isOpen = useOpenStatus(isOpenState, open);
  const [attachELements, setAttachELements] = useState(false);
  const [isClickOutside, setIsClickOutside] = useState(false);

  const classes = clsx('popover fade', attachELements && isOpen && 'show', className);

  const handleBtnClick = (e: any) => {
    if (isOpen && !dismiss) {
      onClose?.();
    } else if (!isOpen) {
      onOpen?.();
    }
    if (dismiss) {
      setIsClickOutside(true);
      setIsOpenState(true);
    } else {
      setIsOpenState(!isOpen);
    }

    onClick && onClick(e);
  };

  const handleClickOutside = useCallback(
    (e: any) => {
      if (
        isClickOutside &&
        popperElement &&
        isOpen &&
        referenceElement &&
        !referenceElement.contains(e.target as Node)
      ) {
        setIsOpenState(false);
        onClose?.();
      }
    },
    [isClickOutside, isOpen, popperElement, referenceElement, onClose]
  );

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setAttachELements(isOpen);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isOpen]);

  return (
    <>
      <Tag onClick={handleBtnClick} className={btnClassName} {...props} ref={setReferenceElement}>
        {btnChildren}
      </Tag>

      {(attachELements || isOpen) && (
        <Portal disablePortal={disablePortal}>
          <PopperTag
            className={classes}
            ref={setPopperElement}
            style={{ ...styles.popper, ...poperStyle }}
            {...attributes.popper}
          >
            {children}
          </PopperTag>
        </Portal>
      )}
    </>
  );
};

export default MDBPopover;
