import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NumericInput from "react-numeric-input";

const InputNumeric = props => {
  const onChangeHandler = value => {
    props.getValue && props.getValue(value);
  };

  const { className, getValue, ...attributes } = props;

  const classes = classNames("form-control", className);
  return <NumericInput {...attributes} onChange={onChangeHandler} className={classes} />;
};

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

export default InputNumeric;
export { InputNumeric as MDBInputSelect };
