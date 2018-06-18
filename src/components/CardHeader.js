import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeader extends Component {

  render() {

    const {
      className,
      tag: Tag,
      color,
      border,
      transparent,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-header',
      color && color + ' white-text',
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
  border: PropTypes.string,
  transparent: PropTypes.bool
};

CardHeader.defaultProps = {
  tag: 'div'
};

export default CardHeader;
