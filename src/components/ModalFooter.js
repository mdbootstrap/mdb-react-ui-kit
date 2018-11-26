import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class ModalFooter extends React.Component {
  render() {
    const { className,
            children,
            center,
            start,
            end,
            around,
            between,
            ...attributes } = this.props;

    const classes = classNames(
      "modal-footer",
      start && "justify-content-start",
      end && "justify-content-end",
      center && "justify-content-center",
      between && "justify-content-between",
      around && "justify-content-around",
      className);

    return (
      <div {...attributes} className={classes}>
        {children}
      </div>
    );
  }
}

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalFooter;
export { ModalFooter as MDBModalFooter };
