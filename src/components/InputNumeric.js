import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NumericInput from "react-numeric-input";

class InputNumeric extends React.Component {
  onChangeHandler = value => {
    this.props.getValue && this.props.getValue(value);
  };

  render() {
    const { className, getValue, ...attributes } = this.props;

    const classes = classNames("form-control", className);
    return (
      <NumericInput
        {...attributes}
        onChange={this.onChangeHandler}
        className={classes}
      />
    );
  }
}

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

export default InputNumeric;
export { InputNumeric as MDBInputSelect };
