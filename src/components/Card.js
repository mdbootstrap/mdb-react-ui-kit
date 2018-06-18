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
      testimonial,
      ecommerce,
      collection,
      pricing,
      personal,
      news,
      color,
      text,
      border,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      cascade && 'card-cascade',
      wide && 'card-cascade wider',
      narrow && 'card-cascade narrower',
      reverse && 'card-cascade wider reverse',
      testimonial && 'testimonial-card',
      ecommerce && 'card-ecommerce',
      collection && 'collection-card',
      pricing && 'pricing-card',
      personal && 'card-personal',
      news && 'news-card',
      color && color,
      text && text + '-text',
      border && 'border-' + border,
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
};

Card.defaultProps = {
  tag: 'div',
};

export default Card;
