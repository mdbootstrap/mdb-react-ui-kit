'use client';

import React, { useState, useEffect, useCallback, SyntheticEvent } from 'react';
import clsx from 'clsx';
import { usePopper } from 'react-popper';
import type { TooltipProps } from './types';
import MDBBtn from '../Button/Button';
import Portal from '../../../utils/Portal';

const MDBTooltip: React.FC<TooltipProps> = ({
  className,
  children,
  disableMouseDown,
  tag: Tag = MDBBtn,
  tooltipTag: TooltipTag = 'div',
  options,
  placement = 'top',
  title,
  wrapperProps,
  wrapperClass,
  onOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  type,
  ...props
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isOpenState, setIsOpenState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [isReadyToHide, setIsReadyToHide] = useState(false);

  const classes = clsx('tooltip', isFaded && 'show', 'fade', className);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    ...options,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (isOpenState || isClicked) {
      setIsReadyToHide(true);
      timer = setTimeout(() => {
        setIsFaded(true);
      }, 4);
    } else {
      setIsFaded(false);

      secondTimer = setTimeout(() => {
        setIsReadyToHide(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [isOpenState, isClicked]);

  const handleOnMouseEnter = (e: SyntheticEvent) => {
    onOpen?.(e);
    !e.defaultPrevented && setIsOpenState(true);
    onMouseEnter?.(e);
  };

  const handleOnMouseLeave = (e: SyntheticEvent) => {
    onClose?.(e);
    !e.defaultPrevented && setIsOpenState(false);
    onMouseLeave?.(e);
  };

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === referenceElement) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    },
    [referenceElement]
  );

  useEffect(() => {
    if (!disableMouseDown) {
      document.addEventListener('mousedown', handleClick);
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }
  }, [handleClick, disableMouseDown]);
  return (
    <>
      <Tag
        className={wrapperClass}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ref={setReferenceElement}
        {...wrapperProps}
        type={type}
      >
        {children}
      </Tag>

      {isReadyToHide && (
        <Portal>
          <TooltipTag
            ref={setPopperElement}
            className={classes}
            style={styles.popper}
            {...attributes.popper}
            role='tooltip'
            {...props}
          >
            <div className='tooltip-inner'>{title}</div>
          </TooltipTag>
        </Portal>
      )}
    </>
  );
};

export default MDBTooltip;
