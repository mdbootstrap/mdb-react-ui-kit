import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardHeader = props => {
  const { className, tag: Tag, color, text, border, transparent, ...attributes } = props;

  const classes = classNames(
    {
      " white-text": color && !text,
      [`border-${border}`]: border,
      "bg-transparent": transparent
    },
    "card-header",
    className,
    color,
    text
  );

  return <Tag {...attributes} className={classes} />;
};

CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool
};

CardHeader.defaultProps = {
  tag: "div"
};

export default CardHeader;
export { CardHeader as MDBCardHeader };
