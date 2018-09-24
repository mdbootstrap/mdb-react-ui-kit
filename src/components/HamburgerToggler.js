import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './HamburgerToggler.css';

class HamburgerToggler extends React.Component {

    state={
      checked: this.props.isOpen || false
    }

    render() {
      let {
        id,
        color,
        className
      } = this.props;

      const classes = classNames(
        'hamburger-button__button',
        className,
      );

      return (
        <React.Fragment>
          <input type="checkbox" defaultChecked={this.state.checked} onChange={this.props.onClick} className="hamburger-button__checkbox" id={id} />
          <label id="nav-icon1" className={classes} htmlFor={id}>
            <span style={{background: color}}></span>
            <span style={{background: color}}></span>
            <span style={{background: color}}></span>
          </label>
        </React.Fragment>
      );
    }
}

HamburgerToggler.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default HamburgerToggler;
export { HamburgerToggler as MDBHamburgerToggler };
