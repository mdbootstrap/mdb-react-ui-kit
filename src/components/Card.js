import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Card extends Component {

  render() {

    const {
      className,
      tag: Tag,
      cascade,
      wide,
      narrow,
      reverse,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      cascade ? 'card-cascade' : false,
      wide ? 'card-cascade wider' : false,
      narrow ? 'card-cascade narrower' : false,
      reverse ? 'card-cascade wider reverse' : false,
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Card.defaultProps = {
  tag: 'div'
};

export default Card;
