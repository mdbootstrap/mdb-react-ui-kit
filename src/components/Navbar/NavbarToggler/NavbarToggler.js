import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarToggler = props => {
  const { right, left, children, className, tag: Tag, image, ...attributes } = props;

  const classes = classNames(
    {
      "navbar-toggler-right": right,
      "navbar-toggler-left": left
    },
    "navbar-toggler",
    className
  );

  return (
    <Tag {...attributes} className={classes}>
      {children ? (
        children
      ) : image ? (
        <span className="navbar-toggler-icon" style={{ backgroundImage: `url("${image}")` }} />
      ) : (
        <span className="navbar-toggler-icon" />
      )}
    </Tag>
  );
};

NavbarToggler.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
  image: PropTypes.string
};

NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

export default NavbarToggler;
export { NavbarToggler as MDBNavbarToggler };
