import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CardBody extends Component {
  render() {
    const { className, tag: Tag, cascade, ...attributes } = this.props;

    const classes = classNames(
      "card-body",
      cascade && "card-body-cascade",
      className
    );

    return <Tag {...attributes} className={classes} />;
  }
}

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
