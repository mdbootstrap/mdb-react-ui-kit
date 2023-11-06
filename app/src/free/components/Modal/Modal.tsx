'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import type { ModalProps } from './types';
import ReactDOM from 'react-dom';

const MDBModal: React.FC<ModalProps> = ({
  animationDirection,
  appendToBody,
  backdrop = true,
  children,
  className,
  closeOnEsc = true,
  setOpen,
  leaveHiddenModal = true,
  modalRef,
  onClose,
  onClosePrevented,
  onOpen,
  open,
  staticBackdrop,
  nonInvasive = false,
  tag: Tag = 'div',
  ...props
}) => {
  const [isOpenBackdrop, setIsOpenBackrop] = useState(open);
  const [isOpenModal, setIsOpenModal] = useState(open);
  const [innerShow, setInnerShow] = useState(open);
  const [staticModal, setStaticModal] = useState(false);
  const [focusedElement, setFocusedElement] = useState(0);
  const [focusableElements, setFocusableElements] = useState<any>([]);

  const modalInnerRef = useRef<HTMLElement>(null);
  const modalReference = modalRef ? modalRef : modalInnerRef;
  const classes = clsx(
    'modal',
    staticModal && 'modal-static',
    animationDirection,
    'fade',
    isOpenModal && 'show',
    isOpenBackdrop && nonInvasive && 'modal-non-invasive-show',
    className
  );
  const backdropClasses = clsx('modal-backdrop', 'fade', isOpenBackdrop && 'show');

  const closeModal = useCallback(() => {
    setIsOpenModal((isCurrentlyShown) => {
      isCurrentlyShown && onClose?.();
      return false;
    });

    setTimeout(() => {
      setIsOpenBackrop(false);
      setOpen?.(false);
    }, 150);
    setTimeout(() => {
      setInnerShow(false);
    }, 350);
    //eslint-disable-next-line
  }, [onClose, setOpen]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (nonInvasive) {
        return;
      }

      if (isOpenModal && event.target === modalReference.current) {
        if (!staticBackdrop) {
          closeModal();
        } else {
          setStaticModal(true);
          onClosePrevented?.();
          setTimeout(() => {
            setStaticModal(false);
          }, 300);
        }
      }
    },
    [isOpenModal, modalReference, staticBackdrop, closeModal, onClosePrevented, nonInvasive]
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isOpenModal && event.key === 'Tab') {
        event.preventDefault();

        setFocusedElement(focusedElement + 1);
      }

      if (closeOnEsc) {
        if (isOpenModal && event.key === 'Escape') {
          if (!staticBackdrop) {
            closeModal();
          } else {
            setStaticModal(true);
            onClosePrevented?.();
            setTimeout(() => {
              setStaticModal(false);
            }, 300);
          }
        }
      }
    },
    [isOpenModal, closeOnEsc, focusedElement, staticBackdrop, closeModal, onClosePrevented]
  );

  useEffect(() => {
    const focusable = modalReference.current?.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]'
    ) as NodeListOf<HTMLElement>;

    const filtered = Array.from(focusable)
      .filter((el) => el.tabIndex !== -1)
      .sort((a, b) => {
        if (a.tabIndex === b.tabIndex) {
          return 0;
        }
        if (b.tabIndex === null) {
          return -1;
        }
        if (a.tabIndex === null) {
          return 1;
        }
        return a.tabIndex - b.tabIndex;
      });

    setFocusableElements(filtered);
    setFocusedElement(filtered.length - 1);
  }, [modalReference]);

  useEffect(() => {
    if (focusableElements && focusableElements.length > 0) {
      if (focusedElement === focusableElements.length) {
        (focusableElements[0] as HTMLElement).focus();
        setFocusedElement(0);
      } else {
        (focusableElements[focusedElement] as HTMLElement).focus();
      }
    }
  }, [focusedElement, focusableElements]);

  useEffect(() => {
    const getScrollbarWidth = () => {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    };

    const hasVScroll = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;

    if (innerShow && hasVScroll && !nonInvasive) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [innerShow, nonInvasive]);

  useEffect(() => {
    if (open) {
      onOpen?.();
      setInnerShow(true);
      setTimeout(() => {
        setIsOpenBackrop(true);
      }, 0);
      setTimeout(() => {
        setIsOpenModal(true);
        setOpen?.(true);
      }, 150);
    } else {
      closeModal();
    }
  }, [open, closeModal, setOpen, onOpen]);

  useEffect(() => {
    const addMouseUpListener = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.modal-dialog')) {
        window.addEventListener('mouseup', handleClickOutside, { once: true });
      }
    };
    window.addEventListener('mousedown', addMouseUpListener);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('mousedown', addMouseUpListener);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown, handleClickOutside]);

  const appendToBodyTemplate = (
    <>
      {(leaveHiddenModal || open || innerShow) &&
        ReactDOM.createPortal(
          <>
            <Tag
              className={classes}
              ref={modalReference}
              style={{ display: innerShow || open ? 'block' : 'none', pointerEvents: nonInvasive ? 'none' : 'initial' }}
              {...props}
            >
              {children}
            </Tag>
            {ReactDOM.createPortal(
              backdrop && innerShow && !nonInvasive && <div className={backdropClasses}></div>,
              document.body
            )}
          </>,
          document.body
        )}
    </>
  );

  const modalTemplate = (
    <>
      {(leaveHiddenModal || open || innerShow) && (
        <>
          <Tag
            className={classes}
            ref={modalReference}
            style={{ display: innerShow || open ? 'block' : 'none', pointerEvents: nonInvasive ? 'none' : 'initial' }}
            {...props}
          >
            {children}
          </Tag>
          {ReactDOM.createPortal(
            backdrop && innerShow && !nonInvasive && <div onClick={closeModal} className={backdropClasses}></div>,
            document.body
          )}
        </>
      )}
    </>
  );

  return <>{appendToBody ? appendToBodyTemplate : modalTemplate}</>;
};

export default MDBModal;
