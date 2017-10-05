import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FormInline extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classes = classNames(
      'form-inline',
      className
    );
    return (
      <form {...attributes} className={classes} >{this.props.children}</form>

    );
  }
}

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FormInline;
