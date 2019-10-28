import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../../Waves";
import { NavLink as Link, Link as NormalLink } from "react-router-dom";

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

  const { children, className, disabled, active, to, link, ...attributes } = props;
  const classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
  let rednerLink;

  if (link) {
    rednerLink = (
      <NormalLink
        data-test="nav-link"
        className={classes}
        onMouseUp={handleClick}
        onTouchStart={handleClick}
        to={to}
        {...attributes}
      >
        {children}
        {props.disabled ? false : <Waves cursorPos={cursorPos} />}
      </NormalLink>
    );
  } else {
    rednerLink = (
      <Link
        data-test="nav-link"
        className={classes}
        onMouseUp={handleClick}
        onTouchStart={handleClick}
        to={to}
        {...attributes}
      >
        {children}
        {props.disabled ? false : <Waves cursorPos={cursorPos} />}
      </Link>
    );
  }

  return rednerLink;
};

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.bool
};

NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  link: false
};

export default NavLink;
export { NavLink as MDBNavLink };
