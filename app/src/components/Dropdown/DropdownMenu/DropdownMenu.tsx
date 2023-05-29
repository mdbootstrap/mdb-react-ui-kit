import clsx from 'clsx';
import React, { Children, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import { useDropdownContext } from '../hooks/useDropdownContext';
import { useKeyboard } from '../hooks/useKeyboard';
import { useFade } from '../hooks/useFade';
import type { DropdownMenuProps } from './types';
import './style.css';
import { usePopper } from 'react-popper';
import { flip } from '@popperjs/core';

const MDBDropdownMenu = ({
  className,
  tag: Tag = 'ul',
  children,
  style,
  dark,
  responsive = '',
  appendToBody = false,
  alwaysOpen,
  ...props
}: DropdownMenuProps) => {
  const {
    activeIndex,
    setPopperElement,
    isOpenState,
    animation,
    referenceElement,
    popperElement,
    options,
    dropleft,
    dropup,
    dropright,
  } = useDropdownContext();

  const { show, isFadeIn, isFadeOut } = useFade();

  useKeyboard(children);

  const calculatePlacement = () => {
    if (dropright) {
      return 'right-start';
    }

    if (dropleft) {
      return 'left-start';
    }

    const isEnd = popperElement && getComputedStyle(popperElement).getPropertyValue('--mdb-position').trim() === 'end';

    if (dropup) {
      return isEnd ? 'top-end' : 'top-start';
    }

    return isEnd ? 'bottom-end' : 'bottom-start';
  };

  const { styles } = usePopper(referenceElement, popperElement, {
    placement: calculatePlacement(),
    modifiers: [flip],
    ...options,
  });

  const classes = clsx(
    'dropdown-menu',
    dark && 'dropdown-menu-dark',
    isOpenState && 'show',
    animation && 'animation',
    isFadeIn && 'fade-in',
    isFadeOut && 'fade-out',
    responsive && `dropdown-menu-${responsive}`,
    className
  );

  if (!show && !alwaysOpen) return null;

  const menu = (
    <Tag
      className={classes}
      style={{ position: 'absolute', zIndex: 1000, ...styles.popper, ...style }}
      ref={setPopperElement}
      {...props}
    >
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          tabIndex: 1,
          'data-active': activeIndex === idx && true,
          className: clsx(activeIndex === idx ? 'active' : '', child.props.className),
        })
      )}
    </Tag>
  );

  return <>{appendToBody ? createPortal(menu, document.body) : menu}</>;
};

export default MDBDropdownMenu;
