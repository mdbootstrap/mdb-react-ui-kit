import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FreeBird = props => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = classNames("container free-bird", className);

  return <Tag {...attributes} className={classes} />;
};

FreeBird.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

FreeBird.defaultProps = {
  tag: "div"
};

export default FreeBird;
export { FreeBird as MDBFreeBird };
