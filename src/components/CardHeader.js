import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeader extends Component {

  render() {

    const {
      className,
      tag: Tag,
      color,
      text,
      border,
      transparent,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-header',
      color && color,
      text && text,
      (color && !text) && ' white-text',
      border && 'border-' + border,
      transparent && 'bg-transparent',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool
};

CardHeader.defaultProps = {
  tag: 'div'
};

export default CardHeader;
export { CardHeader as MDBCardHeader };
