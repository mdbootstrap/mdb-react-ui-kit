import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Col extends Component {
  render() {
    const {
      xs,
      sm,
      md,
      lg,
      xl,
      top,
      bottom,
      middle,
      size,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      size && "col-" + size,
      xs && "col-" + xs,
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

    return <Tag {...attributes} className={classes} />;
  }
}

Col.propTypes = {
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  middle: PropTypes.string,
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
