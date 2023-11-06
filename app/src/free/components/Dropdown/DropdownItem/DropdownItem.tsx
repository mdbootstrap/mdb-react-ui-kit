'use client';

import React, { MouseEvent } from 'react';
import { useDropdownContext } from '../hooks/useDropdownContext';
import { ItemChild } from '../ItemChild/ItemChild';
import type { DropdownItemProps } from './types';
import './style.css';

const MDBDropdownItem = ({
  onClick,
  tag: Tag = 'li',
  childTag: ChildTag,
  children,
  style,
  link,
  divider,
  header,
  disabled,
  href,
  preventCloseOnClick,
  ...props
}: DropdownItemProps) => {
  const { setIsOpenState, onClose, setActiveIndex } = useDropdownContext();

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    onClose?.(e);
    onClick?.(e);
    if (disabled || preventCloseOnClick || e.defaultPrevented) {
      return;
    }

    setTimeout(() => setActiveIndex(-1), 300);
    setIsOpenState(false);
  };

  return (
    <Tag style={style} onClick={handleClose} {...props}>
      <ItemChild
        link={link}
        divider={divider}
        header={header}
        disabled={disabled}
        href={href}
        childTag={ChildTag}
        children={children}
      />
    </Tag>
  );
};

export default MDBDropdownItem;
