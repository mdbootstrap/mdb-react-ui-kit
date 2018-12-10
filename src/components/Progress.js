import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Progress = ({ animated, barClassName, children, className, color, height, material, max, min, preloader, striped, wrapperStyle, value, attributes }) => {

  const percent = ((value - min) / (max-min)) * 100;

  const progressClasses = classNames(
    "progress",
    material && "md-progress",
    preloader && (color ? color+"-color" : "primary-color")+"-dark",
    className
  );

  const progressBarClasses = classNames(
    preloader ? "indeterminate" : "progress-bar",
    barClassName ? barClassName : null,
    animated ? "progress-bar-animated" : null,
    color ? `bg-${color}` : null,
    striped || animated ? "progress-bar-striped" : null
  );

  const computedHeight = height ? height : (children && "1rem");

  const computedWrapperStyle = { ...wrapperStyle, height: computedHeight };

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
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {children}
      </div>
    </div>
  );
}

Progress.propTypes = {
  animated: PropTypes.bool,
  barClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  material: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  preloader: PropTypes.bool,
  striped: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  value: PropTypes.number
};

Progress.defaultProps = {
  animated: false,
  barClassName: "",
  className: "",
  color: "indigo",
  height: "",
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};

export default Progress;
export { Progress as MDBProgress };
