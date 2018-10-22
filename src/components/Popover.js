import React from "react";
import { Manager, Target, Popper, Arrow } from "react-popper";
import { findDOMNode } from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Transitions.css";
import { CSSTransition } from "react-transition-group";
import outy from "outy";

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this._handleTargetClick = this._handleTargetClick.bind(this);
    this._setOusideTap = this._setOusideTap.bind(this);
    this._handleOutsideTap = this._handleOutsideTap.bind(this);
  }

  componentDidMount() {
    this._setOusideTap();
  }

  componentDidUpdate(lastProps, lastState) {
    if (lastState.isOpen !== this.state.isOpen) {
      setTimeout(() => this._setOusideTap());
    }
  }

  componentWillUnmount() {
    this.outsideTap.remove();
  }

  _setOusideTap() {
    const elements = [this.target];

    if (this.popper) {
      elements.push(this.popper);
    }

    if (this.outsideTap) {
      this.outsideTap.remove();
    }

    this.outsideTap = outy(
      elements,
      ["click", "touchstart"],
      this._handleOutsideTap
    );
  }

  _handleOutsideTap() {
    this.setState({ isOpen: false });
  }

  _handleTargetClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      placement,
      component,
      componentStyle,
      className,
      children,
      componentPopover,
      popoverBody,
      popoverClass,
      arrowClass,
      tag
    } = this.props;

    const classes = classNames(className);

    const popoverClasses = classNames(
      "popover",
      placement ? "bs-popover-" + placement : "",
      popoverClass
    );

    const arrowClasses = classNames("arrow", arrowClass);
    return (
      <Manager tag={tag}>
        <Target
          innerRef={c => (this.target = findDOMNode(c))}
          component={component}
          style={componentStyle}
          className={classes}
          onClick={this._handleTargetClick}
        >
          {popoverBody}
        </Target>
        <CSSTransition
          in={this.state.isOpen}
          appear={this.state.isOpen}
          classNames="popover"
          unmountOnExit
          timeout={{ enter: 300, exit: 300 }}
        >
          <Popper
            key="popover"
            component={componentPopover}
            innerRef={c => {
              this.popper = findDOMNode(c);
            }}
            placement={placement}
            className={popoverClasses}
          >
            {children}
            <Arrow className={arrowClasses} />
          </Popper>
        </CSSTransition>
      </Manager>
    );
  }
}

Popover.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  componentPopover: PropTypes.string,
  popoverBody: PropTypes.string,
  arrowClass: PropTypes.string,
  popoverClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};

export default Popover;
export { Popover as MDBPopover };
