import React, { useEffect, useState, useCallback, useRef } from 'react';
import clsx from 'clsx';
import type { ModalProps } from './types';
const MDBModal: React.FC<ModalProps> = ({
  animationDirection,
  backdrop,
  children,
  className,
  closeOnEsc,
  getOpenState,
  modalRef,
  show,
  staticBackdrop,
  tag: Tag,
  ...props
}) => {
  const [showModal, setShowModal] = useState(show);
  const [isReadyToHide, setIsReadyToHide] = useState(show);
  const [staticModal, setStaticModal] = useState(false);
  const classes = clsx(
    'modal',
    'fade',
    animationDirection,
    isReadyToHide && show && 'show',
    staticModal && 'modal-static',
    className
  );
  const modalInnerRef = useRef<HTMLElement>(null);
  const hasVScroll = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
  const [locker, setLocker] = useState(false);

  const modalReference = modalRef ? modalRef : modalInnerRef;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!staticBackdrop && e.target === modalReference.current) {
        setShowModal(false);

        if (backdrop) {
          if (show || showModal) {
            document.body.classList.toggle('modal-open');
          }

          if (hasVScroll) {
            setLocker(true);
            if (document.body.classList.contains('modal-open')) {
              document.body.style.paddingRight = '17px';
            } else {
              document.body.style.paddingRight = '';
            }
          }
        }

        getOpenState && getOpenState(false);
      } else if (staticBackdrop) {
        setStaticModal(true);

        setTimeout(() => {
          setStaticModal(false);
        }, 300);
      }
    },
    [modalReference, getOpenState, backdrop] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (!staticBackdrop && e.key === 'Escape') {
        setShowModal(false);

        if (backdrop) {
          if (show || showModal) {
            document.body.classList.toggle('modal-open');
          }

          if (hasVScroll) {
            setLocker(true);
            if (document.body.classList.contains('modal-open')) {
              document.body.style.paddingRight = '17px';
            } else {
              document.body.style.paddingRight = '';
            }
          }
        }

        getOpenState && getOpenState(false);
      } else if (staticBackdrop) {
        setStaticModal(true);

        setTimeout(() => {
          setStaticModal(false);
        }, 300);
      }
    },
    [getOpenState, closeOnEsc] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    setShowModal(show);

    if (backdrop) {
      if (show || showModal) {
        document.body.classList.toggle('modal-open');
      }

      if (hasVScroll) {
        setLocker(true);
        if (document.body.classList.contains('modal-open')) {
          document.body.style.paddingRight = '17px';
        } else {
          document.body.style.paddingRight = '';
        }
      }
    }

    getOpenState && getOpenState(show);
  }, [show, getOpenState]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (showModal) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleClick, handleEscKey, showModal]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;
    if (showModal) {
      setIsReadyToHide(true);
      timer = setTimeout(() => {
        setShowModal(true);
      }, 4);
    } else {
      setShowModal(false);
      secondTimer = setTimeout(() => {
        setIsReadyToHide(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [showModal]);
  return (
    <>
      <Tag
        style={{
          display: show || isReadyToHide ? 'block' : 'none',
          paddingRight: show && locker ? '17px' : '',
        }}
        className={classes}
        ref={modalReference}
        {...props}
      >
        {children}
      </Tag>
      {backdrop && isReadyToHide && <div className='modal-backdrop fade show'></div>}
    </>
  );
};
MDBModal.defaultProps = { tag: 'div', backdrop: true, closeOnEsc: true, staticBackdrop: false, show: false };
export default MDBModal;
