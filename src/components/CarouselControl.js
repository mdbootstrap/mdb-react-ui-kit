import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Control extends Component {

  render() {
 
    let {
      direction,
      text,
      className,
      onClick,
      tag: Tag,
      iconLeft,

      ...attributes
    } = this.props;

    const classes = classNames(
      'carousel-control-' + direction,
      className
    );

    const caretClasses = classNames(
      'carousel-control-' + direction + '-icon'
    );

    if(direction === 'prev') {
      text = 'Previous';
    } else if(direction === 'next') {
      text = 'Next';
    }

    return (
      <Tag className={classes} data-slide={direction} onClick={onClick}>
        {this.props.iconLeft ? (
          <i className="fa fa-chevron-left"></i>
        ) : this.props.iconRight ? (
          <i className="fa fa-chevron-right"></i>
        ) : (
          <div>
            <span className={caretClasses} aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
         )}
      </Tag>
    );
  }
}

Control.propTypes = {
  onClick: PropTypes.any,
  text: PropTypes.string,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  iconLeft: PropTypes.bool
};

Control.defaultProps = {
  tag: 'a'
};

export default Control;