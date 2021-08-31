import React, { useEffect, useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import type { ModalProps } from './types';
import ReactDOM from 'react-dom';
const MDBModal: React.FC<ModalProps> = ({
  animationDirection,
  backdrop,
  children,
  className,
  getOpenState,
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
      getOpenState && getOpenState(false);
    }, 150);
    setTimeout(() => {
      setInnerShow(false);
    }, 350);
  }, [getOpenState]);

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
    },
    [closeModal, isOpenModal, staticBackdrop]
  );

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
  }, [innerShow]);

  useEffect(() => {
    if (show) {
      setInnerShow(true);
      setTimeout(() => {
        setIsOpenBackrop(true);
      }, 0);
      setTimeout(() => {
        setIsOpenModal(true);
        getOpenState && getOpenState(true);
      }, 150);
    } else {
      closeModal();
    }
  }, [show, closeModal, getOpenState]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown, handleClickOutside]);

  return (
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
  );
};
MDBModal.defaultProps = { tag: 'div', backdrop: true };
export default MDBModal;
