import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarToggler = props => {
  const { right, left, children, className, tag: Tag, image, ...attributes } = props;

  const classes = classNames(
    {
      'navbar-toggler-right': right,
      'navbar-toggler-left': left
    },
    'navbar-toggler',
    className
  );

  return (
    <Tag data-test='navbar-toggler' {...attributes} className={classes}>
      {children ||
        (image ? (
          <span className='navbar-toggler-icon' style={{ backgroundImage: `url("${image}")` }} />
        ) : (
          <span className='navbar-toggler-icon' />
        ))}
    </Tag>
  );
};

NavbarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

NavbarToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};

export default NavbarToggler;
export { NavbarToggler as MDBNavbarToggler };
