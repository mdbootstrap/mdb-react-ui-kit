import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ButtonToolbar = props => {
  const { className, ...attributes } = props;

  const classes = classNames(className, "btn-toolbar");

  return (
    <div {...attributes} className={classes}>
      {props.children}
    </div>
  );
};

ButtonToolbar.propTypes = {
  "aria-label": PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  role: PropTypes.string
};

ButtonToolbar.defaultProps = {
  role: "toolbar"
};

export default ButtonToolbar;
export { ButtonToolbar as MDBBtnToolbar };
