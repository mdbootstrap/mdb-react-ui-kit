import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import { returnAttributes } from '../utils';
import './Modal.css';

class Modal extends Component {
  state = {
    initialIsOpen: this.props.isOpen || false
  };

  modalContent = React.createRef();

  componentDidMount = () => {
    document.body.classList.add('modal-open');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('modal-open');
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { isOpen, overflowScroll } = this.props;
    const overflowStatement = overflowScroll ? 'overflow-y-scroll' : 'overflow-hidden';

    if (prevState.initialIsOpen !== isOpen) {
      this.setState({ initialIsOpen: isOpen }, () => {
        if (isOpen) {
          document.body.classList.add(overflowStatement);
        } else {
          document.body.classList.remove(overflowStatement);
        }
      });
    }
  };

  handleOnEntered = (type, node) => {
    if (type === 'backdrop' && this.props.fade === false) {
      return;
    }

    node.classList.add('show');
    this.props.autoFocus && node.focus();

    if (type === 'modal') {
      this.props.showModal && this.props.showModal();
    }
  };

  handleOnExit = (type, node) => {
    if (type === 'backdrop' && this.props.fade === false) {
      return;
    }

    node.classList.remove('show');

    if (type === 'modal') {
      this.props.hideModal && this.props.hideModal();
    }
  };

  handleOnExited = () => {
    this.props.hiddenModal && this.props.hiddenModal();
  };

  handleBackdropClick = e => {
    if (!this.props.backdrop || (e.target.closest('[role="dialog"]') && !e.target.classList.contains('modal'))) {
      return;
    }

    if (!(e.clientX > e.target.clientWidth || e.clientY > e.target.clientHeight)) {
      if (!this.modalContent.contains(e.target)) {
        if (!this.props.disableBackdrop) {
          this.props.toggle();
        }
      }
    }
  };

  handleEscape = e => {
    if (this.props.keyboard && e.keyCode === 27) {
      e.preventDefault();
      this.props.toggle();
    }
  };

  render() {
    const {
      animation,
      backdrop,
      backdropClassName,
      backdropTransitionTimeout,
      cascading,
      centered,
      children,
      className,
      contentClassName,
      disableFocusTrap,
      fade,
      frame,
      fullHeight,
      id,
      inline,
      isOpen,
      keyboard,
      modalStyle,
      modalStylesWithoutBackdrop,
      modalTransitionTimeout,
      noClickableBodyWithoutBackdrop,
      overflowScroll,
      position,
      role,
      side,
      size,
      tabIndex,
      toggle,
      wrapClassName,
      wrapperStyles,
      zIndex,
      ...attributes
    } = this.props;

    const { initialIsOpen } = this.state;

    const whichPosition = () => {
      if (position === 'bottom-right') {
        return { top: 'auto', bottom: 10, right: 10, left: 'auto' };
      } else if (position === 'bottom-left') {
        return { top: 'auto', bottom: 10, right: 'auto', left: 10 };
      } else if (position === 'top-right') {
        return { top: 10, bottom: 'auto', right: 10, left: 'auto' };
      } else if (position === 'top-left') {
        return { top: 10, bottom: 'auto', right: 'auto', left: 10 };
      } else if (position === 'right') {
        return { right: 0 };
      } else if (position === 'left') {
        return { left: 0 };
      } else if (position === 'bottom') {
        return { bottom: 0 };
      } else if (position === 'top') {
        return { top: 0 };
      } else {
        return { top: 0, bottom: 0, right: 0, left: 0 };
      }
    };

    const timeout = fade ? modalTransitionTimeout : 0;
    const backdropTimeout = fade ? backdropTransitionTimeout : 0;

    const removeBackdropClass = {
      position: 'fixed',
      ...whichPosition(),
      ...modalStylesWithoutBackdrop
    };

    const removeBackdropConditions = !backdrop && initialIsOpen && !noClickableBodyWithoutBackdrop;

    const modalDialogClasses = classNames(
      {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered,
        [`modal-${size}`]: size,
        [`modal-${position}`]: position,
        [`modal-notify white-text modal-${modalStyle}`]: modalStyle
      },
      'modal-dialog',
      className
    );
    const splitPosition = position.split('-');
    const wrapperClasses = classNames(
      {
        modal: !inline,
        fade,
        top: fade && !animation && !position,
        animation: fade && animation
      },
      fade && position && position && splitPosition.length > 1 ? splitPosition[1] : splitPosition[0],
      wrapClassName
    );

    const backdropClasses = classNames('modal-backdrop', fade ? 'fade' : 'show', backdropClassName);
    const contentClasses = classNames('modal-content', contentClassName);
    const modalAttributes = returnAttributes({
      style: {
        display: 'block',
        position: removeBackdropConditions && 'fixed',
        width: removeBackdropConditions && 0
      },
      id,
      tabIndex,
      role,
      'aria-hidden': 'true',
      ...attributes
    });
    const styles = removeBackdropConditions ? removeBackdropClass : {};

    const modal = (
      <div
        data-test='modal'
        onKeyUp={this.handleEscape}
        className={wrapperClasses}
        style={wrapperStyles}
        {...modalAttributes}
      >
        <div style={styles} className={modalDialogClasses} role='document'>
          <div ref={elem => (this.modalContent = elem)} className={contentClasses}>
            {children}
          </div>
        </div>
      </div>
    );

    return (
      <>
        {backdrop && (
          <Transition
            timeout={backdropTimeout}
            in={initialIsOpen}
            appear={initialIsOpen}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered('backdrop', node)}
            onExit={node => this.handleOnExit('backdrop', node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={timeout}
          in={initialIsOpen}
          appear={initialIsOpen}
          mountOnEnter
          unmountOnExit
          onMouseDown={e => this.handleBackdropClick(e)}
          onEntered={node => this.handleOnEntered('modal', node)}
          onExit={node => this.handleOnExit('modal', node)}
        >
          {!disableFocusTrap ? <FocusTrap>{modal}</FocusTrap> : modal}
        </Transition>
      </>
    );
  }
}

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  disableBackdrop: false,
  disableFocusTrap: true,
  fade: true,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  overflowScroll: true,
  position: '',
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050,
  noClickableBodyWithoutBackdrop: false
};

Modal.propTypes = {
  animation: PropTypes.string,
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  backdropTransitionTimeout: PropTypes.number,
  cascading: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableBackdrop: PropTypes.bool,
  disableFocusTrap: PropTypes.bool,
  fade: PropTypes.bool,
  frame: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func,
  id: PropTypes.string,
  inline: PropTypes.bool,
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  modalStylesWithoutBackdrop: PropTypes.object,
  modalTransitionTimeout: PropTypes.number,
  noClickableBodyWithoutBackdrop: PropTypes.bool,
  overflowScroll: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  showModal: PropTypes.func,
  side: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.string,
  toggle: PropTypes.func,
  wrapClassName: PropTypes.string,
  wrapperStyles: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Modal;
export { Modal as MDBModal };
