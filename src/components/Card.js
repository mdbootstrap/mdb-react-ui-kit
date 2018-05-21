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
      ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      cascade ? 'card-cascade' : false,
      wide ? 'card-cascade wider' : false,
      narrow ? 'card-cascade narrower' : false,
      reverse ? 'card-cascade wider reverse' : false,
      testimonial ? 'testimonial-card' : false,
      ecommerce ? 'card-ecommerce' : false,
      collection ? 'collection-card' : false,
      pricing ? 'pricing-card' : false,
      personal ? 'card-personal' : false,
      news ? 'news-card': false,
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
