import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../Waves";

const Button = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    e.stopPropagation();
    // Waves - Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  let {
    active,
    block,
    circle,
    className,
    color,
    disabled,
    download,
    outline,
    size,
    rounded,
    gradient,
    floating,
    flat,
    role,
    type,
    social,
    action,
    tag: Tag,
    target,
    innerRef,
    ...attributes
  } = props;

  const classes = classNames(
    flat ? "btn-flat" : gradient ? `${gradient}-gradient` : `btn${outline ? "-outline" : ""}-${color}`,
    "btn",
    "Ripple-parent",
    className,
    {
      active,
      "btn-floating": floating,
      "btn-rounded": rounded,
      "btn-circle": circle,
      "btn-block": block,
      "btn-action": action,
      [`btn-${social}`]: social,
      [`btn-${size}`]: size,
      disabled
    }
  );

  if (attributes.href && Tag === "button") {
    Tag = "a";
  }

  return (
    <Tag
      type={Tag === "button" && !type ? "button" : type}
      target={target}
      role={Tag === "a" && !role ? "button" : role}
      className={classes}
      ref={innerRef}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      {...attributes}
      download={download}
      disabled={disabled}
    >
      {props.children}
      {disabled ? false : <Waves cursorPos={cursorPos} outline={outline} flat={flat} />}
    </Tag>
  );
};

Button.defaultProps = {
  color: "default",
  tag: "button"
};

Button.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  social: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string
};

export default Button;
export { Button as MDBBtn };
