import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { usePopper } from 'react-popper';
import type { TooltipProps } from './types';
import MDBBtn from '../Button/Button';

const MDBTooltip: React.FC<TooltipProps> = ({
  className,
  children,
  disableMouseDown,
  tag: Tag,
  tooltipTag: TooltipTag,
  options,
  placement,
  title,
  wrapperProps,
  wrapperClass,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isOpenState, setIsOpenState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [isReadyToHide, setIsReadyToHide] = useState(false);

  const classes = clsx('tooltip', isFaded && 'show', 'fade', `bs-tooltip-${placement}`, className);

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

  const handleOnMouseEnter = (e: MouseEvent) => {
    setIsOpenState(true);

    onMouseEnter && onMouseEnter(e);
  };

  const handleOnMouseLeave = (e: MouseEvent) => {
    setIsOpenState(false);

    onMouseLeave && onMouseLeave(e);
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
      >
        {children}
      </Tag>

      {isReadyToHide &&
        ReactDOM.createPortal(
          <TooltipTag
            ref={setPopperElement}
            className={classes}
            style={styles.popper}
            {...attributes.popper}
            role='tooltip'
            {...props}
          >
            <div className='tooltip-inner'>{title}</div>
          </TooltipTag>,
          document.body
        )}
    </>
  );
};

MDBTooltip.defaultProps = { tag: MDBBtn, tooltipTag: 'div', placement: 'top' };

export default MDBTooltip;
