import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumericInput from 'react-numeric-input';

class InputNumeric extends React.Component {

  render() {
    const {
      className,
      ...attributes
    } = this.props;

    const classes = classNames(
      'form-control',
      className
    );
    return (
      <NumericInput {...attributes} className={classes} />
    );
  }
}

InputNumeric.defaultProps = {
};

InputNumeric.propTypes = {
  className: PropTypes.string
};

export default InputNumeric;
export { InputNumeric as MDBInputSelect };
