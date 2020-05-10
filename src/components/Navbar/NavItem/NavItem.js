import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavItem = props => {
  const { children, className, active, text, tag: Tag, ...attributes } = props;

  const classes = classNames('nav-item', active && 'active', text && 'navbar-text', className);

  return (
    <Tag data-test='nav-item' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavItem.defaultProps = {
  tag: 'li'
};

export default NavItem;
export { NavItem as MDBNavItem };
