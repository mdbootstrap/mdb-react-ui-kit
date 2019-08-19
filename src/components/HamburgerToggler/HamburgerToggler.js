import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './HamburgerToggler.css';

const HamburgerToggler = props => {
  let { id, color, className, isOpen, onClick } = props;

  const classes = classNames('hamburger-button__button', className);

  return (
    <>
      <input
        data-test='hamburger-toggler'
        type='checkbox'
        defaultChecked={isOpen || false}
        onChange={onClick}
        className='hamburger-button__checkbox'
        id={id}
      />
      <label id='nav-icon1' className={classes} htmlFor={id}>
        <span style={{ background: color }} />
        <span style={{ background: color }} />
        <span style={{ background: color }} />
      </label>
    </>
  );
};

HamburgerToggler.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default HamburgerToggler;
export { HamburgerToggler as MDBHamburgerToggler };
