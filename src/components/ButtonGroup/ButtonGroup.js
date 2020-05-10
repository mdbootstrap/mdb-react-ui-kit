import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonGroup.css';

const ButtonGroup = ({ className, size, vertical, children, ...attributes }) => {
  const classes = classNames(
    className,
    size ? `btn-group-${size}` : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  );

  return (
    <div data-test='button-group' {...attributes} className={classes}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

ButtonGroup.defaultProps = {
  role: 'group'
};

export default ButtonGroup;
export { ButtonGroup as MDBBtnGroup };
