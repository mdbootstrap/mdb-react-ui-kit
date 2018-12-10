import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Mask extends React.Component {
  render() {
    const {
      children,
      className,
      overlay,
      pattern,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      "mask",
      pattern && `pattern-${pattern}`,
      overlay && `rgba-${overlay}`,
      className
    );
    return (
      <Tag {...attributes} className={classes}>
        {this.props.children}
      </Tag>
    );
  }
}

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string
};

Mask.defaultProps = {
  className: "",
  overlay: "",
  pattern: "",
  tag: "div"
};

export default Mask;
export { Mask as MDBMask };
