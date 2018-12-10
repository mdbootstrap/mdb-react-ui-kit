import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class ListGroupItem extends Component {
  render() {
    let {
      active,
      children,
      className,
      color,
      disabled,
      hover,
      success,
      info,
      warning,
      danger,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "list-group-item",
      color && `list-group-item-${color}`,
      active ? "active" : "",
      disabled ? "disabled" : "",
      hover ? "list-group-item-action" : "",
      success ? "list-group-item-success" : "",
      info ? "list-group-item-info" : "",
      warning ? "list-group-item-warning" : "",
      danger ? "list-group-item-danger" : "",
      className
    );

    if (attributes.href && Tag === "li") {
      Tag = "a";
    }

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
};

ListGroupItem.defaultProps = {
  tag: "li"
};

export default ListGroupItem;
export { ListGroupItem as MDBListGroupItem };
