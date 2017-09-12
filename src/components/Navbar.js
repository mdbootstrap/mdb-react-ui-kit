import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getExpandClass = (expand) => {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${expand}`;
};

class Navbar extends Component {

	render() {
 
    const {
      expand,
      light,
      dark,
      sticky,
      fixed,
      color,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'navbar',
      light ? 'navbar-light' : '',
      dark ? 'navbar-dark' : '',
      sticky ? 'sticky-${sticky}' : '',
      fixed ? 'fixed-${fixed}' : '',
      getExpandClass(expand),
      color ? color : '',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
};

export default Navbar;