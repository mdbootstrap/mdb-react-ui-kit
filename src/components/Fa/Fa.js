import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fa = props => {
  const {
    border,
    brand,
    className,
    fab,
    fal,
    far,
    fixed,
    flip,
    icon,
    inverse,
    light,
    list,
    pull,
    pulse,
    regular,
    rotate,
    size,
    spin,
    stack,
    ...attributes
  } = props;

  const iconPrefix =
    brand || fab ? 'fab' : light || fal ? 'fal' : regular || far ? 'far' : 'fa';

  const classes = classNames(
    iconPrefix,
    list ? 'fa-li' : false,
    icon ? `fa-${icon}` : false,
    size ? `fa-${size}` : false,
    fixed ? 'fa-fw' : false,
    pull ? `fa-pull-${pull}` : false,
    border ? 'fa-border' : false,
    spin ? 'fa-spin' : false,
    pulse ? 'fa-pulse' : false,
    rotate ? `fa-rotate-${rotate}` : false,
    flip ? `fa-flip-${flip}` : false,
    inverse ? 'fa-inverse' : false,
    stack ? `fa-${stack}` : false,
    className
  );

  return <i data-test='fa' {...attributes} className={classes} />;
};

Fa.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string
};

Fa.defaultProps = {
  border: false,
  brand: false,
  className: '',
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: '',
  inverse: false,
  light: false,
  list: false,
  pull: '',
  pulse: false,
  regular: false,
  rotate: '',
  size: '',
  spin: false,
  stack: ''
};

export default Fa;
export { Fa as MDBIcon };
