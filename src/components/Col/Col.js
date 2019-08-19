import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Col = props => {
  const { xs, sm, md, lg, xl, top, bottom, middle, size, className, tag: Tag, ...attributes } = props;

  const classes = classNames(
    size && "col-" + size,
    xs && "col-xs-" + xs,
    sm && "col-sm-" + sm,
    md && "col-md-" + md,
    lg && "col-lg-" + lg,
    xl && "col-xl-" + xl,
    !size && !xs && !sm && !md && !lg && !xl ? "col" : "",
    top && "align-self-start",
    middle && "align-self-center",
    bottom && "align-self-end",
    className
  );

  return <Tag data-test="col" {...attributes} className={classes} />;
};

Col.propTypes = {
  size: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

export default Col;
export { Col as MDBCol };
