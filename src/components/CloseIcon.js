import React from 'react'
import PropTypes from "prop-types";

export const MDBCloseIcon = ({ onClick, className, ariaLabel, ...props }) => {

  const onClickHandler = e => {
    onClick && onClick(e)
  }
  const btnClasses = className ? ['close', ...className.split(" ")] : ['close'];

  return (
    <button data-test="close-button" type="button" {...props} className={btnClasses.join(" ")} onClick={onClickHandler} aria-label={ariaLabel}>
      <span aria-hidden="true">×</span>
    </button>
  );
};

MDBCloseIcon.defaultProps = {
  ariaLabel: "Close"
}

MDBCloseIcon.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func
}

export default MDBCloseIcon;
