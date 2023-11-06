'use client';

import clsx from 'clsx';
import React, { MouseEvent } from 'react';
import MDBBtn from '../../Button/Button';
import { useDropdownContext } from '../hooks/useDropdownContext';
import type { DropdownToggleProps } from './types';

const MDBDropdownToggle = ({
  className,
  tag: Tag = MDBBtn,
  children,
  onClick,
  split,
  ...props
}: DropdownToggleProps) => {
  const { setIsOpenState, setReferenceElement, isOpenState, setActiveIndex, onClose, onOpen } = useDropdownContext();

  const classes = clsx('dropdown-toggle', split && 'dropdown-toggle-split', className);

  const handleOpenToggle = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    isOpenState ? onClose?.(e) : onOpen?.(e);

    if (e.defaultPrevented) {
      return;
    }
    setIsOpenState((prev) => !prev);

    setTimeout(() => setActiveIndex(-1), 300);
  };

  return (
    <Tag
      onClick={handleOpenToggle}
      ref={setReferenceElement}
      className={classes}
      aria-expanded={isOpenState ? true : false}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default MDBDropdownToggle;
