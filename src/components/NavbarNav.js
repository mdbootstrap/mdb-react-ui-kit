import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class NavbarNav extends Component {
  render() {
    const {
      children,
      className,
      right,
      left,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "navbar-nav",
      right ? "ml-auto" : left ? "mr-auto" : "justify-content-around w-100",
      className
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

NavbarNav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool
};

NavbarNav.defaultProps = {
  tag: "ul"
};

export default NavbarNav;
export { NavbarNav as MDBNavbarNav };
