import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavItem = props => {
  const { children, className, active, text, tag: Tag, ...attributes } = props;

  const classes = classNames("nav-item", active && "active", text && "navbar-text", className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};

NavItem.defaultProps = {
  tag: "li"
};

export default NavItem;
export { NavItem as MDBNavItem };