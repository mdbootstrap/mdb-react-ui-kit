import React, { useEffect, useState, useCallback, useRef, RefObject, useMemo } from 'react';
import clsx from 'clsx';
import type { FocusableElement, ModalProps } from './types';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useAnimationPositionValues from './hooks/useAnimationPositionValues';
import { useOpenStatus } from '../../../utils/hooks';
import { getFocusableElements, getFocusedItemIndex } from './utils/utils';
import type { ComponentType } from 'react';
import Portal from '../../../utils/Portal';

const defaultAnimationAnimate = {
  opacity: 1,
  top: 0,
  left: 0,
};

const MDBModal = ({
  animationDirection = 'top',
  appendToBody,
  backdrop = true,
  children,
  className,
  closeOnEsc = true,
  leaveHiddenModal = false,
  modalRef,
  onClose,
  onClosePrevented,
  onOpen,
  open,
  defaultOpen = false,
  staticBackdrop,
  nonInvasive = false,
  tag: Tag = 'div',
  animationVariants = {},
  ...props
}: ModalProps) => {
  const [isOpenState, setIsOpenState] = useState(defaultOpen);
  const isOpen = useOpenStatus(isOpenState, open);
  const [staticModalAnimation, setStaticModalAnimation] = useState(false);

  const [focusableElements, setFocusableElements] = useState<FocusableElement[]>([]);

  const MotionComponent = useMemo(() => {
    return motion(Tag as ComponentType<ModalProps>);
  }, [Tag]);

  const modalInnerRef = useRef<HTMLDivElement>(null);
  const modalReference: RefObject<HTMLDivElement> = modalRef ? modalRef : modalInnerRef;

  const animationInitial = {
    opacity: 0,
    ...useAnimationPositionValues(animationDirection),
    ...(animationVariants.initial ? animationVariants.initial : {}),
  };

  const animationAnimate = {
    ...defaultAnimationAnimate,
    ...(animationVariants.animate ? animationVariants.animate : {}),
  };

  const animationExit = {
    ...animationInitial,
    ...(animationVariants.exit ? animationVariants.exit : {}),
  };

  const classes = clsx(
    'modal',
    staticModalAnimation && 'modal-static',
    animationDirection,
    'fade',
    isOpen && 'show',
    isOpen && nonInvasive && 'modal-non-invasive-show',
    className
  );
  const backdropClasses = clsx('modal-backdrop', 'fade', isOpen && 'show');

  const closeModal = useCallback(() => {
    setIsOpenState(false);
    onClose?.();
  }, [onClose]);

  const handleStaticBackdropClick = useCallback(() => {
    setStaticModalAnimation(true);
    onClosePrevented?.();
    setTimeout(() => {
      setStaticModalAnimation(false);
    }, 300);
  }, [onClosePrevented]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (nonInvasive && !isOpen) {
        return;
      }
      if (isOpen && event.target === modalReference.current) {
        if (!staticBackdrop) {
          closeModal();
        } else {
          handleStaticBackdropClick();
        }
      }
    },
    [isOpen, modalReference, staticBackdrop, closeModal, nonInvasive, handleStaticBackdropClick]
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Tab') {
        event.preventDefault();

        const isShiftTab = event.shiftKey;
        const focusedElementIndex = focusableElements.findIndex((item) => {
          return item.focused;
        });

        const newIndex = getFocusedItemIndex(focusedElementIndex, isShiftTab, focusableElements.length);

        setFocusableElements((prev) => {
          return prev?.map((item, index) => {
            return {
              ...item,
              focused: index === newIndex,
            };
          });
        });

        focusableElements[newIndex].element.focus();
      }

      if (closeOnEsc && isOpen && event.key === 'Escape') {
        event.preventDefault();
        staticBackdrop ? handleStaticBackdropClick() : closeModal();
      }
    },
    [isOpen, closeOnEsc, staticBackdrop, closeModal, handleStaticBackdropClick, focusableElements]
  );

  useEffect(() => {
    if (!modalReference || !isOpen) {
      setFocusableElements([]);
      return;
    }

    setFocusableElements(() => {
      return getFocusableElements(modalReference);
    });
  }, [modalReference, isOpen, children]);

  useEffect(() => {
    const getScrollbarWidth = () => {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    };

    const hasVScroll = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;

    if (isOpen && hasVScroll && !nonInvasive) {
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
  }, [isOpen, nonInvasive]);

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

  return (
    <Portal disablePortal={!appendToBody}>
      <AnimatePresence>
        {(isOpen || leaveHiddenModal) && (
          <>
            <MotionComponent
              initial={animationInitial}
              animate={animationAnimate}
              exit={animationExit}
              className={classes}
              ref={modalReference}
              style={{ display: isOpen ? 'block' : 'none', pointerEvents: nonInvasive ? 'none' : 'initial' }}
              {...props}
            >
              {children}
            </MotionComponent>
            {backdrop && isOpen && !nonInvasive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  staticBackdrop ? onClosePrevented?.() : closeModal();
                }}
                className={backdropClasses}
              ></motion.div>
            )}
          </>
        )}
        ),
      </AnimatePresence>
    </Portal>
  );
};

export default MDBModal;
