import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CardFooter extends Component {
  render() {
    const {
      className,
      tag: Tag,
      color,
      text,
      border,
      transparent,
      small,
      muted,
      ...attributes
    } = this.props;

    const classes = classNames(
      "card-footer",
      color && color,
      text && text,
      color && !text && " white-text",
      border && "border-" + border,
      transparent && "bg-transparent",
      muted && "text-muted",
      className
    );

    let component = <Tag {...attributes} className={classes} />;

    if (small) {
      component = (
        <Tag {...attributes} className={classes}>
          <small> {this.props.children} </small>
        </Tag>
      );
    }
    return component;
  }
}

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool
};

CardFooter.defaultProps = {
  tag: "div"
};

export default CardFooter;
export { CardFooter as MDBCardFooter };
