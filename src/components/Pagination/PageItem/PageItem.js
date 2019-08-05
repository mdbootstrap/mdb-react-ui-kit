import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PageItem = props => {
  const { active, className, children, disabled, tag: Tag, ...attributes } = props;

  const classes = classNames("page-item", disabled && "disabled", active && "active", className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PageItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PageItem.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  tag: "li"
};

export default PageItem;
export { PageItem as MDBPageItem };
