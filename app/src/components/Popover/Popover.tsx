import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MDBBtn from '../Button/Button';
import type { PopoverProps } from './types';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

const MDBPopover: React.FC<PopoverProps> = ({
  className,
  btnClassName,
  btnChildren,
  children,
  tag: Tag,
  popperTag: PopperTag,
  isOpen,
  placement,
  dismiss,
  options,
  poperStyle,
  onClick,
  ...props
}): JSX.Element => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement, ...options });
  const [isOpenState, setIsOpenState] = useState<undefined | boolean>(isOpen);
  const [attachELements, setAttachELements] = useState(false);
  const [show, setShow] = useState(false);

  const [isClickOutside, setIsClickOutside] = useState(false);

  const classes = clsx(
    'popover fade',
    show && 'show',
    `bs-popover-${placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement}`,
    className
  );

  const handleBtnClick = (e: MouseEvent) => {
    if (dismiss) {
      setIsClickOutside(true);
      setIsOpenState(true);
    } else {
      setIsOpenState(!isOpenState);
    }

    onClick && onClick(e);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsOpenState(false);
    }
  }, [isOpen]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        isClickOutside &&
        popperElement &&
        popperElement !== null &&
        isOpenState &&
        referenceElement &&
        referenceElement !== null
      ) {
        if (!referenceElement.contains(e.target as Node)) {
          setIsOpenState(false);
        }
      }
    },
    [isClickOutside, isOpenState, popperElement, referenceElement]
  );

  useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpenState) {
      setAttachELements(true);
      setTimeout(() => {
        setShow(true);
      }, 150);
    } else {
      timer = setTimeout(() => {
        setAttachELements(false);
      }, 150);

      setShow(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpenState]);

  useEffect(() => {
    if (isOpenState) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isOpenState]);

  return (
    <>
      <Tag onClick={handleBtnClick} className={btnClassName} {...props} ref={setReferenceElement}>
        {btnChildren}
      </Tag>

      {attachELements &&
        ReactDOM.createPortal(
          <PopperTag
            className={classes}
            ref={setPopperElement}
            style={{ ...styles.popper, ...poperStyle }}
            {...attributes.popper}
            data-testid='popoverTestID'
          >
            {children}
          </PopperTag>,
          document.body
        )}
    </>
  );
};

MDBPopover.defaultProps = {
  tag: MDBBtn,
  popperTag: 'div',
  placement: 'bottom',
};

export default MDBPopover;
