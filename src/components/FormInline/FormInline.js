import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../Waves';

const FormInline = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  const { className, waves, children, ...attributes } = props;

  const classes = classNames(
    'form-inline',
    props.waves && 'Ripple-parent',
    className
  );

  return (
    <form
      data-test='form-inline'
      {...attributes}
      className={classes}
      onMouseDown={handleClick}
      onTouchStart={handleClick}
    >
      {props.children}
      {props.waves && <Waves cursorPos={cursorPos} />}
    </form>
  );
};

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

export default FormInline;
export { FormInline as MDBFormInline };
