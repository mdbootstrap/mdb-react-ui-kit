import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NavbarBrand extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-brand',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

NavbarBrand.defaultProps = {
  tag: 'a'
};

export default NavbarBrand;