import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Pagination extends Component {
  render() {
    const {
      children,
      circle,
      className,
      color,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "pagination",
      circle && "pagination-circle",
      color && "pg-" + color,
      className
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Pagination.defaultProps = {
  circle: false,
  className: "",
  color: "",
  tag: "ul"
};

export default Pagination;
export { Pagination as MDBPagination };
