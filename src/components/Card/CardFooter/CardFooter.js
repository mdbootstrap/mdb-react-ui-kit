import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardFooter = props => {
  const { className, tag: Tag, color, text, border, transparent, small, muted, ...attributes } = props;

  const classes = classNames(
    {
      " white-text": color && !text,
      [`border-${border}`]: border,
      "bg-transparent": transparent,
      "text-muted": muted,
      color,
      text
    },
    "card-footer",
    className
  );

  let component = <Tag {...attributes} className={classes} />;

  if (small) {
    component = (
      <Tag {...attributes} className={classes}>
        <small> {props.children} </small>
      </Tag>
    );
  }
  return component;
};

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool
};

CardFooter.defaultProps = {
  tag: "div"
};

export default CardFooter;
export { CardFooter as MDBCardFooter };
