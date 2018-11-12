import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Progress extends React.Component {
  render() {
    const {
      children,
      className,
      barClassName,
      value,
      max,
      animated,
      striped,
      color,
      height,
      wrapperStyle,
      ...attributes
    } = this.props;

    const percent = (parseInt(value, 10) / parseInt(max, 10)) * 100;

    const progressClasses = classNames("progress", className);

    const progressBarClasses = classNames(
      "progress-bar",
      barClassName ? barClassName : null,
      animated ? "progress-bar-animated" : null,
      color ? `bg-${color}` : null,
      striped || animated ? "progress-bar-striped" : null
    );

    const computedHeight = height ? height : children ? "1rem" : ""

    const computedWrapperStyle = {...wrapperStyle, height: computedHeight}

    return (
      <div
        {...attributes}
        className={progressClasses}
        style={computedWrapperStyle}
      >
        <div
          className={progressBarClasses}
          style={{ width: `${percent}%`, height: computedHeight }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        >
          {children}
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  barClassName: PropTypes.string,
  wrapperStyle: PropTypes.object
};

Progress.defaultProps = {
  value: 0,
  max: 100
};

export default Progress;
export { Progress as MDBProgress };
