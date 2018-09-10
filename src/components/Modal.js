import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit
} from './utils';

const propTypes = {
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  hiddenModal:PropTypes.func,
  animation: PropTypes.string,
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
  side: PropTypes.bool,
  fullHeight: PropTypes.bool,
  frame: PropTypes.bool,
  centered: PropTypes.bool,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  backdropTransitionTimeout: PropTypes.number,
  backdropTransitionAppearTimeout: PropTypes.number,
  backdropTransitionEnterTimeout: PropTypes.number,
  backdropTransitionLeaveTimeout: PropTypes.number,
  modalTransitionTimeout: PropTypes.number,
  modalTransitionAppearTimeout: PropTypes.number,
  modalTransitionEnterTimeout: PropTypes.number,
  modalTransitionLeaveTimeout: PropTypes.number,
  cascading: PropTypes.bool,
  modalStyle: PropTypes.string
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
    }
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // handle portal events/dom updates
      this.togglePortal();
    } else if (this._element) {
      // rerender portal
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  onOpened() {
    if (this.props.onOpened) {
      this.props.onOpened();
    }
  }

  onClosed() {
    this.destroy();
    if (this.props.onClosed) {
      this.props.onClosed();
    }
    this.props.hiddenModal && this.props.hiddenModal();
  }

  handleEscape(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = document.getElementsByClassName('modal-content')[0];

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  hasTransition() {
    if (this.props.fade === false) {
      return false;
    }

    return this.props.modalTransitionTimeout > 0;
  }

  hasAnimation() {
    if(this.props.animation) {
      return this.props.animation;
    } else if(this.props.position){
      return this.props.position.split("-").slice(-1)[0];
    } else {
      return 'top';
    }
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
      if (!this.hasTransition()) {
        this.onOpened();
      }
    } else {
      this.hide();
      if (!this.hasTransition()) {
        this.onClosed();
      }
    }
  }

  destroy() {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.props.hideModal && this.props.hideModal();
    this.renderIntoSubtree();
  }

  show() {
    this.props.showModal && this.props.showModal();
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);
    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size,
          [`modal-side`]: this.props.side,
          [`modal-full-height`]: this.props.fullHeight,
          [`modal-frame`]: this.props.frame,
          [`modal-dialog-centered`]: this.props.centered,
          [`modal-${this.props.position}`]: this.props.position,
          ['cascading-modal']: this.props.cascading,
          [`modal-notify white-text modal-${this.props.modalStyle}`]: this.props.modalStyle
        }), this.props.cssModule)}
        role="document"
        {...attributes}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', this.props.contentClassName),
            this.props.cssModule
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      this._focus = false;
    }

  }

  renderChildren() {
    const {
      wrapClassName,
      modalClassName,
      backdropClassName,
      cssModule,
      isOpen,
      backdrop,
      modalTransitionTimeout,
      backdropTransitionTimeout,
      role,
      labelledBy,
      cascading,
      modalStyle
    } = this.props;

    const modalAttributes = {
      onClickCapture: this.handleBackdropClick,
      onKeyUp: this.handleEscape,
      style: { display: 'block' },
      'aria-labelledby': labelledBy,
      role,
      tabIndex: '-1'
    };

    if (this.hasTransition()) {
      return (
        <TransitionGroup className={mapToCssModules(wrapClassName)}>
          {isOpen && (
            <Fade
              key="modal-dialog"
              onEnter={this.onOpened}
              onLeave={this.onClosed}
              transitionAppearTimeout={
                typeof this.props.modalTransitionAppearTimeout === 'number'
                  ? this.props.modalTransitionAppearTimeout
                  : modalTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.modalTransitionEnterTimeout === 'number'
                  ? this.props.modalTransitionEnterTimeout
                  : modalTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.modalTransitionLeaveTimeout === 'number'
                  ? this.props.modalTransitionLeaveTimeout
                  : modalTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal', this.hasAnimation(), modalClassName), cssModule)}
              {...modalAttributes}
            >
              {this.renderModalDialog()}
            </Fade>
          )}
          {isOpen && backdrop && (
            <Fade
              key="modal-backdrop"
              transitionAppearTimeout={
                typeof this.props.backdropTransitionAppearTimeout === 'number'
                  ? this.props.backdropTransitionAppearTimeout
                  : backdropTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.backdropTransitionEnterTimeout === 'number'
                  ? this.props.backdropTransitionEnterTimeout
                  : backdropTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.backdropTransitionLeaveTimeout === 'number'
                  ? this.props.backdropTransitionLeaveTimeout
                  : backdropTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
            />
          )}
        </TransitionGroup>
      );
    }

    return (
      <div className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <div
            className={mapToCssModules(classNames('modal', 'show', modalClassName), cssModule)}
            {...modalAttributes}
          >
            {this.renderModalDialog()}
          </div>
        )}
        {isOpen && backdrop && (
          <div
            className={mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)}
          />
        )}
      </div>
    );
  }

  render() {
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
export { Modal as MDBModal };
