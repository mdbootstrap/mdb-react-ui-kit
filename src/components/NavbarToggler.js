import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NavbarToggler extends Component {

  render() {
 
    const {
      right,
      left,
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-toggler',
      right && 'navbar-toggler-right',
      left && 'navbar-toggler-left',
      className,
    );

    return (
      <Tag {...attributes} className={classes}>
        {children || <span className='navbar-toggler-icon' />}
      </Tag>
    );
  }
}

NavbarToggler.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool
};

NavbarToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};

export default NavbarToggler;