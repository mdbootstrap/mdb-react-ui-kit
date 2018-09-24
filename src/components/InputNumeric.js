import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumericInput from 'react-numeric-input';

class InputNumeric extends React.Component {

  onChangeHandler = (event) => {
    this.props.getValue(event);
  }

  render() {
    const {
      className,
      getValue,
      ...attributes
    } = this.props;

    const classes = classNames(
      'form-control',
      className
    );
    return (
      <NumericInput {...attributes} onChange={(event) => this.onChangeHandler(event)} className={classes} />
    );
  }
}

InputNumeric.defaultProps = {
  getValue: false
};

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

export default InputNumeric;
export { InputNumeric as MDBInputSelect };
