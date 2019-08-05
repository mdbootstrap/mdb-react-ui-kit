import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardBody = props => {
  const { className, tag: Tag, cascade, ...attributes } = props;

  const classes = classNames("card-body", cascade && "card-body-cascade", className);

  return <Tag {...attributes} className={classes} />;
};

CardBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cascade: PropTypes.bool
};

CardBody.defaultProps = {
  tag: "div"
};

export default CardBody;
export { CardBody as MDBCardBody };