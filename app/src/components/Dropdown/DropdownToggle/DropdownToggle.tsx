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
  const { setIsOpenState, setReferenceElement, isOpenState, setActiveIndex, onHide, onShow } = useDropdownContext();

  const classes = clsx('dropdown-toggle', split && 'dropdown-toggle-split', className);

  const handleOpenToggle = (e: MouseEvent<HTMLElement>) => {
    isOpenState ? onHide?.() : onShow?.();

    setIsOpenState((prev) => !prev);
    onClick?.(e);

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
