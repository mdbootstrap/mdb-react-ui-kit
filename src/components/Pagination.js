import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Pagination extends Component {
  render() {
    const {
      children,
      className,
      circle,
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  circle: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node
};

Pagination.defaultProps = {
  tag: "ul"
};

export default Pagination;
export { Pagination as MDBPagination };
