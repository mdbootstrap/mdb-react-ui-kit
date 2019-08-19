import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonGroup.css';

const ButtonGroup = props => {
  const { className, size, vertical, ...attributes } = props;

  const classes = classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  );

  return (
    <div data-test='button-group' {...attributes} className={classes}>
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool
};

ButtonGroup.defaultProps = {
  role: 'group'
};

export default ButtonGroup;
export { ButtonGroup as MDBBtnGroup };
