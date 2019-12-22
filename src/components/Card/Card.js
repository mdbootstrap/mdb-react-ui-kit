import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = props => {
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
  } = props;

  const classes = classNames(
    {
      'card-cascade': cascade,
      'card-cascade wider': wide,
      'card-cascade narrower': narrow,
      'card-cascade wider reverse': reverse,
      'testimonial-card': testimonial,
      'card-ecommerce': ecommerce,
      'collection-card': collection,
      'pricing-card': pricing,
      'card-personal': personal,
      'news-card': news,
      [`${text}-text`]: text,
      [`border-${border}`]: border
    },
    'card',
    color,
    className
  );

  return <Tag data-test='card' {...attributes} className={classes} />;
};

Card.propTypes = {
  border: PropTypes.string,
  cascade: PropTypes.bool,
  className: PropTypes.string,
  collection: PropTypes.bool,
  color: PropTypes.string,
  ecommerce: PropTypes.bool,
  narrow: PropTypes.bool,
  news: PropTypes.bool,
  personal: PropTypes.bool,
  pricing: PropTypes.bool,
  reverse: PropTypes.bool,
  tag: PropTypes.string,
  testimonial: PropTypes.bool,
  text: PropTypes.string,
  wide: PropTypes.bool
};

Card.defaultProps = {
  tag: 'div'
};

export default Card;
export { Card as MDBCard };
