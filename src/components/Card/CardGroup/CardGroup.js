import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardGroup = props => {
  const { className, tag: Tag, deck, column, ...attributes } = props;

  const classes = classNames(deck ? "card-deck" : column ? "card-columns" : "card-group", className);

  return <Tag {...attributes} className={classes} />;
};

CardGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  deck: PropTypes.bool,
  column: PropTypes.bool
};

CardGroup.defaultProps = {
  tag: "div"
};

export default CardGroup;
export { CardGroup as MDBCardGroup };
