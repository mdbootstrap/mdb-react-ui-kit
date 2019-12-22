import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarNav = props => {
  const { children, className, right, left, tag: Tag, ...attributes } = props;

  const classes = classNames(
    'navbar-nav',
    right ? 'ml-auto' : left ? 'mr-auto' : 'justify-content-around w-100',
    className
  );

  return (
    <Tag data-test='navbar-nav' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarNav.defaultProps = {
  tag: 'ul'
};

export default NavbarNav;
export { NavbarNav as MDBNavbarNav };
