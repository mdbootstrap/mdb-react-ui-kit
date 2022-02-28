import React, { useEffect, useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import type { ModalProps } from './types';
import ReactDOM from 'react-dom';

const MDBModal: React.FC<ModalProps> = ({
  animationDirection,
  appendToBody,
  backdrop,
  children,
  className,
  closeOnEsc,
  setShow,
  leaveHiddenModal,
  modalRef,
  show,
  staticBackdrop,
  tag: Tag,
  ...props
}) => {
  const [isOpenBackdrop, setIsOpenBackrop] = useState(show);
  const [isOpenModal, setIsOpenModal] = useState(show);
  const [innerShow, setInnerShow] = useState(show);
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
    className
  );
  const backdropClasses = clsx('modal-backdrop', 'fade', isOpenBackdrop && 'show');

  const closeModal = useCallback(() => {
    setIsOpenModal(false);

    setTimeout(() => {
      setIsOpenBackrop(false);
      setShow && setShow(false);
    }, 150);
    setTimeout(() => {
      setInnerShow(false);
    }, 350);
  }, [setShow]);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (isOpenModal && event.target === modalReference.current) {
        if (!staticBackdrop) {
          closeModal();
        } else {
          setStaticModal(true);
          setTimeout(() => {
            setStaticModal(false);
          }, 300);
        }
      }
    },
    [closeModal, modalReference, isOpenModal, staticBackdrop]
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
            setTimeout(() => {
              setStaticModal(false);
            }, 300);
          }
        }
      }
    },
    [closeModal, isOpenModal, staticBackdrop, closeOnEsc, focusedElement]
  );

  useEffect(() => {
    const focusable = modalReference.current?.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]'
    ) as any as Array<HTMLElement>;

    const filtered = Array.from(focusable)
      .filter((el: any) => el.tabIndex !== -1)
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

    if (innerShow && hasVScroll) {
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
  }, [innerShow]);

  useEffect(() => {
    if (show) {
      setInnerShow(true);
      setTimeout(() => {
        setIsOpenBackrop(true);
      }, 0);
      setTimeout(() => {
        setIsOpenModal(true);
        setShow && setShow(true);
      }, 150);
    } else {
      closeModal();
    }
  }, [show, closeModal, setShow]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown, handleClickOutside]);

  const appendToBodyTemplate = (
    <>
      {(leaveHiddenModal || show || innerShow) &&
        ReactDOM.createPortal(
          <>
            <Tag
              className={classes}
              ref={modalReference}
              style={{ display: innerShow || show ? 'block' : 'none' }}
              {...props}
            >
              {children}
            </Tag>
            {ReactDOM.createPortal(backdrop && innerShow && <div className={backdropClasses}></div>, document.body)}
          </>,
          document.body
        )}
    </>
  );

  const modalTemplate = (
    <>
      {(leaveHiddenModal || show || innerShow) && (
        <>
          <Tag
            className={classes}
            ref={modalReference}
            style={{ display: innerShow || show ? 'block' : 'none' }}
            {...props}
          >
            {children}
          </Tag>
          {ReactDOM.createPortal(backdrop && innerShow && <div className={backdropClasses}></div>, document.body)}
        </>
      )}
    </>
  );

  return <>{appendToBody ? appendToBodyTemplate : modalTemplate}</>;
};
MDBModal.defaultProps = { tag: 'div', backdrop: true, closeOnEsc: true, leaveHiddenModal: true };
export default MDBModal;
