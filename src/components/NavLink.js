import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "./Waves";
import { NavLink as Link } from "react-router-dom";

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    if (!this.props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      active,
      to,
      activeClassName,
      ...attributes
    } = this.props;

    const classes = classNames(
      "nav-link",
      disabled ? "disabled" : "Ripple-parent",
      active && "active",
      className
    );

    return (
      <Link
        className={classes}
        onMouseUp={this.handleClick}
        onTouchStart={this.handleClick}
        to={to}
        {...attributes}
      >
        {children}
        {this.props.disabled ? (
          false
        ) : (
          <Waves cursorPos={this.state.cursorPos} />
        )}
      </Link>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string,
  active: PropTypes.bool
};

export default NavLink;
export { NavLink as MDBNavLink };
