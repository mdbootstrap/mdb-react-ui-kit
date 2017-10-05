import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

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
      ...attributes
    } = this.props;

    const percent = ((_.toNumber(value) / _.toNumber(max)) * 100);

    const progressClasses = classNames(
      'progress',
      className
    );

    const progressBarClasses = classNames(
      'progress-bar',
      barClassName ? barClassName : null,
      animated ? 'progress-bar-animated' : null,
      color ? `bg-${color}` : null,
      striped || animated ? 'progress-bar-striped' : null
    );

    const height = children ? '1rem' : '';

    return (
      <div {...attributes} className={progressClasses} style={{height: height}}>
        <div 
          className={progressBarClasses}
          style={{width: `${percent}%`, height: height}}
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string
};

Progress.defaultProps = {
  value: 0,
  max: 100
};

export default Progress;


