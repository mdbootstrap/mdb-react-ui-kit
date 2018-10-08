import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CardTitle extends Component {
  render() {
    const { className, tag: Tag, sub, ...attributes } = this.props;

    const classes = classNames(sub ? "card-subtitle" : "card-title", className);

    return <Tag {...attributes} className={classes} />;
  }
}

CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sub: PropTypes.bool,
  className: PropTypes.string
};

CardTitle.defaultProps = {
  tag: "h4",
  sub: false
};

export default CardTitle;
export { CardTitle as MDBCardTitle };
