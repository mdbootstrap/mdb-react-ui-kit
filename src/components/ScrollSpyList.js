import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ScrollSpyList extends Component {

  render() {
    const {
      className,
      children,
      color,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav nav-tabs horizontal-spy',
      color ? color : false,
      className
    );

    return (
      <ul {...attributes} role="navigation" className={classes}>{children}</ul>
    );
  }
}

ScrollSpyList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string
};

export default ScrollSpyList;
