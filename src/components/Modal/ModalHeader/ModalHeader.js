import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ModalHeader = props => {
  let closeButton;
  const { className, children, toggle, tag: Tag, closeAriaLabel, titleClass, ...attributes } = props;

  const classes = classNames("modal-header", className);

  const titleClasses = classNames("modal-title", titleClass);

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label={closeAriaLabel}>
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <div {...attributes} className={classes}>
      <Tag className={titleClasses}>{children}</Tag>
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string
};

ModalHeader.defaultProps = {
  tag: "h4",
  closeAriaLabel: "Close"
};

export default ModalHeader;
export { ModalHeader as MDBModalHeader };
