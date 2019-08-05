import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../../Waves";
import { NavLink as Link } from "react-router-dom";

const NavLink = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    if (!props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
    }
  };

  const { children, className, disabled, active, to, ...attributes } = props;

  const classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
  return (
    <Link className={classes} onMouseUp={handleClick} onTouchStart={handleClick} to={to} {...attributes}>
      {children}
      {props.disabled ? false : <Waves cursorPos={cursorPos} />}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  active: PropTypes.bool
};

NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false
};

export default NavLink;
export { NavLink as MDBNavLink };
