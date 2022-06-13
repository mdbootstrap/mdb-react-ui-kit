import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
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
  onShow,
  onHide,
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
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen ?? false);
  const [attachELements, setAttachELements] = useState(false);

  const [isClickOutside, setIsClickOutside] = useState(false);

  const classes = clsx(
    'popover fade',
    attachELements && isOpenState && 'show',
    `bs-popover-${placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement}`,
    className
  );

  const handleBtnClick = (e: any) => {
    if (isOpenState && !dismiss) {
      onHide?.();
    } else if (!isOpenState) {
      onShow?.();
    }
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
    (e: any) => {
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
          onHide?.();
        }
      }
    },
    [isClickOutside, isOpenState, popperElement, referenceElement, onHide]
  );

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setAttachELements(isOpenState);
    }, 150);

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

      {(attachELements || isOpenState) &&
        ReactDOM.createPortal(
          <PopperTag
            className={classes}
            ref={setPopperElement}
            style={{ ...styles.popper, ...poperStyle }}
            {...attributes.popper}
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
