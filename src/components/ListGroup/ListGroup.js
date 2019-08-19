import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ListGroup = props => {
  const { children, className, tag: Tag, ...attributes } = props;

  const classes = classNames("list-group", className);

  return (
    <Tag data-test="list-group" {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

ListGroup.defaultProps = {
  tag: "ul"
};

export default ListGroup;
export { ListGroup as MDBListGroup };
