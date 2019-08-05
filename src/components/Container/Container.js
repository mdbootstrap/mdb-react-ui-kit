import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = props => {
  const { fluid, className, tag: Tag, ...attributes } = props;

  const classes = classNames(fluid ? "container-fluid" : "container", className);

  return <Tag {...attributes} className={classes} />;
};

Container.propTypes = {
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Container.defaultProps = {
  tag: "div",
  fluid: false
};

export default Container;
export { Container as MDBContainer };