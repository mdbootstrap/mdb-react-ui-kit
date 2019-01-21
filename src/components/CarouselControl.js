import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from './Fa';

class Control extends Component {
  render() {
    let {
      direction,
      className,
      onClick,
      tag: Tag,
      iconLeft,
      iconRight,
      testimonial,
      multiItem
    } = this.props;

    let text;

    if (direction === "prev") {
      text = "Previous";
    } else if (direction === "next") {
      text = "Next";
    }

    let classes = classNames("carousel-control-" + direction, className);

    let caretClasses = classNames("carousel-control-" + direction + "-icon");

    if (testimonial) {
      const arrow = direction === "prev" ? "left" : "right";
      classes = classNames(
        "carousel-item-" + direction,
        arrow,
        "carousel-control",
        className
      );
      caretClasses = classNames("icon-" + direction);
    }

    if (multiItem) {
      classes = classNames("btn-floating");
    }

    return (
      <Tag className={classes} data-slide={direction} onClick={onClick}>
        {iconLeft ? (
          <Fa icon="chevron-left" />
        ) : iconRight ? (
          <Fa icon="chevron-right" />
        ) : (
          <div>
            <span className={caretClasses} aria-hidden="true" />
            <span className="sr-only">{text}</span>
          </div>
        )}
      </Tag>
    );
  }
}

Control.propTypes = {
  onClick: PropTypes.any,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  testimonial: PropTypes.bool,
  multiItem: PropTypes.bool
};

Control.defaultProps = {
  tag: "a"
};

export default Control;
export { Control as MDBControl };
