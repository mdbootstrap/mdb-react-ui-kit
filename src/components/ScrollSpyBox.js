import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ScrollBox extends Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classes = classNames(
      'scroll-box',
      className
    );

    return (
      <div {...attributes} className={classes}>{children}</div>
    );
  }
}

ScrollBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ScrollBox;
