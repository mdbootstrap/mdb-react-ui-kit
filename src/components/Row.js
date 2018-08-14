import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Row extends Component {

  render() {

    const {
      className,
      tag: Tag,
      center,
      start,
      end,
      around,
      between,
      ...attributes
    } = this.props;

    const classes = classNames(
      'row',
      end && 'justify-content-end',
      start && 'justify-content-start',
      center && 'justify-content-center',
      between && 'justify-content-between',
      around && 'justify-content-around',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Row.defaultProps = {
  tag: 'div'
};

export default Row;
export { Row as MDBRow };
