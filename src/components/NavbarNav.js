import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NavbarNav extends Component {

	render() {
 
    const {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-nav',
      className,
    );

		return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
		);
	}
}

NavbarNav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

NavbarNav.defaultProps = {
  tag: 'ul'
};

export default NavbarNav;