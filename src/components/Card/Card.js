import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
      "card-cascade": cascade,
      "card-cascade wider": wide,
      "card-cascade narrower": narrow,
      "card-cascade wider reverse": reverse,
      "testimonial-card": testimonial,
      "card-ecommerce": ecommerce,
      "collection-card": collection,
      "pricing-card": pricing,
      "card-personal": personal,
      "news-card": news,
      [`${text}-text`]: text,
      [`border-${border}`]: border
    },
    "card",
    color,
    className,
  );

  return <Tag {...attributes} className={classes} />;
};

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
};

Card.defaultProps = {
  tag: "div"
};

export default Card;
export { Card as MDBCard };
