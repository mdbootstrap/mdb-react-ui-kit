import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import { returnAttributes } from '../utils';
import './Modal.css';

class Modal extends Component {
  state = {
    isOpen: this.props.isOpen || false
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
    const overflowStatement = overflowScroll
      ? 'overflow-y-scroll'
      : 'overflow-hidden';

    if (prevState.isOpen !== isOpen) {
      this.setState({ isOpen }, () => {
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
    if (
      !this.props.backdrop ||
      (e.target.closest('[role="dialog"]') &&
        !e.target.classList.contains('modal'))
    ) {
      return;
    }

    if (
      !(e.clientX > e.target.clientWidth || e.clientY > e.target.clientHeight)
    ) {
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
      modalStyle,
      position,
      role,
      side,
      size,
      tabIndex,
      wrapClassName
    } = this.props;

    const { isOpen } = this.state;

    const timeout = fade ? 300 : 0;

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
    const positionSplited = position.split('-');
    const wrapperClasses = classNames(
      {
        modal: !inline,
        fade,
        top: fade && !animation && !position,
        animation: fade && animation
      },
      fade && position && position && positionSplited.length > 1
        ? positionSplited[1]
        : positionSplited[0],
      wrapClassName
    );

    const backdropClasses = classNames(
      'modal-backdrop',
      fade ? 'fade' : 'show',
      backdropClassName
    );

    const contentClasses = classNames('modal-content', contentClassName);

    const modalAttributes = returnAttributes({
      style: { display: 'block' },
      id,
      tabIndex,
      role,
      'aria-hidden': 'true'
    });

    const modal = (
      <div
        data-test='modal'
        onKeyUp={this.handleEscape}
        className={wrapperClasses}
        {...modalAttributes}
      >
        <div className={modalDialogClasses} role='document'>
          <div
            ref={elem => (this.modalContent = elem)}
            className={contentClasses}
          >
            {children}
          </div>
        </div>
      </div>
    );

    return (
      <>
        {backdrop && (
          <Transition
            timeout={timeout}
            in={isOpen}
            appear={isOpen}
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
          in={isOpen}
          appear={isOpen}
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
  zIndex: 1050
};

Modal.propTypes = {
  animation: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
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
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  overflowScroll: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  showModal: PropTypes.func,
  side: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.string,
  wrapClassName: PropTypes.string
};

export default Modal;
export { Modal as MDBModal };
