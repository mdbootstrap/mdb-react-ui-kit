import React, { Component, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { returnAttributes } from "./utils";
import { Transition } from "react-transition-group";

class Modal extends Component {
  state = {
    isOpen: this.props.isOpen || false
  };

  componentDidMount = () => {
    document.body.classList.add("modal-open");
  };

  componentWillUnmount = () => {
    document.body.classList.remove("modal-open");
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  };

  handleOnEntered = (type, node) => {
    if (type === "backdrop" && this.props.fade === false) {
      return;
    }

    node.classList.add("show");
    this.props.autoFocus && node.focus();

    if (type === "modal") {
      this.props.showModal && this.props.showModal();
    }
  };

  handleOnExit = (type, node) => {
    if (type === "backdrop" && this.props.fade === false) {
      return;
    }

    node.classList.remove("show");

    if (type === "modal") {
      this.props.hideModal && this.props.hideModal();
    }
  };

  handleOnExited = node => {
    this.props.hiddenModal && this.props.hiddenModal();
  };

  handleBackdropClick = e => {
    if (!this.modalContent.contains(e.target)) {
      this.props.toggle();
    }
  };

  handleEscape = e => {
    if (e.keyCode === 27) {
      e.preventDefault();
      this.props.toggle();
    }
  };

  render() {
    const {
      children,
      backdrop,
      backdropClassName,
      contentClassName,
      className,
      size,
      side,
      fullHeight,
      frame,
      centered,
      position,
      cascading,
      modalStyle,
      wrapClassName,
      animation,
      fade,
      tabIndex,
      role,
      id
    } = this.props;

    const timeout = fade ? 300 : 0;

    const modalDialogClasses = classNames(
      "modal-dialog",
      className,
      size && `modal-${size}`,
      side && `modal-side`,
      fullHeight && `modal-full-height`,
      frame && `modal-frame`,
      centered && `modal-dialog-centered`,
      position && `modal-${this.props.position}`,
      cascading && `cascading-modal`,
      modalStyle && `modal-notify white-text modal-${this.props.modalStyle}`
    );

    const wrapperClasses = classNames(
      "modal",
      fade && `fade`,
      wrapClassName,
      fade &&
        (animation || (position && position.split("-").slice(-1)[0]) || "top")
    );

    const backdropClasses = classNames(
      "modal-backdrop",
      fade ? "fade" : "show",
      backdropClassName
    );

    const contentClasses = classNames("modal-content", contentClassName);

    const modalAttributes = returnAttributes({
      style: { display: "block" },
      id: id || undefined,
      tabIndex: tabIndex,
      role: role,
      "aria-hidden": "true"
    });

    return (
      <Fragment>
        {backdrop && (
          <Transition
            timeout={timeout}
            in={this.state.isOpen}
            appear={this.state.isOpen}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered("backdrop", node)}
            onExit={node => this.handleOnExit("backdrop", node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={timeout}
          in={this.state.isOpen}
          appear={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          onClick={this.handleBackdropClick}
          onEntered={node => this.handleOnEntered("modal", node)}
          onExit={node => this.handleOnExit("modal", node)}
        >
          <div
            onKeyUp={this.handleEscape}
            className={wrapperClasses}
            {...modalAttributes}
          >
            <div className={modalDialogClasses} role="document">
              <div
                ref={elem => (this.modalContent = elem)}
                className={contentClasses}
              >
                {children}
              </div>
            </div>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

Modal.defaultProps = {
  backdrop: true,
  fade: true,
  isOpen: false,
  autoFocus: true,
  role: "dialog",
  zIndex: 1050,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
  tabIndex: "-1"
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  size: PropTypes.string,
  side: PropTypes.bool,
  fullHeight: PropTypes.bool,
  frame: PropTypes.bool,
  centered: PropTypes.bool,
  position: PropTypes.string,
  cascading: PropTypes.bool,
  modalStyle: PropTypes.string,
  wrapClassName: PropTypes.string,
  animation: PropTypes.string,
  fade: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  showModal: PropTypes.func,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func
};

export default Modal;
export { Modal as MDBModal };
