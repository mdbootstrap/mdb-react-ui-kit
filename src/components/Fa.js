import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Fa extends React.Component {
  render() {
    const {
      border,
      className,
      fixed,
      flip,
      icon,
      inverse,
      list,
      pull,
      pulse,
      rotate,
      size,
      spin,
      stack,
      ...attributes
    } = this.props;

    const classes = classNames(
      list ? "fa-li" : false,
      "fa",
      icon ? `fa-${icon}` : false,
      size ? `fa-${size}` : false,
      fixed ? "fa-fw" : false,
      pull ? `fa-pull-${pull}` : false,
      border ? "fa-border" : false,
      spin ? "fa-spin" : false,
      pulse ? "fa-pulse" : false,
      rotate ? `fa-rotate-${rotate}` : false,
      flip ? `fa-flip-${flip}` : false,
      inverse ? "fa-inverse" : false,
      stack ? `fa-${stack}` : false,
      className
    );

    return <i {...attributes} className={classes} />;
  }
}

Fa.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  icon: PropTypes.string,
  inverse: PropTypes.string,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  rotate: PropTypes.string,
  spin: PropTypes.bool,
  size: PropTypes.string,
  stack: PropTypes.string
};

export default Fa;
export { Fa as MDBIcon };
