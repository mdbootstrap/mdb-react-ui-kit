import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';


class Fa extends React.Component {

  render() {
    const {
      className,
      icon,
      fixed,
      list,
      border,
      spin,
      pulse,
      pull,
      size,
      rotate,
      flip,
      inverse,
      stack,
      ...attributes
    } = this.props;


    const classes  = classNames(
      list ? 'fa-li' : false,
      'fa',
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


    return (
      <i {...attributes} className={classes}></i>
    );
  }
}

Fa.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
  list: PropTypes.bool,
  border: PropTypes.bool,
  pulse: PropTypes.bool,
  spin: PropTypes.bool,
  pull: PropTypes.string,
  size: PropTypes.string,
  rotate: PropTypes.string,
  flip: PropTypes.string,
  inverse: PropTypes.string,
  stack: PropTypes.string,
  icon: PropTypes.string
};


export default Fa ;


